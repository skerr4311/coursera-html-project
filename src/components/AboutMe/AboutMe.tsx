import type { FC } from "react";
import me from "../../assets/me.png";
import { AboutMeWrapper, TitleWrapper, Wrapper } from "./style";
import { Typography } from "@mui/material";
import WavingHandOutlinedIcon from "@mui/icons-material/WavingHandOutlined";

export const AboutMe: FC = () => {
  return (
    <Wrapper>
      <img src={me} alt="me" width="200px" />

      <AboutMeWrapper>
        <TitleWrapper>
          <Typography
            variant="h5"
            sx={{ color: "rgb(124 58 237)", fontWeight: 800 }}
          >
            Hi, I'm Steven!
          </Typography>
          <WavingHandOutlinedIcon />
        </TitleWrapper>
        <Typography variant="caption">
          As a seasoned professional with 13 years in the construction industry,
          I have transitioned my passion for building and designing into the
          realm of programming and digital creation. My career in tech began
          following my fascination with computers and technology, leading me to
          pursue and excel in this field after graduating six years ago.
        </Typography>
      </AboutMeWrapper>
    </Wrapper>
  );
};
