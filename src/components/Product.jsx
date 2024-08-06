// import { Typography } from "neetoui";
import { useState, useEffect } from "react";

import axios from "axios";
import { Typography, Spinner } from "neetoui";
import { append, isNotNil } from "ramda";

import Carousel from "./Carousel";
// import { IMAGE_URLS } from "./constants";

// const Product = () => (
//   <div className="px-6 pb-6">
//     <div>
//       <Typography className="py-2 text-4xl font-semibold" style="h1">
//         Infinix INBOOK
//       </Typography>
//       <hr className="neeto-ui-border-black border-2" />
//     </div>
//     <div className="mt-6 flex gap-4">
//       <div className="w-2/5">
//         <Carousel imageUrls={IMAGE_URLS} title="Infinix Inbook" />

const Product = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "https://smile-cart-backend-staging.neetodeployapp.com/products/infinix-inbook-2"
      );
      setProduct(response.data);
    } catch (error) {
      console.log("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const {
    name,
    description,
    mrp,
    offer_price: offerPrice,
    image_urls: imageUrls,
    image_url: imageUrl,
  } = product;

  const totalDiscounts = mrp - offerPrice;
  const discountPercentage = ((totalDiscounts / mrp) * 100).toFixed(1);

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Spinner />
      </div>
      // <div className="w-3/5 space-y-4">
      //   <Typography>
      //     Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year Warranty.
    );
  }

  return (
    <div className="px-6 pb-6">
      <div>
        <Typography className="py-2 text-4xl font-semibold" style="h1">
          {name}
        </Typography>
        {/* <Typography>MRP: $395.97</Typography>
        <Typography className="font-semibold">Offer price: $374.43</Typography>
        <Typography className="font-semibold text-green-600">6% off</Typography> */}
        <hr className="neeto-ui-border-black border-2" />
      </div>
      <div className="mt-16 flex gap-4">
        <div className="w-2/5">
          <div className="flex justify-center gap-16">
            {isNotNil(imageUrls) ? (
              <Carousel imageUrls={append(imageUrl, imageUrls)} title={name} />
            ) : (
              <img alt={name} className="w-48" src={imageUrl} />
            )}
          </div>
        </div>
        <div className="w-3/5 space-y-4">
          <Typography>{description}</Typography>
          <Typography>MRP: {mrp}</Typography>
          <Typography className="font-semibold">
            Offer price: {offerPrice}
          </Typography>
          <Typography className="font-semibold text-green-600">
            {discountPercentage}% off
          </Typography>
        </div>
      </div>
    </div>
  );
};
export default Product;
