import React, { FC } from "react";
//mui
import { Box } from "@mui/material";
//images
import { SliderButton } from "../SliderButton";

interface ProductSliderProps {
  productImages: string[];
}

const ProductSlider: FC<ProductSliderProps> = ({ productImages }) => {
  const sliderRowRef = React.useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isFirstSlide, setIsFirstSlide] = React.useState(true);
  const [isLastSlide, setIsLastSlide] = React.useState(false);

  const moveSlider = (type: "prev" | "next") => {
    const sliderRow = sliderRowRef.current;
    if (sliderRow) {
      const slide = document.querySelector(".product-slide")!;
      const offset = slide.clientWidth + 32;
      const rowRight = parseFloat(sliderRow.style.right);

      if (type === "prev") {
        sliderRow.style.right = rowRight - offset + "px";

        if (!isFirstSlide) {
          setCurrentSlide(currentSlide - 1);
        }
      }

      if (type === "next") {
        sliderRow.style.right = rowRight ? rowRight + offset + "px" : offset + "px";

        if (!isLastSlide) {
          setCurrentSlide(currentSlide + 1);
        }
      }
    }
  };

  React.useEffect(() => {
    function setSlideType() {
      const screenWidth = document.documentElement.clientWidth;

      if (screenWidth > 600) {
        setIsFirstSlide(currentSlide === 0);
        setIsLastSlide(currentSlide === productImages.length - 2);
      } else {
        setIsFirstSlide(currentSlide === 0);
        setIsLastSlide(currentSlide === productImages.length - 1);
      }
    }
    const resetSlider = () => {
      const sliderRow = sliderRowRef.current;
      if (sliderRow) {
        sliderRow.style.right = "0px";
        setCurrentSlide(0);
      }
    };

    window.onresize = resetSlider;
    setSlideType();
  }, [currentSlide, productImages.length]);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
      }}>
      {/* navigations */}
      <SliderButton
        positionX="left"
        isLastOrFirstSlide={isFirstSlide}
        onClick={() => moveSlider("prev")}
      />
      <SliderButton
        positionX="right"
        isLastOrFirstSlide={isLastSlide}
        onClick={() => moveSlider("next")}
      />

      {/* slider */}
      <Box
        ref={sliderRowRef}
        sx={{
          display: "flex",
          gap: 4,
          transition: "all 0.3s ease 0s",
          position: "relative",
          right: 0,
        }}>
        {productImages.map((src) => (
          <Box
            className="product-slide"
            sx={{ flex: { sm: "1 0 50%", xs: "1 0 100%" } }}
            key={src}>
            <Box component="img" sx={{ width: 1 }} src={src} alt="product" />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { ProductSlider };
