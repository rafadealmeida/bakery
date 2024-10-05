import BannerHome from '@/components/BannerHome';
import BannerMiddle from '@/components/BannerMiddle';
import DonutsGrid from '@/components/DonutsGrid';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <BannerHome />
      <DonutsGrid />
      <BannerMiddle />
    </section>
  );
}
