import { type ReactNode } from "react";
import styles from "./_Container.module.scss";

export interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <section className={styles.container}>{children}</section>;
};

export default Container;
