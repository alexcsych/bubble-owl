"use client";

import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link, useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  getSignUpFormSchema,
  SignUpFormValues,
} from "@/lib/schemas/signup-form.shema";
import { Checkbox } from "@/components/ui/checkbox";
import { authClient } from "@/lib/auth-client";

export default function SignUpForm () {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("signup-page");
  const tForm = useTranslations("form");

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(getSignUpFormSchema(tForm)),
    defaultValues: { name: "", email: "", password: "", terms: false },
  });

  const { isSubmitting } = form.formState;

  async function onSubmit ({ name, email, password }: SignUpFormValues) {
    await authClient.signUp.email(
      { name, email, password },
      {
        onSuccess: () => {
          router.push("/");
        },
        onError: ctx => {
          const errorMessage =
            ctx.error.message || tForm("errors.something-went-wrong");

          if (ctx.error.status === 422) {
            form.setError("email", { message: tForm("errors.email-taken") });
          } else {
            form.setError("root", { message: errorMessage });
          }
        },
      },
    );
  }

  return (
    <div className='w-full max-w-md border rounded-2xl p-6 shadow-xl/30 shadow-brand-purple space-y-4'>
      <div className='space-y-2 text-center'>
        <h2 className='font-bold text-2xl'>{t("title")}</h2>
        <p className='text-muted-foreground text-sm'>{t("desc")}</p>
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
                    <FieldLabel htmlFor='name'>
                      {tForm("labels.name")}
                    </FieldLabel>
                    <Input
                      {...field}
                      id='name'
                      placeholder={tForm("placeholders.name")}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

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

              <Controller
                name='terms'
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className='flex gap-2'>
                      <Checkbox
                        id='terms'
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                      <FieldLabel htmlFor='terms'>
                        {tForm("terms-desc")}{" "}
                        <Link className='hover:underline' href='/'>
                          {tForm("terms-link")}
                        </Link>
                      </FieldLabel>
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
          </FieldSet>
        </FieldGroup>
      </form>
      <p className='text-center text-muted-foreground text-sm'>
        {t("login-link-desc")}{" "}
        <Link
          className='text-brand-purple font-bold hover:underline'
          href='/login'
        >
          {t("login-link")}
        </Link>
      </p>
    </div>
  );
}
