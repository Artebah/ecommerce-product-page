import React, { FC } from "react";
//mui
import { Box, IconButton } from "@mui/material";
//images
import { ReactComponent as SliderButtonPrevIcon } from "../../assets/images/icon-previous.svg";
import { ReactComponent as SliderButtonNextIcon } from "../../assets/images/icon-next.svg";

interface SliderButtonProps {
  isLastOrFirstSlide: boolean;
  positionX: "left" | "right";
  onClick?: () => void;
  styles?: React.CSSProperties;
}

const SliderButton: FC<SliderButtonProps> = ({
  isLastOrFirstSlide,
  onClick,
  positionX,
  styles,
}) => {
  return (
    <IconButton
      onClick={onClick}
      sx={[
        {
          width: 40,
          height: 40,
          bgcolor: "#fff",
          position: "absolute",
          zIndex: 10,
          top: "50%",
          transform: "translateY(-50%)",
          "&:hover": {
            background: "#fff",
          },
          "&:hover svg path": {
            stroke: (theme) => theme.palette.primary.main,
          },
        },
        positionX === "left" && {
          left: 20,
        },
        positionX === "right" && {
          right: 20,
        },
        isLastOrFirstSlide && {
          opacity: 0.5,
          pointerEvents: "none",
          "&:hover svg path": {
            stroke: "#1D2026",
          },
        },
        { ...styles },
      ]}>
      <Box
        component={positionX === "left" ? SliderButtonPrevIcon : SliderButtonNextIcon}
        sx={{
          "& path": {
            transition: "all 0.3s ease 0s",
          },
        }}
      />
    </IconButton>
  );
};

export { SliderButton };
