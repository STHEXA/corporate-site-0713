"use client";

import { useForm } from "react-hook-form";
import { contactSchema } from "@/schemas/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ContactFormData } from "@/schemas/contactSchema";

export default function ContactForm() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        throw new Error("送信エラーです。");
      }
      console.log(res);
      reset();
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      console.error(e);
    }
  };

  return (
    <div
      id="contact"
      className="min-h-screen flex flex-col gap-y-6 items-center scroll-mt-[108px] justify-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        お問い合わせフォーム
      </h2>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center gap-y-3"
        >
          <label htmlFor="name" className="text-zinc-600 text-3xl">
            お名前：
            <input
              id="name"
              type="text"
              placeholder="山田太郎"
              {...register("name")}
              className="border-2 rounded-3xl p-3"
            />
            {errors && <p className="text-red-600">{errors.name?.message}</p>}
          </label>
          <label htmlFor="email" className="text-zinc-600 text-3xl">
            メールアドレス：
            <input
              id="email"
              type="email"
              placeholder="xxxx@yyyy.co.jp"
              {...register("email")}
              className="border-2 rounded-3xl p-3"
            />
            {errors && <p className="text-red-600">{errors.email?.message}</p>}
          </label>
          <label htmlFor="message" className="text-zinc-600 text-3xl">
            お問い合わせ内容：
            <textarea
              id="message"
              placeholder="例：採用情報はどこにありますか？"
              {...register("message")}
              className="border-2 rounded-3xl p-3"
            />
            {errors && (
              <p className="text-red-600">{errors.message?.message}</p>
            )}
          </label>
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white text-3xl bg-blue-600 rounded-3xl p-3 hover:opacity-70"
          >
            {isSubmitting ? "送信中" : "送信"}
          </button>
        </form>
      </div>
    </div>
  );
}
