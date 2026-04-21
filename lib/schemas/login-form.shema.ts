import z from "zod";

export function getLogInFormSchema (t?: (key: string) => string) {
  return z.object({
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

export type LogInFormValues = z.infer<
  Awaited<ReturnType<typeof getLogInFormSchema>>
>;
