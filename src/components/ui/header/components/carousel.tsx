"use client";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "./../page.module.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Promobanner from "./promo-banner";
import HeaderContent from "./header-content";

interface IslidesComponent {
  (): React.ReactNode;
}

//type Slides = IslidesComponent[];

const slides: IslidesComponent[] = [
  () => (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <Promobanner src="/promobanner1.png" alt="Promo Banner 1" />
        <HeaderContent title="Novos MODS" subTitle="Vapea pero Vapea sano">
          Si buscan una mejor alternativa para dejar el cigarrillo, Monster Vape
          es tu mejor alternativa.
        </HeaderContent>
      </div>
    </div>
  ),
  () => (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <Promobanner
          src="/shirish-suwal-VGJajcVoXBU-unsplash.jpg"
          alt="Promo Banner 2"
        />
        <HeaderContent title="Novos MODS" subTitle="Vapea pero Vapea sano">
          Si buscan una mejor alternativa para dejar el cigarrillo, Monster Vape
          es tu mejor alternativa.
        </HeaderContent>
      </div>
    </div>
  ),
  () => (
    <div className={styles.slideshow}>
      <div className={styles.slide}>
        <Promobanner src="/pxfuel.jpg" alt="Promo Banner 3" />
        <HeaderContent title="Novos MODS" subTitle="Vapea pero Vapea sano">
          Si buscan una mejor alternativa para dejar el cigarrillo, Monster Vape
          es tu mejor alternativa.
        </HeaderContent>
      </div>
    </div>
  )
];

const Carousel: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [promobanner, setPromobanner] = useState(slides[0]);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setPromobanner(slides[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);
  return (
    <section key={index} className={styles.main_header}>
      {promobanner}
    </section>
  );
};

export default Carousel;
