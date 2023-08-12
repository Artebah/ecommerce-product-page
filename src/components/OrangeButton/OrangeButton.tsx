import React, { FC } from "react";
//mui
import { Box, Button, useTheme } from "@mui/material";
import { orange } from "@mui/material/colors";

interface OrangeButtonProps {
  children: React.ReactNode;
  iconComponent?: FC;
  styles?: React.CSSProperties;
  onClick: () => void;
}

const OrangeButton: FC<OrangeButtonProps> = ({
  children,
  iconComponent,
  styles,
  onClick,
}) => {
  const theme = useTheme();

  return (
    <Button
      onClick={onClick}
      sx={[
        {
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
        },
        iconComponent !== undefined && {
          dispaly: "flex",
          gap: 1,
        },
        styles !== undefined && styles,
      ]}>
      {iconComponent && (
        <Box component={iconComponent} sx={{ "& > *": { fill: "#fff" } }} />
      )}
      {children}
    </Button>
  );
};

export { OrangeButton };
