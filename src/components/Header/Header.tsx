import React, { FC } from "react";
//mui
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Link,
  Toolbar,
  styled,
  useTheme,
} from "@mui/material";
//images
import Logo from "../../assets/images/logo.svg";
import CartIcon from "../../assets/images/icon-cart.svg";
import CurrentUserIcon from "../../assets/images/image-avatar.png";

//hooks
import { useAppSelector, useIsMobile } from "../../hooks";
//components
import { CartModal } from "../CartModal";
import { BurgerMenu } from "./BurgerMenu";

const headerList = ["Collections", "Men", "Women", "About", "Contact"];

const ListLi = styled("li")(({ theme }) => ({
  height: "100%",
  overflow: "hidden",
  position: "relative",
  transition: "all 0.3s ease 0s",

  "&:hover": {
    "&::before": {
      bottom: 0,
    },
  },
  "&::before": {
    content: '""',
    width: "100%",
    height: 3,
    background: theme.palette.primary.main,
    position: "absolute",
    bottom: -3,
    left: 0,
    transition: "all 0.3s ease 0s",
  },
}));
const ListLink = styled("a")(({ theme }) => ({
  height: "100%",
  color: theme.palette.text.primary,
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease 0s",
  "&:hover": {
    color: "#000",
  },
}));

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const [isCartModalOpen, setIsCartModalOpen] = React.useState(false);

  const cartItems = useAppSelector((state) => state.cart.cartItems);

  const getNumberOfCartItems = () => {
    return cartItems.reduce((prev, item) => prev + item.count, 0);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ boxShadow: 0, borderBottom: "1px solid ", borderColor: "action.disabled" }}>
      <Toolbar
        sx={{
          height: { md: 100, xs: 60 },
        }}
        disableGutters>
        {isMobile && <BurgerMenu headerList={headerList} />}
        {/* logo */}
        <Box
          sx={{
            [theme.breakpoints.down(768)]: {
              flexGrow: 1,
            },
          }}>
          <Link href="./#">
            <Box component="img" sx={{ width: 120 }} src={Logo} alt="logo" />
          </Link>
        </Box>
        {!isMobile && (
          <Box
            component="ul"
            sx={{
              display: "flex",
              gap: 3.75,
              flexGrow: 1,
              listStyleType: "none",
              height: 1,
              [theme.breakpoints.down("md")]: {
                gap: 2,
                pl: 3,
              },
            }}>
            {headerList.map((name, i) => (
              <ListLi key={i}>
                <ListLink href="./#">{name}</ListLink>
              </ListLi>
            ))}
          </Box>
        )}

        <Box
          display="flex"
          sx={{ display: "flex", alignItems: "center", gap: { sm: 3, xs: 0.5 } }}>
          <Box sx={{ position: { xs: "static", sm: "relative" } }}>
            <IconButton onClick={() => setIsCartModalOpen(!isCartModalOpen)} size="large">
              <Badge
                sx={{ color: "#fff" }}
                badgeContent={getNumberOfCartItems()}
                color="primary"
                invisible={false}>
                <img src={CartIcon} alt="cart" />
              </Badge>
            </IconButton>
            <CartModal open={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} />
          </Box>
          <IconButton>
            <Box
              component="img"
              sx={{
                width: { md: 50, xs: 40 },
                borderRadius: "50%",
                "&:hover": {
                  border: `2px solid ${theme.palette.primary.main}`,
                },
              }}
              src={CurrentUserIcon}
              alt="current user"
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
