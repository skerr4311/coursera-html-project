import type { FC } from "react";
import { Contents, PaperContent, Wrapper } from "./style";
import { Grid, Paper, Typography } from "@mui/material";

const recommendations = [
  "Steven consistently demonstrates a rare ability to move seamlessly between frontend and backend systems. His work on optimizing API performance and building scalable infrastructure has had a direct impact on the stability and speed of our platforms. He’s the kind of engineer who not only solves problems but improves the system around them.",
  "Steven is a standout full stack developer not only for his technical skills but also for his ability to collaborate cross-functionally. He communicates complex ideas clearly and brings empathy and thoughtfulness to technical discussions, making him a valuable bridge between engineering, product, and design teams.",
  "Dependable, sharp, and always a step ahead—Steven is the kind of engineer you want on every project. He takes ownership, writes clean and maintainable code, and consistently delivers on time. His initiative and leadership mindset make him an asset to any high-performing team.",
];

const Recommendation: FC<{ comment: string }> = ({ comment }) => (
  <Paper elevation={0} variant="outlined">
    <PaperContent>
      <Typography variant="body2">
        <i>{`"${comment}"`}</i>
      </Typography>
    </PaperContent>
  </Paper>
);

export const Recommendations: FC = () => (
  <Wrapper>
    <Typography variant="h5" sx={{ color: "rgb(124 58 237)", fontWeight: 800 }}>
      Recommendations
    </Typography>
    <Contents>
      <Grid container spacing={2}>
        {recommendations.map((comment) => (
          <Grid size={3.8}>
            <Recommendation comment={comment} />
          </Grid>
        ))}
      </Grid>
    </Contents>
  </Wrapper>
);
