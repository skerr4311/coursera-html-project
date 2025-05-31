import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import type { FC } from "react";
import {
  IconTextWrapper,
  Link,
  LinkWrapper,
  NameContainer,
  SpaceBetween,
} from "./style";

const ContactInfo: FC = () => (
  <NameContainer>
    <Typography typography="h6">Steven Dangerfield</Typography>
    <IconTextWrapper>
      <EmailOutlinedIcon fontSize="small" />
      <Typography typography="caption">sdk@gmail.com</Typography>
    </IconTextWrapper>
    <IconTextWrapper>
      <PhoneIcon fontSize="small" />
      <Typography typography="caption">+64 022 1611 0125</Typography>
    </IconTextWrapper>
  </NameContainer>
);

export const Bar: FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(124 58 237)" }}>
        <Toolbar variant="dense">
          <SpaceBetween>
            <ContactInfo />
            <LinkWrapper>
              <Link>About me</Link>
              <Link>Skills</Link>
              <Link>Projects</Link>
              <Link>Recommendations</Link>
            </LinkWrapper>
          </SpaceBetween>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
