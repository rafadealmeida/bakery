import { ButtonGradient } from '../ButtonGradient';
import { Banner } from '../Banner';

export default function BannerHome() {
  return (
    <Banner.Root>
      <Banner.Content>
        <p className="mt-6 text-lg leading-8 text-gray-300 uppercase">
          The special taste
        </p>
        <div className="d-flex flex-col">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get Your <br />
            Own Bite of
          </h2>
          <h2 className="text-3xl font-bold tracking-tight text-pink-500 sm:text-4xl">
            Satisfaction
          </h2>
        </div>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          Cosmetics designed for skin care can be used to cleanse, exfoliate and
          protect the skin, as well as replenishing it, by the use of cleansers,
          toners, serums etc.
        </p>
        <Banner.Button>
          <ButtonGradient>Order Now</ButtonGradient>
        </Banner.Button>
      </Banner.Content>
      <Banner.Image
        imageSrc="/imagens/deliciosos-donuts.png"
        imageAlt="Delicious Donuts"
      />
    </Banner.Root>
  );
}
