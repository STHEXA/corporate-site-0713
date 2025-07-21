import { z } from "zod";

export const formPracticeSchema = z.object({
  name: z.string().min(1, "名前は必須項目です"),
  email: z.email("メールアドレスは必須項目です"),
  portal: z
    .string()
    .length(7, "7桁で入力してください")
    .regex(/^[0-9]+$/, "数字のみ入力してください"),
  message: z
    .string()
    .min(1, "メッセージは必須です。")
    .max(20, "メッセージは20文字以下です"),
  gender: z.enum(["male", "female"], "性別を選択してください"),
  agree: z.literal(true, "同意が必要です"),
  category: z.enum(["bug", "feedback", "other"], "カテゴリを選択してください"),
  hobbies: z.array(z.string()).min(1, "ひとつ以上を選択してください"),
});

export type FormPracticeData = z.infer<typeof formPracticeSchema>;
