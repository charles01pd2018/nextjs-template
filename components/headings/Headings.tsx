import clsx from "clsx";
import { Text } from "elements";
import type { ComponentProps } from "components/types";
import styles from "./_Headings.module.scss";

export interface Content {
  text: string;
}

export interface Props extends ComponentProps {
  content: Content;
}

const Header = ({ id, className, content }: Props) => {
  const { text } = content;

  return (
    <section id={id} className={clsx(styles.headings, className)}>
      {[...Array(6)].map((_, index) => {
        const headerType = index + 1;
        const headerText = `${headerType}. ${text}`;

        return (
          <Text
            key={index}
            content={{ text: headerText }}
            Component={`h${headerType}`}
          />
        );
      })}
    </section>
  );
};

export default Header;
