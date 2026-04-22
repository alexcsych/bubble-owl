import z from "zod";

export function getSignUpFormSchema (t?: (key: string) => string) {
  return z.object({
    name: z
      .string()
      .min(
        2,
        t
          ? t("validation.name-too-short")
          : "Name must be at least 2 characters.",
      ),
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
    terms: z
      .boolean()
      .refine(
        val => val === true,
        t
          ? t("validation.terms-required")
          : "You must accept the terms and conditions.",
      ),
  });
}

export type SignUpFormValues = z.infer<
  Awaited<ReturnType<typeof getSignUpFormSchema>>
>;
