import { XMarkIcon } from '@heroicons/react/20/solid';
import { ButtonGradient } from '../ButtonGradient';
import { Banner } from '../Banner';

export default function BannerMiddle() {
  return (
    <Banner.Root className="items-center">
      <div className="relative max-h-fit flex items-center justify-center">
        <div className="relative">
          <Banner.Image
            imageSrc="/imagens/cupcake.png"
            imageAlt="Delicious Donuts"
            className="z-10 h-30"
            imageWidth={300}
            imageHeight={300}
          />

          <div className="absolute inset-0 bg-white/30 backdrop-blur-md border border-white">
            <div className="absolute inset-0 w-1/2 bg-gradient-to-b from-white/70 to-white/10 backdrop-blur-lg"></div>
            <div className="absolute inset-0 right-0 w-1/2 bg-white/40 backdrop-blur-sm"></div>
          </div>
        </div>
      </div>

      <Banner.Content>
        <div className="d-flex flex-col text-right">
          <h2 className="text-9xl font-bold tracking-tight text-white sm:text-7xl">
            Delicious
            <br />
            Cup Cake
          </h2>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-300 text-right">
          A cupcake is a small cake designed to serve one person, which may be
          baked in a small thin paper or aluminum cup.
        </p>
        <Banner.Button className="flex justify-end">
          <ButtonGradient variant="secondary">Order Now</ButtonGradient>
        </Banner.Button>
      </Banner.Content>
    </Banner.Root>
  );
}
