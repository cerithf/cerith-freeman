import { useState } from "react";
import "../styles/components/image_banner.scss";

interface Props {
  imageName: string;
  path: string;
}

const ImageBanner = ({ imageName, path }: Props) => {
  return (
    <>
      <style></style>
      <div className="ImageBanner">
        {Array(5)
          .fill("")
          .map((item) => (
            <img className={`${imageName} white-filter`} src={path} />
          ))}
      </div>
    </>
  );
};

export default ImageBanner;
