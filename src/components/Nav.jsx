import { Link } from "react-scroll";

const links = [
  { path: "home", name: "خانه" },
  { path: "tours", name: "مکان ها" },
  { path: "discography", name: "فهرست ها" },
  { path: "contact", name: "ارتباط با ما" },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav>
      {links.map((link,inx) => (
        <Link key={inx} to={link.path}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;
