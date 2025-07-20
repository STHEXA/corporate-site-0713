import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "名前は必須です。"),
  email: z.email("メールアドレスは必須です。"),
  message: z.string().min(10, "メッセージは10文字以上でお願いします。"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
