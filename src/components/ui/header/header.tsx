"use client";
import Carousel from "./components/carousel";
import styles from "./page.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Carousel />
    </header>
  );
};

export default Header;
