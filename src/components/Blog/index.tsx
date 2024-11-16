import { CardsBlogProps } from '../CardsBlog';

import pao from '../../../public/imagens/pao.jpg';
import bolo from '../../../public/imagens/bolo.jpg';
import pizza from '../../../public/imagens/images.jpg';
import Image from 'next/image';
import {
  ArrowTurnUpRightIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline';

const Blog = () => {
  const blogs: CardsBlogProps[] = [
    {
      title: 'The Secrets of Sourdough Bread: Flavor and Tradition',
      content:
        'Sourdough bread is an ancient tradition that delivers rich flavor and a unique texture. Learn how natural fermentation works, from making the starter to baking the perfect loaf at home.',
      imgSrc: pao,
    },
    {
      title: ' Cacao Nibs Cake: A Rustic and Sophisticated Delight',
      content:
        'This cacao nibs cake offers a blend of soft cake and crunchy, intense cacao nibs. Discover the recipe and the health benefits of using pure cacao in your baking.',
      imgSrc: bolo,
    },
    {
      title: 'Sourdough Pizza: Crunch and Flavor in Every Bite',
      content:
        'Sourdough pizza offers a light, flavorful crust with enhanced digestibility. Learn how to make sourdough pizza dough from scratch and enjoy a new level of pizza perfection.',
      imgSrc: pizza,
    },
  ];

  return (
    <div className="w-full bg-pink-50 mx-auto py-8">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 h-min flex flex-col items-center">
        <div className="w-full flex flex-col items-center justify-center gap-4 mb-10">
          <h2 className="text-5xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 pb-2">
            Our Blogs
          </h2>
          <span className="text-gray-500 text-center w-3/5 text-xl">{`These days could be birthday, Valentine's day, father's day, mother's
            day, Christmas, and Halloween.`}</span>
        </div>
        <div className="flex gap-6">
          {blogs.map((blog) => {
            return (
              <div
                className="flex flex-col gap-4 mt-8 max-w-[30%] mx-auto"
                key={blog.title}
              >
                <Image
                  src={blog.imgSrc}
                  alt="Foto de pães formando uma torre"
                  width={300}
                  objectFit="cover"
                  className="rounded-lg object-cover w-[500px] h-[300px]"
                />
                <span className="text-xl text-gray-700 font-semibold">
                  {blog.title}
                </span>
                <p className=" text-gray-600">{blog.content}</p>
                <div className="flex flex-row gap-2 text-pink-600 items-center font-bold">
                  <span>Read Post</span>
                  <ArrowUpRightIcon className="h-4 w-4" fontSize={'1rem'} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Blog;
