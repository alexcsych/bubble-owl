"use client";

import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  getSignUpFormSchema,
  SignUpFormValues,
} from "@/lib/schemas/signup-form.shema";

export default function SignUpForm () {
  const [showPassword, setShowPassword] = useState(false);
  const t = useTranslations("signup-page");
  const tForm = useTranslations("form");

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(getSignUpFormSchema(tForm)),
    defaultValues: { name: "", email: "", password: "" },
  });

  function onSubmit (data: SignUpFormValues) {
    console.log(data);
  }

  return (
    <div className='w-full max-w-md border rounded-2xl p-6 shadow-sm space-y-4'>
      <div className='space-y-2 text-center'>
        <h1 className='font-bold text-2xl'>{t("title")}</h1>
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
            </FieldGroup>
          </FieldSet>

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
                        className='pr-10'
                        aria-invalid={fieldState.invalid}
                      />
                      <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors outline-none'
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
        </FieldGroup>

        <Field orientation='vertical' className='mt-4'>
          <Button type='submit'>{t("form-submit")}</Button>
        </Field>
      </form>
      <p className='text-center text-muted-foreground text-sm'>
        {t("login-link-desc")}{" "}
        <Link className='hover:underline' href='/login'>
          {t("login-link")}
        </Link>
      </p>
    </div>
  );
}
