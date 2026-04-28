import { useState } from "react";

interface Props {
  imageName: string;
  path: string;
}

const ImageBanner = ({ imageName, path }: Props) => {
  return (
    <>
      <style>{`.ImageBanner {
    display: flex;
    padding: 0 48px;
    position: absolute;
    top: 60px;
    left: 0px;
    height: 200px;
    width: 100%;
    z-index: 0;

    img {
        opacity: 40%;
        position: relative;
        flex: 1 1 0;
    }

    :nth-child(1) {
        flex: 0.5 2 0;
        padding: 30px;
        top: 90px;
        transform: rotate(10deg);
    }

    :nth-child(2) {
        transform: rotate(40deg);
        flex: 2 1 0;
        left: -10px;
        padding-right: 30px;
    }

    :nth-child(3) {
        transform: rotate(-20deg);
        flex: 0.25 1 0;
        top: 70px;
    }

    :nth-child(4) {
        transform: rotate(20deg);
        left: 60px;
        top: -50px;
        flex: 1 1 0;
    }

    :nth-child(5) {
        flex: 2 1 0;
        transform: rotate(-20deg);
        left: 100px;
        top: 50px;
    }

      }`}</style>
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
