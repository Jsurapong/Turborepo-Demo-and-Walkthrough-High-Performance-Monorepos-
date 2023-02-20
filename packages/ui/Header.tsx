type HeaderProps = {
  menus?: { title: string; onClick?: () => void }[];
};

export const Header = ({ menus }: HeaderProps) => {
  return (
    <header className="container mx-auto mt-10 px-6 text-center h-40 md:h-20">
      {/* <!-- Dynamic Logo --> */}
      <div className="bg-logo-light-mode dark:bg-logo-dark-mode bg-no-repeat h-20 w-48 mx-auto md:mx-0 md:absolute top-10 left-10"></div>
      {/* <!-- Menu --> */}
      <div className="flex items-center justify-center space-x-4 md:space-x-10 md:absolute top-12 right-10">
        {menus?.map((menu) => (
          <a
            onClick={menu?.onClick ?? undefined}
            className="hover:text-accentCyan cursor-pointer"
          >
            {menu.title}
          </a>
        ))}
      </div>
    </header>
  );
};
