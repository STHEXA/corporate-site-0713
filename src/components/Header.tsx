export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow-md bg-white p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-6xl font-bold text-zinc-600">CHOTTO</h1>
        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <a
                href="#hero"
                className="text-zinc-600 text-2xl transition-opacity ease-in-out duration-75 hover:opacity-60"
              >
                ホーム
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-zinc-600 text-2xl transition-opacity ease-in-out duration-75 hover:opacity-60"
              >
                会社概要
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-zinc-600 text-2xl transition-opacity ease-in-out duration-75 hover:opacity-60"
              >
                サービス
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-zinc-600 text-2xl transition-opacity ease-in-out duration-75 hover:opacity-60"
              >
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
