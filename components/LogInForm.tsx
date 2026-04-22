"use client";

import { Eye, EyeOff } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  getLogInFormSchema,
  LogInFormValues,
} from "@/lib/schemas/login-form.shema";
import { authClient } from "@/lib/auth-client";

export default function LogInForm () {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("login-page");
  const tForm = useTranslations("form");

  const form = useForm<LogInFormValues>({
    resolver: zodResolver(getLogInFormSchema(tForm)),
    defaultValues: { email: "", password: "" },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit ({ email, password }: LogInFormValues) {
    await authClient.signIn.email(
      { email, password },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: ctx => {
          form.resetField("password");

          if (ctx.error.status === 401) {
            form.setError("root", {
              message: tForm("errors.invalid-credentials"),
            });
          } else {
            const errorMessage =
              ctx.error.message || tForm("errors.something-went-wrong");
            form.setError("root", { message: errorMessage });
          }
        },
      },
    );
  }

  return (
    <div className='w-full max-w-md border rounded-2xl p-6 shadow-xl/30 shadow-brand-purple space-y-4'>
      <div className='space-y-2 text-center'>
        <h1 className='font-bold text-2xl'>{t("title")}</h1>
        <p className='text-muted-foreground text-sm'>{t("desc")}</p>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldGroup>
          <FieldSet>
            <FieldGroup>
              <Controller
                name='email'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='email'>
                      {tForm("labels.email")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id='email'
                      placeholder={tForm("placeholders.email")}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name='password'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor='password'>
                      {tForm("labels.password")}
                    </FieldLabel>
                    <div className='relative'>
                      <Input
                        {...field}
                        id='password'
                        type={showPassword ? "text" : "password"}
                        placeholder={tForm("placeholders.password")}
                        className='pr-8'
                        aria-invalid={fieldState.invalid}
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-0 inset-y-0 aspect-square text-muted-foreground hover:text-foreground transition-colors outline-none flex items-center justify-center'
                        aria-label={
                          showPassword ? "Hide password" : "Show password"
                        }
                      >
                        {showPassword ? (
                          <EyeOff size={18} strokeWidth={2} />
                        ) : (
                          <Eye size={18} strokeWidth={2} />
                        )}
                      </button>
                    </div>
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </FieldGroup>
          </FieldSet>

          {form.formState.errors.root && (
            <p className='text-sm font-medium text-destructive text-center mt-4'>
              {form.formState.errors.root.message}
            </p>
          )}

          <FieldSet>
            <Field orientation='vertical'>
              <Button type='submit' disabled={isSubmitting}>
                {t("form-submit")}
              </Button>
            </Field>
            <FieldSeparator>{t("or-continue-with")}</FieldSeparator>
            <Field orientation='horizontal' className='justify-center'>
              <Button
                type='button'
                variant='outline'
                onClick={() => authClient.signIn.social({ provider: "google" })}
              >
                <Icons.google className='h-4 w-4' />
                Google
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => authClient.signIn.social({ provider: "github" })}
              >
                <Icons.gitHub className='h-4 w-4' />
                GitHub
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() =>
                  authClient.signIn.social({ provider: "discord" })
                }
              >
                <Icons.discord className='h-4 w-4' />
                Discord
              </Button>
            </Field>
          </FieldSet>
        </FieldGroup>
      </form>
      <p className='text-center text-muted-foreground text-sm'>
        {t("signup-link-desc")}{" "}
        <Link
          className='text-brand-purple font-bold hover:underline'
          href='/signup'
        >
          {t("signup-link")}
        </Link>
      </p>
    </div>
  );
}
