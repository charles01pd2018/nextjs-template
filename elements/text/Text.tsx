import { type JSXElementConstructor } from "react";
import type { ElementProps } from "elements/types";

export interface Content {
  text: string;
}

export interface Props extends ElementProps {
  Component: string | JSXElementConstructor<any>;
  content: Content;
}

const Text = ({ className, Component, content }: Props) => {
  const { text } = content;

  return <Component className={className}>{text}</Component>;
};

export default Text;
