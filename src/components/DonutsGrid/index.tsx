/*
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import donuts from '../../../public/imagens/deliciosos-donuts.png';
import burguer from '../../../public/imagens/burguer.png';
import pizza from '../../../public/imagens/pizza.png';
import massa from '../../../public/imagens/massa-folhada.png';
import frango from '../../../public/imagens/frango.png';
import cupcake from '../../../public/imagens/cupcake.png';
import Image from 'next/image';

const products = [
  {
    id: 2,
    name: 'Nomad Tumbler',
    gradient: 'bg-gradient-to-b from-orange-100 from-60%',
    href: '#',
    price: '$35',
    imageSrc: burguer,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 1,
    name: 'Earthen Bottle',
    gradient: 'bg-gradient-to-b from-pink-100 from-60%',
    href: '#',
    price: '$48',
    imageSrc: donuts,
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    gradient: 'bg-gradient-to-b from-[#ECE3D1] from-60%',
    href: '#',
    price: '$89',
    imageSrc: pizza,
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 6,
    name: 'Machined Mechanical Pencil',
    gradient: 'bg-gradient-to-b from-purple-100 from-60%',
    href: '#',
    price: '$35',
    imageSrc: cupcake,
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

  {
    id: 5,
    name: 'Machined Mechanical Pencil',
    gradient: 'bg-gradient-to-b from-amber-100 from-60%',
    href: '#',
    price: '$35',
    imageSrc: frango,
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    gradient: 'bg-gradient-to-b from-red-100 from-60%',
    href: '#',
    price: '$35',
    imageSrc: massa,
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

  // More products...
];

export default function DonutsGrid() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div
                className={`aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl ${product.gradient} xl:aspect-h-8 xl:aspect-w-7`}
              >
                <Image
                  src={product.imageSrc}
                  width={500}
                  height={500}
                  alt={product.imageAlt}
                  className="min-h-[500px] max-h-[500px] w-full object-contain object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
