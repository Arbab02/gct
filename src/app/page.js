import Image from "next/image";
import HeroSection from "/src/components/HeroSection.jsx";
import Hero from "/src/components/Hero.jsx";
import Form from "/src/components/Form.tsx"
import Highlights from "/src/components/FeaturedHighlights.jsx";

export default function Home() {
  return (
    <>
    <Hero/>
    <HeroSection/>
    <Highlights/>
    <Form/>
    </>
  );
}
