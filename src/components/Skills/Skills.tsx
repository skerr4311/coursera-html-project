import type { FC } from "react";
import { PaperContents, Wrapper } from "./style";
import { Grid, Paper, Typography } from "@mui/material";

import html5Icon from "../../assets/html5.png";
import jsIcon from "../../assets/js.png";
import reactIcon from "../../assets/react.png";
import dockerIcon from "../../assets/docker.png";
import nodeIcon from "../../assets/node.png";
import awsIcon from "../../assets/aws.png";
import blazorIcon from "../../assets/blazor.png";
import dotnetIcon from "../../assets/dotnet.png";

type Icons =
  | "html5"
  | "js"
  | "react"
  | "docker"
  | "node"
  | "aws"
  | "blazor"
  | "dotnet";

const iconMap: Record<Icons, string> = {
  html5: html5Icon,
  js: jsIcon,
  react: reactIcon,
  docker: dockerIcon,
  node: nodeIcon,
  aws: awsIcon,
  blazor: blazorIcon,
  dotnet: dotnetIcon,
};

const experienceMap: Record<Icons, string> = {
  html5: "5.5",
  js: "5.5",
  react: "3.5",
  docker: "3.5",
  node: "3.5",
  aws: "5.2",
  blazor: "2.5",
  dotnet: "2.8",
};

interface SkillCardProps {
  icon: string;
  name: string;
  experience: string;
}

const skills: SkillCardProps[] = Object.entries(iconMap).map(
  ([key, value]) => ({
    icon: value,
    name: key,
    experience: `${experienceMap[key as Icons]} years experience`,
  })
);

const SkillCard: FC<SkillCardProps> = ({ icon, name, experience }) => (
  <Paper elevation={4}>
    <PaperContents>
      <img src={icon} alt={name} width="24px" />
      <Typography variant="body2">{name}</Typography>
      <Typography variant="body2">{experience}</Typography>
    </PaperContents>
  </Paper>
);

export const Skills: FC = () => {
  return (
    <Wrapper>
      <Typography
        variant="h5"
        sx={{ color: "rgb(124 58 237)", fontWeight: 800 }}
      >
        Skills
      </Typography>
      <Grid container spacing={2}>
        {skills.map((skill) => (
          <SkillCard {...skill} />
        ))}
      </Grid>
    </Wrapper>
  );
};
