import styles from "./../page.module.scss";

interface IHeaderContenProps {
  title: string;
  subTitle: string;
  children: string;
}

const HeaderContent = ({ title, subTitle, children }: IHeaderContenProps) => {
  return (
    <div className={styles.header_content}>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <p>{children}</p>
      <div>
        <button>Leia mais</button>
      </div>
    </div>
  );
};

export default HeaderContent;
