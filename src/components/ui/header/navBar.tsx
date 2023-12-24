"use client";
import Logo from "./components/logo";
import NavLinks from "./components/nav";
import styles from "./page.module.scss";
import variablesScss from "@/app/variables.module.scss";
const NavBar = () => {
  return (
    <div className={styles.nav_bar}>
      <Logo src="/logo.png" alt="Logomarca Monster Smoke" />
      <NavLinks />
    </div>
  );
};

export default NavBar;
