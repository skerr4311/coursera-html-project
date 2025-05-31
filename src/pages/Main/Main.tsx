import { useState, type FC } from "react";
import { Page } from "./styles";
import { Bar } from "../../components/AppBar/AppBar";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Skills } from "../../components/Skills/Skills";
import { Projects } from "../../components/Projects/Projects";
import { Recommendations } from "../../components/Recommendations/Recommendations";

const mockRecommendations = [
  "Steven consistently demonstrates a rare ability to move seamlessly between frontend and backend systems. His work on optimizing API performance and building scalable infrastructure has had a direct impact on the stability and speed of our platforms. He’s the kind of engineer who not only solves problems but improves the system around them.",
  "Steven is a standout full stack developer not only for his technical skills but also for his ability to collaborate cross-functionally. He communicates complex ideas clearly and brings empathy and thoughtfulness to technical discussions, making him a valuable bridge between engineering, product, and design teams.",
  "Dependable, sharp, and always a step ahead—Steven is the kind of engineer you want on every project. He takes ownership, writes clean and maintainable code, and consistently delivers on time. His initiative and leadership mindset make him an asset to any high-performing team.",
];

export const Main: FC = () => {
  const [recommendations, setRecommendations] = useState(mockRecommendations);
  return (
    <Page>
      <Bar />
      <AboutMe />
      <Skills />
      <Projects />
      <Recommendations recommendations={recommendations} />
    </Page>
  );
};
