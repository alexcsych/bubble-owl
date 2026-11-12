import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { s3 } from "@/lib/s3";
import PostHogClient from "@/lib/posthog";

export async function POST (req: Request) {
  const posthog = PostHogClient();

  try {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
      posthog.capture({
        distinctId: 'api_security_monitor',
        event: 'security_unauthorized_api_access',
        properties: {
          endpoint: 'POST /api/profile/upload-avatar',
          reason: 'missing_or_invalid_session',
          timestamp: new Date().toISOString()
        }
      });
      await posthog.shutdown();

      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { contentType, fileName } = await req.json();
    const fileKey = `avatars/${session.user.id}-${Date.now()}-${fileName}`;

    const command = new PutObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: fileKey,
      ContentType: contentType,
    });

    const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });
    const publicUrl = `${process.env.NEXT_PUBLIC_S3_URL}/${fileKey}`;

    posthog.capture({
      distinctId: session.user.id,
      event: 'avatar_upload_url_generated',
      properties: {
        file_name: fileName,
        content_type: contentType,
        timestamp: new Date().toISOString()
      }
    });
    await posthog.shutdown();

    return NextResponse.json({ signedUrl, publicUrl });

  } catch (error) {
    console.error("Error generating signed URL:", error);

    posthog.capture({
      distinctId: 'api_security_monitor',
      event: 'api_internal_error',
      properties: {
        endpoint: 'POST /api/upload-avatar',
        error_message: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      }
    });
    await posthog.shutdown();

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}