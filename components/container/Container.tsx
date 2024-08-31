import { type ReactNode } from "react";
import clsx from "clsx";
import type { ComponentProps } from "components/types";
import styles from "./_Container.module.scss";

export interface Props extends ComponentProps {
  children: ReactNode;
}

const Container = ({ id, className, children }: Props) => {
  return (
    <section id={id} className={clsx(styles.container, className)}>
      {children}
    </section>
  );
};

export default Container;
