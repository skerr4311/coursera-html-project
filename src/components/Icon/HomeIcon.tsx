import { SvgIcon } from "@mui/material";
import type { FC } from "react";

export const HomeIcon: FC = () => {
  return (
    <SvgIcon
      viewBox="0 0 24 24"
      sx={{ width: "63px", height: "63px", color: "#fff" }}
    >
      <path
        d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgb(124 58 237)"
      />
    </SvgIcon>
  );
};
