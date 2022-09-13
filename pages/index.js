import Head from 'next/head';
import NavBar from '../src/components/NavBar/NavBar';
import HeroContent from '../src/components/HeroContent/HeroContent';
import CommercialContent from '../src/components/CommercialContent/CommercialContent';
import FooterContent from '../src/components/FooterContent/FooterContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Land land</title>
        <meta name="description" content="Land land page" />
        <link rel="icon" href="/land-land.png" />
      </Head>
      <NavBar />
      <main>
        <HeroContent />
        <CommercialContent />
      </main>
      <FooterContent />
    </div>
  );
}
