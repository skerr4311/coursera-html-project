import type { FC } from "react";
import { Page } from "./styles";
import { Bar } from "../../components/AppBar/AppBar";
import { AboutMe } from "../../components/AboutMe/AboutMe";

export const Main: FC = () => {
  return (
    <Page>
      <Bar />
      <AboutMe />
    </Page>
  );
};
