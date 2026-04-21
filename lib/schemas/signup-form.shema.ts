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
        6,
        t
          ? t("validation.password-too-short")
          : "Password must be at least 8 characters.",
      ),
  });
}

export type SignUpFormValues = z.infer<
  Awaited<ReturnType<typeof getSignUpFormSchema>>
>;
