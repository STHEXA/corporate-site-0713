type serviceList = {
  title: string;
  description: string;
  image: string;
};
export default function Services() {
  const serviceList: serviceList[] = [
    {
      title: "Web制作",
      description: "モダンなUIでビジネスを加速させるWebサイトを制作します。",
      image: "https://picsum.photos/300/200",
    },
    {
      title: "アプリ開発",
      description: "React NativeやFlutterを活用したスマホアプリを開発します。",
      image: "https://picsum.photos/310/200",
    },
    {
      title: "DX支援",
      description: "業務改善や社内ツールの導入などデジタル変革を支援します。",
      image: "https://picsum.photos/320/200",
    },
  ];
  return (
    <section
      id="services"
      className="min-h-screen flex flex-col gap-y-6 items-center scroll-mt-[108px] justify-center"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">主なサービス</h2>
      <ul className="flex items-center justify-center gap-x-[20px]">
        {serviceList.map((service) => (
          <li key={service.title}>
            <div className="rounded-3xl w-[300px] overflow-hidden">
              <img src={service.image} alt={service.title} />
              <div className="bg-gray-400 p-6">
                <p className="text-3xl mb-3">{service.title}</p>
                <p>{service.description}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
