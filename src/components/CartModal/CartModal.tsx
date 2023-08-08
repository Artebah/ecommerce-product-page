import React, { FC } from "react";
//mui
import { Box, Paper, Typography, useTheme } from "@mui/material";
//component
import { CartContent } from "./CartContent";

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const CartModal: FC<CartModalProps> = ({ onClose, open }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const theme = useTheme();

  React.useEffect(() => {
    document.addEventListener("click", (e) => {
      if (open) {
        const modalParent = modalRef.current?.parentElement;

        if (!modalParent) {
          return false;
        }

        if (!modalParent.contains(e.target as Node)) {
          onClose();
        }
      }
    });
  });

  return (
    <Paper
      ref={modalRef}
      elevation={16}
      sx={[
        {
          position: "absolute",
          top: "140%",
          right: "50%",
          borderRadius: 2,
          transform: "translateX(50%)",
          width: 380,
          transition: "all 0.3s ease 0s",
          opacity: 0,
          pointerEvents: "none",
          [theme.breakpoints.down(1700)]: {
            transform: "translateX(0)",
            right: 0,
          },
          [theme.breakpoints.down("sm")]: {
            width: "100%",
            top: "120%",
          },
        },
        open && {
          opacity: 1,
          pointerEvents: "all",
        },
      ]}>
      {/* title */}
      <Box
        sx={{
          padding: theme.spacing(2),
          borderBottom: "1px solid #E7E6EB",
        }}>
        <Typography variant="body1" fontWeight={700} color="#000">
          Cart
        </Typography>
      </Box>
      {/* content */}
      <CartContent />
    </Paper>
  );
};

export { CartModal };
