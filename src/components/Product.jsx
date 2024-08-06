import { Typography } from "neetoui";

import Carousel from "./Carousel";
import { IMAGE_URLS } from "./constants";

const Product = () => (
  <div className="px-6 pb-6">
    <div className="mt-6 flex gap-4">
      <div className="w-2/5">
        {/* <img
          alt="Product"
          className="h-64 w-10/12"
          src="https://i.dummyjson.com/data/products/9/thumbnail.jpg"
        /> */}
        <Carousel imageUrls={IMAGE_URLS} title="Infinix Inbook" />
      </div>
      <div className="w-3/5 space-y-4">
        <Typography>
          Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey - 1 Year Warranty.
        </Typography>
        <Typography>MRP: $395.97</Typography>
        <Typography className="font-semibold">Offer price: $374.43</Typography>
        <Typography className="font-semibold text-green-600">6% off</Typography>
      </div>
    </div>
  </div>
);
export default Product;
