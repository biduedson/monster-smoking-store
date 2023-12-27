import Image, { ImageProps } from "next/image";
import styles from "./../page.module.scss";

const Promobanner = ({ alt, ...props }: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className={styles.promo_Banner}
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
};

export default Promobanner;
