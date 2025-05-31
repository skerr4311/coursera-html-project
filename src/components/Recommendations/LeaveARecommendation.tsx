import { useState, type FC } from "react";
import {
  ButtonContained,
  ButtonOutlined,
  ButtonWrapper,
  InputContainer,
  InputWrapper,
  ModalContents,
  Text,
} from "./style";
import { Button, Modal, Typography } from "@mui/material";

interface LeaveARecommendationProps {
  onNewRecommendation: (comment: string) => void;
}

export const LeaveARecommendation: FC<LeaveARecommendationProps> = ({
  onNewRecommendation,
}) => {
  const [recommendation, setRecommendation] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => setIsModalOpen((prev) => !prev);

  const handleCreateNewRecommendation = () => {
    handleToggleModal();
    onNewRecommendation(recommendation);
    setRecommendation("");
  };

  return (
    <InputWrapper>
      <InputContainer>
        <Typography>Leave a Recommendation</Typography>
        <Text variant="outlined" placeholder="Name (Optional)" />
        <Text
          multiline
          rows={6}
          variant="outlined"
          placeholder="Message"
          value={recommendation}
          onChange={(event) => setRecommendation(event.target.value)}
        />
        <div style={{ textAlign: "center", paddingTop: "20px" }}>
          <ButtonOutlined variant="outlined" onClick={handleToggleModal}>
            Outlined
          </ButtonOutlined>
        </div>
      </InputContainer>
      <Modal open={isModalOpen} onClose={handleToggleModal} disableAutoFocus>
        <ModalContents elevation={4} variant="outlined">
          <Typography align="center">
            Are you sure you would like to add this recommendation?
          </Typography>
          <ButtonWrapper>
            <ButtonContained
              variant="contained"
              onClick={handleCreateNewRecommendation}
            >
              Confirm
            </ButtonContained>
            <ButtonOutlined variant="outlined" onClick={handleToggleModal}>
              Cancel
            </ButtonOutlined>
          </ButtonWrapper>
        </ModalContents>
      </Modal>
    </InputWrapper>
  );
};
