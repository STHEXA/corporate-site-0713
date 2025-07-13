export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-blue-50 px-4 pt-20 w-full"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          あなたのビジネスを、次のステージへ
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Chotto株式会社は、デジタルの力で価値を届ける企業です。
        </p>
        <a
          href="#contact"
          className="inline-block rounded bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition"
        >
          お問い合わせはこちら
        </a>
      </div>
    </section>
  );
}
