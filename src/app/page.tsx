import Banner from '@/components/Banner';
import DonutsGrid from '@/components/DonutsGrid';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Banner />
      <DonutsGrid />
    </section>
  );
}
