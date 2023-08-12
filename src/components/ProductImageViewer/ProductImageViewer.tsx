import React, { FC } from "react";
//mui
import { Box, Button, useTheme } from "@mui/material";
//images
//hooks
//components
import { ProductPopup } from "../ProductPopup";
import { SliderButton } from "../SliderButton";
//types

interface ProductImageViewerProps {
  isPopup?: boolean;
  productImages: string[];
  previewImages: string[];
}

const ProductImageViewer: FC<ProductImageViewerProps> = ({
  isPopup,
  productImages,
  previewImages,
}) => {
  const theme = useTheme();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isFirstSlide, setIsFirstSlide] = React.useState(true);
  const [isLastSlide, setIsLastSlide] = React.useState(false);
  const [isOpenProductPopup, setIsOpenProductPopup] = React.useState(false);

  React.useEffect(() => {
    setIsFirstSlide(currentImage === 0);
    setIsLastSlide(currentImage === productImages.length - 1);
  }, [currentImage, productImages.length]);

  const goToNextSlide = () => {
    setCurrentImage(currentImage + 1);
  };
  const goToPrevSlide = () => {
    setCurrentImage(currentImage - 1);
  };

  return (
    <Box
      sx={[
        {
          width: 600,
          img: {
            borderRadius: 3,
          },
        },
        !isPopup && {
          width: 500,
          [theme.breakpoints.down("lg")]: {
            width: 400,
          },
          [theme.breakpoints.down("md")]: {
            width: 340,
          },
        },
      ]}>
      <Box
        sx={{
          mb: 3,
          position: "relative",
          img: {
            width: 1,
          },
        }}>
        {!isPopup ? (
          <>
            <Button
              onClick={() => setIsOpenProductPopup(true)}
              sx={{ p: 0, cursor: "zoom-in" }}>
              <img src={productImages[currentImage]} alt="product" />
            </Button>
            <ProductPopup
              previewImages={previewImages}
              productImages={productImages}
              open={isOpenProductPopup}
              onClose={() => setIsOpenProductPopup(false)}
            />
          </>
        ) : (
          <>
            <SliderButton
              styles={{
                left: 0,
                transform: "translate(-50%, -50%)",
                width: 60,
                height: 60,
              }}
              positionX="left"
              isLastOrFirstSlide={isFirstSlide}
              onClick={() => goToPrevSlide()}
            />
            <SliderButton
              styles={{
                right: 0,
                transform: "translate(50%, -50%)",
                width: 60,
                height: 60,
              }}
              positionX="right"
              isLastOrFirstSlide={isLastSlide}
              onClick={() => goToNextSlide()}
            />

            <img src={productImages[currentImage]} alt="product" />
          </>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 3,
        }}>
        {previewImages.map((src, i) => (
          <Button
            onClick={() => setCurrentImage(i)}
            key={i}
            sx={[
              {
                transitionProperty: "opacity, background",
                transitionDuration: "0.3s",
                transitionTimingFunction: "ease",

                background: "#fff",
                p: 0,
                overflow: "hidden",
                borderRadius: 3,

                "&>img": {
                  width: "100%",
                  borderRadius: 0,
                },
                "&:hover": {
                  opacity: 0.5,
                  background: "#fff",
                },
              },
              currentImage === i && {
                border: `2px solid ${theme.palette.primary.main}`,
                "& > img": {
                  opacity: 0.5 + " !important",
                },
              },
              !!isPopup && {
                flexBasis: 100,
              },
            ]}>
            <img src={src} alt="preview" />
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export { ProductImageViewer };
