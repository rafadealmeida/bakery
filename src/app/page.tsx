import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { cupCakes, products, topDonuts } from '@/util/products';
import SkeletonGrid from '@/components/SkeletonGrid';
import BannerDonut from '@/components/BannerDonut';
import BannerCelebrate from '@/components/BannerCelebrate';
import BannerOrder from '@/components/BannerOrder';
import FormContactUs from '@/components/Form';
import { JoinUs } from '@/components/JoinUs';
import { Footer } from '@/components/Footer';

// Lazy load the components
const BannerHome = dynamic(() => import('@/components/BannerHome'));
const BannerMiddle = dynamic(() => import('@/components/BannerMiddle'));
const DonutsGrid = dynamic(() => import('@/components/DonutsGrid'), {
  ssr: false,
});
const Blog = dynamic(() => import('@/components/Blog'), {
  ssr: false,
});

// Fallback component
const LoadingFallback = () => <div>Loading...</div>;

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Suspense fallback={<LoadingFallback />}>
        <BannerHome />
      </Suspense>

      <Suspense fallback={<SkeletonGrid itemCount={6} />}>
        {products && (
          <DonutsGrid
            title="Best Foods For You"
            subtitle="Baked goods categories like bars, breads (bagels, buns, rolls,
              biscuits and loaf breads), cookies, desserts (cakes, cheesecakes
              and pies), muffins, pizza, snack cakes etc"
            products={products}
            textButton="See more"
          />
        )}
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <BannerMiddle />
      </Suspense>

      <Suspense fallback={<SkeletonGrid itemCount={6} />}>
        {cupCakes && (
          <DonutsGrid
            title="Trending Cup Cake"
            subtitle="Small cakes were baked in individual ramekins, hence the name cupcake"
            products={cupCakes}
            textButton="Order Now"
          />
        )}
      </Suspense>

      <Suspense fallback={<LoadingFallback />}>
        <BannerDonut />
      </Suspense>
      <Suspense fallback={<SkeletonGrid itemCount={6} />}>
        {topDonuts && (
          <DonutsGrid
            title="Trending Cup Cake"
            subtitle="Small cakes were baked in individual ramekins, hence the name cupcake"
            products={topDonuts}
            textButton="Order Now"
          />
        )}
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Blog />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <BannerCelebrate />
      </Suspense>

      <JoinUs />
      {/* <Suspense fallback={<LoadingFallback />}>
        <BannerOrder />
      </Suspense> */}

      <FormContactUs />
      <Footer />
    </section>
  );
}
