import Image from 'next/image';
import { ReactNode } from 'react';

export const BannerRoot = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-zinc-900 py-0.5">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-min">
        <div className=" flex flex-row relative isolate overflow-hidden bg-zinc-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
          {children}
        </div>
      </div>
      <hr className="h-1 border-t-0  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e9357a] to-[#a41b4f]" />
    </div>
  );
};

export const BannerImage = ({
  imageSrc,
  imageAlt,
  imageWidth = 500,
  imageHeight = 500,
}: {
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}) => {
  return (
    <div className="relative mt-16 h-80 lg:mt-8">
      <Image
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
        alt={imageAlt}
      />
    </div>
  );
};

export const BannerContent = ({
  children,
  direction = 'r',
}: {
  children: ReactNode;
  direction?: 'l' | 'r';
}) => {
  return (
    <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
      {children}
    </div>
  );
};

export const BannerButton = ({ children }: { children: ReactNode }) => {
  return <div className="mt-6">{children}</div>;
};

export const Banner = {
  Root: BannerRoot,
  Image: BannerImage,
  Content: BannerContent,
  Button: BannerButton,
};
