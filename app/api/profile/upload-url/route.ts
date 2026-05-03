import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { s3 } from "@/lib/s3";

export async function POST (req: Request) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { contentType, fileName } = await req.json();
  const fileKey = `avatars/${session.user.id}-${Date.now()}-${fileName}`;

  const command = new PutObjectCommand({
    Bucket: process.env.R2_BUCKET_NAME,
    Key: fileKey,
    ContentType: contentType,
  });

  const signedUrl = await getSignedUrl(s3, command, { expiresIn: 60 });
  const publicUrl = `${process.env.NEXT_PUBLIC_S3_URL}/${fileKey}`;

  return NextResponse.json({ signedUrl, publicUrl });
}
