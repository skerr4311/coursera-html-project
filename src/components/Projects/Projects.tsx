import type { FC } from "react";
import { Wrapper } from "./style";
import { Divider, Typography } from "@mui/material";

interface ProjectProps {
  title: string;
  point: string;
}

const projects: ProjectProps[] = [
  {
    title: "Parent Portal",
    point:
      "Spearheaded the development of the Parent Portal, addressing a key customer need and increasing student enrolments by 18% company-wide.",
  },
  {
    title: "Legacy Migration",
    point:
      "Migrated legacy Delphi backend to Node.js, modernizing the tuition platform and deploying to AWS with Docker for 99.9% uptime.",
  },
  {
    title: "Deloitte Onboarding",
    point:
      "Redeveloped Deloitte’s Onboarding Portal using Blazor and Azure, improving performance by 35%.",
  },
];

const Project: FC<ProjectProps> = ({ title, point }) => (
  <div>
    <Typography sx={{ fontWeight: 700 }}>{title}</Typography>
    <ul>
      <li>
        <Typography variant="caption">{point}</Typography>
      </li>
    </ul>
  </div>
);

export const Projects: FC = () => (
  <Wrapper>
    <Typography variant="h5" sx={{ color: "rgb(124 58 237)", fontWeight: 800 }}>
      Projects
    </Typography>
    {projects.map((project, index) => (
      <>
        <Project {...project} />
        {index !== projects.length - 1 && <Divider variant="middle" />}
      </>
    ))}
  </Wrapper>
);
