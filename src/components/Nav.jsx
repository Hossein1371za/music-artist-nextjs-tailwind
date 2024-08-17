import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

const links = [
  { path: "home", name: "خانه" },
  { path: "tours", name: "تور ها" },
  { path: "discography", name: "فهرست ها" },
  { path: "contact", name: "ارتباط با ما" },
];

const Nav = ({ containerStyles, linkStyles }) => {
  const isDesktop = useMediaQuery({
    query: "(min-width:1310px)",
  });
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, inx) => (
        <Link
          key={inx}
          className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
          to={link.path}
          smooth={!isDesktop ? false : true}
          spy
          offset={-50}
          activeClass="active"
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
