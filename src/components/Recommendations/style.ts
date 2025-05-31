import { Button, Paper, styled, TextField } from "@mui/material";

export const Wrapper = styled("div")({
  padding: "22px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const Contents = styled("div")({
  display: "flex",
  flexDirection: "column",
  paddingLeft: "40px",
});

export const PaperContent = styled("div")({
  padding: "16px",
});

export const InputWrapper = styled("div")({
  padding: "40px 0px 0px 0",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const InputContainer = styled("div")({
  width: "60vw",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const Text = styled(TextField)({
  input: {
    padding: 0,
  },
  ".MuiInputBase-root": {
    padding: "6px",
  },
});

export const ModalContents = styled(Paper)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  padding: "16px",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const ButtonWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  gap: "12px",
});

export const ButtonOutlined = styled(Button)({
  width: "110px",
  color: "rgb(124 58 237)",
  borderColor: "rgb(124 58 237)",
});

export const ButtonContained = styled(Button)({
  width: "110px",
  backgroundColor: "rgb(124 58 237)",
  borderColor: "rgb(124 58 237)",
});
