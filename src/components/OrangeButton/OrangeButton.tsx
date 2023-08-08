import React, { FC } from "react";
//mui
import { Button, useTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

interface OrangeButtonProps {
  children: React.ReactNode;
}

const OrangeButton: FC<OrangeButtonProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <Button
      sx={{
        width: 1,
        height: 52,
        fontWeight: 700,
        fontSize: 16,
        borderRadius: 2,
        bgcolor: theme.palette.primary.main,
        color: "#fff",
        textTransform: "capitalize",
        "&:hover": {
          bgcolor: theme.palette.primary.light,
          boxShadow: `0px 5px 15px ${orange[100]}`,
        },
      }}>
      {children}
    </Button>
  );
};

export { OrangeButton };
