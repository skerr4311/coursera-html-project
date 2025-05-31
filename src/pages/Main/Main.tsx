import type { FC } from "react";
import { Page } from "./styles";
import { Bar } from "../../components/AppBar/AppBar";

export const Main: FC = () => {
  return (
    <Page>
      <Bar />
      <span>getting ready</span>
      <span>this is new</span>
    </Page>
  );
};
