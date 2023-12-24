import styles from "@/components/ui/navBar/page.module.scss";
import Link from "next/link";
const links = [
  {
    name: "home",
    path: "/"
  },
  {
    name: "sobre",
    path: "/sobre"
  },
  {
    name: "mods",
    path: "/mods"
  },
  {
    name: "liquidos",
    path: "/liquidos"
  },
  {
    name: "equipes",
    path: "/equipes"
  },
  {
    name: "contato",
    path: "/contato"
  }
];

const NavLinks = () => {
  return (
    <nav className={styles.nav_links}>
      <ul>
        {links.map(({ name, path }, index) => {
          return (
            <li key={index}>
              <Link href={path}>{name.toUpperCase()}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;
