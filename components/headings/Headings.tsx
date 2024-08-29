import { Text } from "elements";
import styles from "./Headings.module.scss";

export interface Content {
  text: string;
}

export interface Props {
  content: Content;
}

const Header = ({ content }: Props) => {
  const { text } = content;
  var word = "";

  return (
    <section className={styles.headers}>
      {[...Array(6)].map((_, index) => {
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
