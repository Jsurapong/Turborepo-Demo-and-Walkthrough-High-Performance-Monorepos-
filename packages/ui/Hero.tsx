type HeroProps = { image?: string; title?: string };

export const Hero = ({ image, title }: HeroProps) => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section
        id="hero"
        className="bg-curvy-light-mode dark:bg-curvy-dark-mode bg-no-repeat bg-contain bg-bottom"
      >
        {/* <!-- Hero Container --> */}
        <div className="container mx-auto px-6 text-center md:pt-20 pb-52">
          {image && <img src={image} alt="" className="mx-auto" />}
          <h1 className="max-w-2xl mx-auto mb-10 text-3xl font-bold leading-normal mt-14 md:text-4xl">
            {title}
          </h1>
        </div>
      </section>
    </>
  );
};
