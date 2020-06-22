import Link from "next/link";
const menuObject = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Projects",
    link: "/projects",
  },
  {
    title: "contactUs",
    link: "/contactUs",
  },
];

const HomePageMenu = ({ type }) => {
  const renderedMenu = menuObject.map((menu) => {
    return (
      <p>
        <Link href={menu.link} variant="primary">
          {menu.title}
        </Link>
      </p>
    );
  });
  return renderedMenu;
};
export default HomePageMenu;
