import type { FC } from "react";
import { Contents, PaperContent, Wrapper } from "./style";
import { Grid, Paper, Typography } from "@mui/material";

type Recommendation = string;

const Recommendation: FC<{ comment: Recommendation }> = ({ comment }) => (
  <Paper elevation={0} variant="outlined">
    <PaperContent>
      <Typography variant="body2">
        <i>{`"${comment}"`}</i>
      </Typography>
    </PaperContent>
  </Paper>
);

export const Recommendations: FC<{ recommendations: Recommendation[] }> = ({
  recommendations,
}) => (
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
