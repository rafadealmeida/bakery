import { Button, Card } from 'flowbite-react';
import donuts from '../../../public/imagens/deliciosos-donuts.png';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="bg-zinc-900 py-0.5">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-min">
        <div className="relative isolate overflow-hidden bg-zinc-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle
              r={512}
              cx={512}
              cy={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#e9357a" />
                <stop offset={1} stopColor="#a41b4f" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <p className="mt-6 text-lg leading-8 text-gray-300 uppercase">
              The special taste
            </p>
            <div className="d-flex flex-col">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Get Your <br />
                Own Bite of
              </h2>
              <h2 className="text-3xl font-bold tracking-tight text-pink-500 sm:text-4xl">
                Safisfaction
              </h2>
            </div>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Cosmetics designed for skin care can be used to cleanse, exfoliate
              and protect the skin, as well as replenishing it, by the use of
              cleansers, toners, serums etc.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start ">
              <a
                href="#"
                className="bg-pink-600 text-white py-2.5 px-5 text-sm font-semibold  shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-900"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <Image
              src="/imagens/deliciosos-donuts.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
      <hr className="h-1 border-t-0  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e9357a] to-[#a41b4f]" />
    </div>
  );
}
