import z from "zod";

export function getLogInFormSchema (t?: (key: string) => string) {
  return z.object({
    email: z.email(
      t ? t("validation.invalid-email") : "Invalid email address.",
    ),
    password: z
      .string()
      .min(
        8,
        t
          ? t("validation.password-too-short")
          : "Password must be at least 8 characters.",
      )
      .regex(
        /\p{Lu}/u,
        t
          ? t("validation.password-uppercase")
          : "Password must contain at least one uppercase letter",
      )
      .regex(
        /\p{Ll}/u,
        t
          ? t("validation.password-lowercase")
          : "Password must contain at least one lowercase letter",
      )
      .regex(
        /\d/,
        t
          ? t("validation.password-number")
          : "Password must contain at least one number",
      ),
  });
}

export type LogInFormValues = z.infer<
  Awaited<ReturnType<typeof getLogInFormSchema>>
>;
