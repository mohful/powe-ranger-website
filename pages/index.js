import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Footer from "../components/footer";
import Benefits from "../components/benefits";
import { benefitOne } from "../components/data";

const Home = () => {
  return (
    <>
      <Head>
        <title>PoweRanger - Autonomous Power Line Inspection</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Key Highlights"
        title="Discover Our Top Features">
      </SectionTitle>
      {/* <Video /> */}
      {/* <Testimonials /> */}
      <Benefits data={benefitOne} />
      <Footer />
    </>
  );
}

export default Home;