import { Link } from "react-scroll";

const links = [
  { path: "home", name: "خانه" },
  { path: "tours", name: "تور ها" },
  { path: "discography", name: "فهرست ها" },
  { path: "contact", name: "ارتباط با ما" },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, inx) => (
        <Link
          key={inx}
          className={`${linkStyles} cursor-pointer border-b-2 border-transparent`}
          to={link.path}
          smooth
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
