import { ButtonGradient } from '../ButtonGradient';
import { Banner } from '../Banner';

export default function BannerDonut() {
  return (
    <Banner.Root
      className="items-center lg\:px-0 justify-between  bg-gradient-to-b from-pink-50 to-pink-200 "
      withCicleGradient={false}
    >
      <div className="relative h-1/3 flex items-center justify-center">
        <div className="relative">
          <Banner.Image
            imageSrc="/imagens/deliciosos-donuts.png"
            imageAlt="Delicious Donuts"
            className="z-10 mb-8 h-[300px] w-[300px]"
            imageWidth={300}
            imageHeight={300}
          />

          <div className="absolute inset-0 bg-pink/30 backdrop-blur-md border border-pink-500">
            <div className="absolute inset-0 w-1/2 bg-gradient-to-b from-pink/70 to-pink/10 backdrop-blur-lg"></div>
            <div className="absolute inset-0 right-0 w-1/2 bg-pink/40 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>

      <Banner.Content>
        <div className="d-flex flex-col text-right">
          <span className="text-4xl font-bold tracking-tight text-gray-500 sm:text-2xl text">
            SPECIAL TASTE
          </span>
          <div className="mt-4">
            <h2 className="text-6xl tracking-tight text-pink-600 sm:text-5xl">
              Delightful
            </h2>
            <h2 className="text-6xl tracking-tight text-gray-500 sm:text-5xl">
              Donuts
            </h2>
          </div>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-400 text-right">
          A cupcake is a small cake designed to serve one person, which may be
          baked in a small thin paper or aluminum cup.
        </p>
        <Banner.Button className="flex justify-end">
          <ButtonGradient variant="goshtPink">Order Now</ButtonGradient>
        </Banner.Button>
      </Banner.Content>
    </Banner.Root>
  );
}
