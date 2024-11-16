import donuts from '../../public/imagens/deliciosos-donuts.png';
import burguer from '../../public/imagens/burguer.png';
import pizza from '../../public/imagens/pizza.png';
import massa from '../../public/imagens/massa-folhada.png';
import frango from '../../public/imagens/frango.png';
import cupcake from '../../public/imagens/cupcake.png';
import lavander from '../../public/imagens/lavander.png';
import red from '../../public/imagens/red.png';
import donutChcolate from '../../public/imagens/donut_chocolate.png';
import donutPink from '../../public/imagens/donut-pink.png';
import { Product } from '@/components/DonutsGrid';

export const products: Product[] = [
  {
    id: 2,
    name: 'Burger',
    gradient: 'bg-gradient-to-b from-orange-100 from-60% to-white',
    href: '#',
    price: '$10',
    rating: 4,
    imageSrc: burguer,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 1,
    name: 'Doughnut',
    gradient: 'bg-gradient-to-b from-pink-100 from-60% to-white',
    href: '#',
    price: '$10',
    rating: 5,
    imageSrc: donuts,
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 3,
    name: 'Naga Pizza',
    gradient: 'bg-gradient-to-b from-green-50 from-60% to-white',
    href: '#',
    price: '$10',
    rating: 4,
    imageSrc: pizza,
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 6,
    name: 'Cup Cake',
    gradient: 'bg-gradient-to-b from-purple-100 from-60% to-white',
    href: '#',
    price: '$10',
    rating: 5,
    imageSrc: cupcake,
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },

  {
    id: 4,
    name: 'Patties Sandwich',
    gradient: 'bg-gradient-to-b from-amber-50 from-60% to-white',
    href: '#',
    price: '$10',
    rating: 4,
    imageSrc: massa,
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Crispy Chicken',
    gradient: 'bg-gradient-to-b from-orange-100 from-60% to-white',
    href: '#',
    price: '$10',
    rating: 4,
    imageSrc: frango,
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
];

export const cupCakes: Product[] = [
  {
    id: 2,
    name: 'Lavender Cupcake',
    gradient: 'bg-gradient-to-b from-pink-100 from-60%',
    href: '#',
    price: '$18',
    rating: 4,
    imageSrc: lavander,
    imageAlt:
      'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 1,
    name: 'Red Velvet Cupcake',
    gradient: 'bg-gradient-to-b from-orange-100 from-60%',
    href: '#',
    price: '$10',
    rating: 5,
    imageSrc: red,
    imageAlt:
      'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 3,
    name: 'Caramel Cupcake',
    gradient: 'bg-gradient-to-b from-purple-100 from-60%',
    href: '#',
    price: '$10',
    rating: 4,
    imageSrc: cupcake,
    imageAlt:
      'Person using a pen to cross a task off a productivity paper card.',
  },
];
export const topDonuts: Product[] = [
  {
    id: 2,
    name: 'Glazed Donut',
    gradient: 'bg-gradient-to-b from-pink-100 from-60%',
    href: '#',
    price: '$18',
    rating: 4,
    imageSrc: donuts,
    imageAlt: 'Glazed Donut',
  },
  {
    id: 1,
    name: 'Chocolate Donut',
    gradient: 'bg-gradient-to-b from-rose-100 from-60%',
    href: '#',
    price: '$10',
    rating: 5,
    imageSrc: donutChcolate,
    imageAlt: 'Chocolate Donut',
  },
  {
    id: 3,
    name: 'Pink Donut',
    gradient: 'bg-gradient-to-b from-rose-200 from-60%',
    href: '#',
    price: '$10',
    rating: 4,
    imageSrc: donutPink,
    imageAlt: 'Pink Donut.',
  },
];
