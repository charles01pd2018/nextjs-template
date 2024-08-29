import { type ReactNode } from "react";
import styles from "./Container.module.scss";

export interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return <section className={styles.containerWrapper}>{children}</section>;
};

export default Container;
