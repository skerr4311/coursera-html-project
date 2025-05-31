import { styled } from "@mui/material";

export const NameContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const IconTextWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const SpaceBetween = styled("div")({
  padding: "22px 0px 8px 0px",
  display: "flex",
  width: "100%",
  justifyContent: "space-between",
});

export const LinkWrapper = styled("div")({
  display: "flex",
  gap: "24px",
  marginTop: "4px",
});
