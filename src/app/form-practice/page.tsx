"use client";

import {
  FormPracticeData,
  formPracticeSchema,
} from "@/schemas/formPracticeSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function FormPracticePage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormPracticeData>({
    resolver: zodResolver(formPracticeSchema),
    defaultValues: { hobbies: [] },
  });

  const onSubmit = (data: FormPracticeData) => {
    alert(data);
  };

  return (
    <div className="p-7">
      <h2 className="text-6xl text-zinc-600 text-center mb-6">
        フォーム練習用のページです。
      </h2>
      <div>
        <form
          className="flex flex-col items-center justify-center gap-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center gap-3">
            <label htmlFor="name">名前：</label>
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="text"
              id="name"
              {...register("name")}
            />
          </div>
          <div className="flex items-center gap-3">
            <p>性別：</p>
            {errors.gender && (
              <p className="text-red-500">{errors.gender.message}</p>
            )}
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="radio"
              id="male"
              value="male"
              {...register("gender")}
            />
            <label htmlFor="male">男性</label>
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="radio"
              id="female"
              value="female"
              {...register("gender")}
            />
            <label htmlFor="female">女性</label>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="email">メールアドレス</label>
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="email"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="portal">郵便番号</label>
            {errors.portal && (
              <p className="text-red-500">{errors.portal.message}</p>
            )}
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="text"
              id="portal"
              {...register("portal")}
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="message">メッセージ</label>
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}
            <textarea
              id="message"
              className="border-yellow-200 rounded-2xl border-2 p-2"
              {...register("message")}
            />
          </div>
          <div className="flex items-center gap-3">
            <p>趣味は？</p>
            {errors.hobbies && (
              <p className="text-red-500">{errors.hobbies.message}</p>
            )}
            <input type="checkbox" id="travel" {...register("hobbies")} />
            <label htmlFor="travel">旅行</label>
            <input type="checkbox" id="reading" {...register("hobbies")} />
            <label htmlFor="reading">読書</label>
            <input type="checkbox" id="soccer" {...register("hobbies")} />
            <label htmlFor="soccer">サッカー</label>
            <input type="checkbox" id="baseball" {...register("hobbies")} />
            <label htmlFor="baseball">野球</label>
            <input type="checkbox" id="movie" {...register("hobbies")} />
            <label htmlFor="movie">映画鑑賞</label>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="category">カテゴリー</label>
            {errors.category && (
              <p className="text-red-500">{errors.category.message}</p>
            )}
            <select
              id="category"
              defaultValue=""
              className="border-yellow-200 rounded-2xl border-2 p-2"
              {...register("category")}
            >
              <option value="" disabled>
                --
              </option>
              <option value="bug">バグ報告</option>
              <option value="feedback">フィードバック</option>
              <option value="other">その他</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <input type="checkbox" id="agree" {...register("agree")} />
            {errors.agree && (
              <p className="text-red-500">{errors.agree.message}</p>
            )}
            <label htmlFor="agree">以上に、同意しました。</label>
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "送信中..." : "送信"}
          </button>
        </form>
      </div>
    </div>
  );
}
