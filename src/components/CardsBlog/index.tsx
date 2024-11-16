import Image, { StaticImageData } from 'next/image';

export interface CardsBlogProps {
  title: string;
  content: string;
  imgSrc: StaticImageData;
}

export const CardsBlog = ({ title, content, imgSrc }: CardsBlogProps) => {
  return (
    <div className="flex flex-col ">
      <Image
        width={500}
        height={500}
        src={imgSrc}
        alt={title}
        className="rounded-sm"
      />

      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{content}</p>
    </div>
  );
};
