import clsx from "clsx";
import { Text } from "elements";
import styles from "./Headings.module.scss";

export interface Content {
  text: string;
}

export interface Props {
  id: string;
  className?: string;
  content: Content;
}

const Header = ({ id, className = "", content }: Props) => {
  const { text } = content;

  const headerClasses = clsx("headers-wrapper", className);

  return (
    <section id={id} className={styles.headersWrapper}>
      {[...Array(6)].map((_, index) => {
        /* CONTENT */
        const headerType = index + 1;
        const headerText = `${headerType}. ${text}`;

        return (
          <Text
            key={index}
            className={`header-${headerType}`}
            content={{ text: headerText }}
            Component={`h${headerType}`}
          />
        );
      })}
    </section>
  );
};

export default Header;
