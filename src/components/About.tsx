import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-[108px] min-h-screen bg-white px-4 py-20 flex items-center justify-center"
    >
      <div className="max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          私たちについて
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Chotto株式会社は、Web制作・アプリ開発・DX支援を通じて、クライアントの課題を解決するパートナーです。
          小さなチームですが、ちょっといい未来をつくるために日々ちょっとずつ進化しています。
        </p>
      </div>
    </section>
  );
}
