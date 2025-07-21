export default function FormPracticePage() {
  return (
    <div className="p-7">
      <h2 className="text-6xl text-zinc-600 text-center mb-6">
        フォーム練習用のページです。
      </h2>
      <div>
        <form className="flex flex-col items-center justify-center gap-6">
          <div className="flex items-center gap-3">
            <label htmlFor="name">名前：</label>
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="text"
              id="name"
            />
          </div>
          <div className="flex items-center gap-3">
            <p>性別：</p>
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="radio"
              id="male"
              name="gender"
              value="male"
            />
            <label htmlFor="male">男性</label>
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="radio"
              id="female"
              name="gender"
              value="female"
            />
            <label htmlFor="female">女性</label>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="email">メールアドレス</label>
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="email"
              id="email"
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="portal">郵便番号</label>
            <input
              className="border-yellow-200 rounded-2xl border-2 p-2"
              type="text"
              id="portal"
            />
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="message">メッセージ</label>
            <textarea
              name=""
              id="message"
              className="border-yellow-200 rounded-2xl border-2 p-2"
            />
          </div>
          <div className="flex items-center gap-3">
            <p>趣味は？</p>
            <input type="checkbox" name="hobbies" id="travel" />
            <label htmlFor="travel">旅行</label>
            <input type="checkbox" name="hobbies" id="reading" />
            <label htmlFor="reading">読書</label>
            <input type="checkbox" name="hobbies" id="soccer" />
            <label htmlFor="soccer">サッカー</label>
            <input type="checkbox" name="hobbies" id="baseball" />
            <label htmlFor="baseball">野球</label>
            <input type="checkbox" name="hobbies" id="movie" />
            <label htmlFor="movie">映画鑑賞</label>
          </div>
          <div className="flex items-center gap-3">
            <label htmlFor="category">カテゴリー</label>
            <select
              name="category"
              id="category"
              defaultValue=""
              className="border-yellow-200 rounded-2xl border-2 p-2"
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
            <input type="checkbox" name="agree" id="agree" />
            <label htmlFor="agree">以上に、同意しました。</label>
          </div>
        </form>
      </div>
    </div>
  );
}
