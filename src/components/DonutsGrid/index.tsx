import Image, { StaticImageData } from 'next/image';
import { Rating } from '../Rating';
import { ButtonGradient } from '../ButtonGradient';
import Link from 'next/link';

export interface Product {
  id: number;
  name: string;
  gradient: string;
  href: string;
  price: string;
  rating: number;
  imageSrc: StaticImageData;
  imageAlt: string;
}

export default function DonutsGrid({
  products,
  title,
  subtitle,
  textButton,
}: {
  products: Product[];
  title: string;
  subtitle: string;
  textButton: string;
}) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="w-full flex flex-col items-center">
          <div className="w-full flex flex-col items-center justify-center gap-4 mb-10">
            <h2 className="text-5xl inline-block text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-700 pb-2">
              {title}
            </h2>
            <span className="text-gray-500 text-center w-3/5">{subtitle}</span>
          </div>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {products &&
              products?.map((product) => (
                <Link href={product.href} key={product.id} className="group">
                  <div
                    className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl ${product.gradient} xl:aspect-h-8 xl:aspect-w-7`}
                  >
                    {product.imageSrc && (
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        className="min-h-[400px] max-h-[400px] w-full object-contain object-center group-hover:opacity-75"
                        width={400}
                        height={400}
                      />
                    )}
                  </div>
                  <div className="flex items-center bg-gray-50 py-2 px-5 rounded-b-lg">
                    <div className="flex flex-col">
                      <Rating rating={product.rating as Rating} />
                      <h3 className="mt-4 text-sm text-gray-700">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                      <a
                        href="#"
                        className="rounded-md bg-pink-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="size-6"
                        >
                          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <ButtonGradient>{textButton}</ButtonGradient>
        </div>
      </div>
    </div>
  );
}
