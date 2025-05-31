import type { FC } from "react";
import { Page } from "./styles";
import { Bar } from "../../components/AppBar/AppBar";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Recommendations } from "../../components/Recommendations/Recommendations";

export const Main: FC = () => {
  return (
    <Page>
      <Bar />
      <AboutMe />
      <Skills />
      <Projects />
      <Recommendations />
    </Page>
  );
};
