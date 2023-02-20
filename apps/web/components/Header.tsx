import { Header as HeaderUI } from "ui";

const Header = () => {
  const menus = [
    {
      title: "BTC",
      onClick: () => {
        window.location.href = "#hero";
      },
    },
    {
      title: "ETH",
      onClick: () => {
        window.location.href = "#eth";
      },
    },
    {
      title: "DOGE",
      onClick: () => {
        window.location.href = "#doge";
      },
    },
  ];

  return <HeaderUI menus={menus} />;
};

export default Header;
