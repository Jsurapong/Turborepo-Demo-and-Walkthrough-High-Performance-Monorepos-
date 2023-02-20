type CoinSectionProps = {
  image?: string;
  title: string;
  id?: string;
};

export const CoinSection = ({ image, title, id }: CoinSectionProps) => {
  return (
    <section id={id} className="bg-white dark:bg-darkBlue">
      {/* <!-- Productive Container --> */}
      <div className="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        {/* <!-- Image --> */}
        <div className="md:w-1/2">
          {image && <img src={image} alt="" className="mb-10" />}
        </div>
        {/* <!-- Content --> */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">{title}</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
