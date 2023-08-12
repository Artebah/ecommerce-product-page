import React, { FC } from "react";
//mui
import { Box, IconButton, Modal, useTheme } from "@mui/material";
//hooks
//images
import { ReactComponent as CloseIcon } from "../../assets/images/icon-close.svg";
//components
import { ProductImageViewer } from "../ProductImageViewer";
//types

interface ProductPopupProps {
  open: boolean;
  onClose: () => void;
  productImages: string[];
  previewImages: string[];
}

const ProductPopup: FC<ProductPopupProps> = ({
  open,
  onClose,
  productImages,
  previewImages,
}) => {
  const theme = useTheme();

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          transform: "translate(-50%, 0%)",
          p: theme.spacing(12, 6),
          height: 1,
          overflowY: "auto",
          overflowX: "hidden",
          [theme.breakpoints.down("md")]: {},
        }}>
        <IconButton
          onClick={onClose}
          sx={{
            p: theme.spacing(3),
            position: "fixed",
            right: 30,
            top: 15,
            zIndex: 1000,
            "&:hover path": {
              fill: theme.palette.primary.main,
            },
          }}>
          <Box
            sx={{
              transform: "scale(1.8)",
              path: { transition: "all 0.3s ease 0s", fill: "#fff" },
            }}
            component={CloseIcon}
          />
        </IconButton>

        <ProductImageViewer
          previewImages={previewImages}
          productImages={productImages}
          isPopup
        />
      </Box>
    </Modal>
  );
};

export { ProductPopup };
