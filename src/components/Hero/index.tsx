export default function Hero() {

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Uais Company
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Tecnologia que garante eficiência logística e proporciona
                redução de custos no transporte rodoviário.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-color-main-rappor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
                >
                  Fale Conosco
                </a>
                <a
                  href="#services"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Saiba Mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src="/imgs/trucks.jpg"
          alt=""
        />
      </div>
    </div>
  );
}