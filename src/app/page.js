import Hero from './components/layout/Hero';
import HomeMenu from './components/layout/HomeMenu';
import SectionHeaders from './components/layout/SectionHeaders';

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders subHeader={'Our story'} mainHeader={'About us'} />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
            Welcome to our pizza shop! We pride ourselves on delivering fresh,
            delicious pizzas made with the finest ingredients. Whether you are
            craving a classic Margherita or something more adventurous, we have
            got the perfect pizza for you!
          </p>
          <p>
            From our signature sauces to our hand-tossed crusts, every pizza is
            crafted with care. Enjoy a variety of toppings and flavors that will
            satisfy any appetite. Order now and taste the difference!
          </p>
          <p>
            Whether you are dining in or taking out, we promise to make your
            experience with us a delight. Your perfect pizza is just a click
            away!
          </p>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+94771371332"
          >
            +94 771 371 332
          </a>
        </div>
      </section>
    </>
  );
}
