import React from "react";
//mui
import { Box, Drawer, IconButton, Link, List, ListItem } from "@mui/material";
//images
import BurgerIcon from "../../assets/images/icon-menu.svg";
import CloseBurgerIcon from "../../assets/images/icon-close.svg";

interface BurgerMenuProps {
  headerList: string[];
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ headerList }) => {
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);

  return (
    <>
      <IconButton onClick={() => setIsBurgerOpen(true)} sx={{ mr: 1 }} size="medium">
        <Box
          component="img"
          sx={{
            width: { md: 23, xs: 18 },
          }}
          src={BurgerIcon}
          alt="burger menu"
        />
      </IconButton>
      <Drawer onClose={() => setIsBurgerOpen(false)} open={isBurgerOpen}>
        <IconButton
          onClick={() => setIsBurgerOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
          }}>
          <Box
            component="img"
            sx={{ width: 18 }}
            src={CloseBurgerIcon}
            alt="close burger menu"
          />
        </IconButton>
        <List sx={{ width: 200, mt: 6 }}>
          {headerList.map((name, i) => (
            <ListItem key={i}>
              <Link
                sx={{
                  textDecoration: "none",
                  color: "#000",
                  fontWeight: 700,
                }}
                href="./#">
                {name}
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export { BurgerMenu };
