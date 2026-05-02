import z from "zod";

export function getProfileFormSchema (t?: (key: string) => string) {
  return z.object({
    name: z
      .string()
      .min(
        2,
        t
          ? t("validation.name-too-short")
          : "Name must be at least 2 characters.",
      ),
  });
}

export type ProfileFormValues = z.infer<
  Awaited<ReturnType<typeof getProfileFormSchema>>
>;
