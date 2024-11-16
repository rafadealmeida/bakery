import { XMarkIcon } from '@heroicons/react/20/solid';
import { ButtonGradient } from '../ButtonGradient';
import { Banner } from '../Banner';

export default function BannerCelebrate() {
  return (
    <Banner.Root
      className="sm:bg-gray-100 items-center lg\:px-0 justify-between "
      withCicleGradient={false}
    >
      <Banner.Content className="lg:max-w-max items-center">
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h2 className="text-5xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 text-center mx-auto w-4/6">
            Let Us Help You To Celebrate Your Special Day
          </h2>
          <span className="text-gray-500 text-center w-3/5 text-xl">{`These days could be birthday, Valentine's day, father's day,
mother's day, Christmas, and Halloween.`}</span>
        </div>
        <Banner.Button className="flex justify-center mt-0">
          <ButtonGradient className="mt-0">Order Now</ButtonGradient>
        </Banner.Button>
      </Banner.Content>
    </Banner.Root>
  );
}
