import React, { FC } from "react";
//mui
import { Box, Button, Typography, useTheme } from "@mui/material";
//images
import ProductImage1 from "../../assets/images/image-product-1.jpg";
import ProductImage2 from "../../assets/images/image-product-2.jpg";
import ProductImage3 from "../../assets/images/image-product-3.jpg";
import ProductImage4 from "../../assets/images/image-product-4.jpg";
import PreviewProductImage1 from "../../assets/images/image-product-1-thumbnail.jpg";
import PreviewProductImage2 from "../../assets/images/image-product-2-thumbnail.jpg";
import PreviewProductImage3 from "../../assets/images/image-product-3-thumbnail.jpg";
import PreviewProductImage4 from "../../assets/images/image-product-4-thumbnail.jpg";
import { ReactComponent as CartIcon } from "../../assets/images/icon-cart.svg";
//hooks
import { useAppDispatch, useIsMobile } from "../../hooks";
//components
import { OrangeButton } from "../OrangeButton";
import { ProductSlider } from "../ProductSlider";
import { ProductImageViewer } from "../ProductImageViewer";
//types
import { CartItemType, ProductInfoType } from "../../types";
//redux
import { addItemToCart } from "../../redux/slices/cartSlice";

const previewProductImages = [
  PreviewProductImage1,
  PreviewProductImage2,
  PreviewProductImage3,
  PreviewProductImage4,
];
const productImages = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];
const productInfo: ProductInfoType = {
  id: 1,
  productImages: productImages,
  previewImages: previewProductImages,
  title: "sneaker company",
  name: "Fall Limited Edition Sneakers",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250,
  discount: 50,
};

interface MainProps {}

const Main: FC<MainProps> = () => {
  const theme = useTheme();
  const isMobile = useIsMobile();
  const [numberOfProducts, setNumberOfProducts] = React.useState(0);
  const dispatch = useAppDispatch();

  const toggleNumberOfProducts = (type: "+" | "-") => {
    let newValue: number;
    if (type === "+") {
      newValue = numberOfProducts + 1;
    } else {
      newValue = numberOfProducts - 1;
    }
    setNumberOfProducts(Math.max(newValue, 0));
  };
  const roundUpPrice = (price: number) => {
    if (Math.floor(price) === price) {
      return price + ".00";
    } else {
      return price;
    }
  };
  const calcPriceWithDiscount = (price: number, discount: number) => {
    const newPrice = price * (discount / 100);

    return roundUpPrice(newPrice);
  };
  const addProductToCartHandler = (productInfo: CartItemType) => {
    if (numberOfProducts) {
      dispatch(addItemToCart(productInfo));
    } else {
      alert("Please, add count of product");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 14,
        p: theme.spacing(12, 7),
        [theme.breakpoints.down("lg")]: {
          p: theme.spacing(6, 0),
          gap: 6,
        },
        [theme.breakpoints.down(768)]: {
          flexDirection: "column",
          gap: 2,
        },
      }}>
      {/* left */}
      {!isMobile && (
        <ProductImageViewer
          previewImages={previewProductImages}
          productImages={productImages}
        />
      )}
      {/* slider */}
      {isMobile && <ProductSlider productImages={productInfo.productImages} />}
      {/* right */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: 450,
          [theme.breakpoints.down(768)]: {
            maxWidth: 1,
          },
        }}>
        <Typography
          sx={{
            color: theme.palette.primary.main,
            letterSpacing: 1,
            textTransform: "uppercase",
            fontSize: 14,
            fontWeight: 700,
          }}>
          {productInfo.title}
        </Typography>
        <Typography
          variant="h3"
          sx={{
            mt: 2,
            fontWeight: 700,
            color: "#000",
            [theme.breakpoints.down("lg")]: {},
          }}>
          {productInfo.name}
        </Typography>
        <Typography sx={{ my: { md: 4, xs: 3 } }}>{productInfo.description}</Typography>
        <Box
          sx={{
            [theme.breakpoints.down("sm")]: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            },
          }}>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
              mb: 1,
              [theme.breakpoints.down("sm")]: {
                mb: 0,
              },
            }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: "#000" }}>
              ${calcPriceWithDiscount(productInfo.price, productInfo.discount)}
            </Typography>
            <Typography
              sx={{
                background: "#FCEEE3",
                p: theme.spacing(0.4, 1),
                borderRadius: 1,
                fontWeight: 700,
                color: theme.palette.primary.main,
              }}>
              {productInfo.discount}%
            </Typography>
          </Box>
          <Typography
            sx={{
              textDecoration: "line-through",
              fontWeight: 700,
              color: theme.palette.action.disabled,
            }}>
            ${roundUpPrice(productInfo.price)}
          </Typography>
        </Box>
        <Box
          sx={{
            mt: 4,
            display: "flex",
            gap: 2,
            [theme.breakpoints.down("md")]: {
              flexDirection: "column",
            },
            [theme.breakpoints.down("sm")]: {
              mt: 3,
            },
          }}>
          <Box
            sx={{
              display: "flex",
              background: "#F7F8FD",
              alignItems: "center",
              borderRadius: 2,
              button: { fontSize: 30, fontWeight: 700, p: theme.spacing(0, 3) },
              [theme.breakpoints.down("md")]: {
                width: "fit-content",
              },
              [theme.breakpoints.down("sm")]: {
                width: 1,
                button: {
                  flexBasis: "30%",
                },
              },
            }}>
            <Button onClick={() => toggleNumberOfProducts("-")}>-</Button>
            <Typography
              sx={{
                px: 2,
                fontWeight: 700,
                [theme.breakpoints.down("sm")]: {
                  flex: "1 1 auto",
                  textAlign: "center",
                },
              }}>
              {numberOfProducts}
            </Typography>
            <Button onClick={() => toggleNumberOfProducts("+")}>+</Button>
          </Box>
          <OrangeButton
            onClick={() =>
              addProductToCartHandler({
                img: productImages[0],
                name: productInfo.name,
                price: productInfo.price,
                count: numberOfProducts,
              } as CartItemType)
            }
            styles={{
              boxShadow: "0 15px 20px #FFE3CC",
              [theme.breakpoints.down("md")]: {
                flexBasis: "auto",
              },
            }}
            iconComponent={CartIcon}>
            Add to cart
          </OrangeButton>
        </Box>
      </Box>
    </Box>
  );
};

export { Main };
