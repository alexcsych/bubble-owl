"use client";

import { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Loader2, Camera } from "lucide-react";
import { useTranslations } from "next-intl";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  getProfileFormSchema,
  ProfileFormValues,
} from "@/lib/schemas/profile-form.schema";

export default function ProfileForm () {
  const { data: session } = authClient.useSession();
  const t = useTranslations("form");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isUploading, setIsUploading] = useState(false);

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(getProfileFormSchema(t)),
    values: {
      name: session?.user?.name || "",
    },
  });

  const { isSubmitting } = form.formState;

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const res = await fetch("/api/profile/upload-url", {
        method: "POST",
        body: JSON.stringify({ contentType: file.type, fileName: file.name }),
      });
      const { signedUrl, publicUrl } = await res.json();

      await fetch(signedUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      await authClient.updateUser({ image: publicUrl });

      window.location.reload();
    } catch (error) {
      console.error("Upload failed", error);
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (values: { name: string }) => {
    await authClient.updateUser(
      { name: values.name },
      {
        onError: ctx => {
          const errorMessage =
            ctx.error.message || t("errors.something-went-wrong");

          form.setError("root", { message: errorMessage });
        },
      },
    );
  };

  return (
    <div className='w-full max-w-md border rounded-2xl p-6 shadow-xl/30 shadow-brand-purple space-y-4'>
      <div className='flex flex-col items-center space-y-4'>
        <div
          className='relative group cursor-pointer'
          onClick={() => fileInputRef.current?.click()}
        >
          <Avatar className='size-32 border-4 border-brand-purple/20 transition group-hover:border-brand-purple'>
            <AvatarImage
              src={session?.user?.image || ""}
              className='object-cover'
            />
            <AvatarFallback className='text-2xl'>
              {session?.user?.name?.[0]}
            </AvatarFallback>
          </Avatar>

          <div className='absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity'>
            {isUploading ? (
              <Loader2 className='animate-spin text-white' />
            ) : (
              <Camera className='text-white' />
            )}
          </div>

          <input
            type='file'
            ref={fileInputRef}
            className='hidden'
            accept='image/*'
            onChange={handleFileChange}
          />
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Controller
                name='name'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='name'>{t("labels.name")}</FieldLabel>
                    <Input
                      {...field}
                      id='name'
                      placeholder={t("placeholders.name")}
                      aria-invalid={fieldState.invalid}
                      autoComplete='name'
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>

          <FieldSet>
            <Field orientation='vertical'>
              <Button type='submit' disabled={isSubmitting}>
                {t("save-changes")}
              </Button>
            </Field>
          </FieldSet>
        </FieldGroup>
      </form>
    </div>
  );
}
