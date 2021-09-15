import styled from "styled-components";
import Link from "next/link";

export const AnchorLink = (props) => {
  return (
    <Link href={props.href} passHref={props.passHref}>
      <a>{props.children}</a>
    </Link>
  );
};
