import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../App.css";
import { useTranslation } from "react-i18next";

const images = [
  {
    original: require("../../images/elec/image1.jpg"),
    thumbnail: require("../../images/elec/image1.jpg"),
  },
  {
    original: require("../../images/elec/image2.jpg"),
    thumbnail: require("../../images/elec/image2.jpg"),
  },
];
const Elettricista = () => {
  const { t } = useTranslation();

  return (
    <div className="elettricistaComponent" id="elettricista">
      <div className="ElettricistaContent">
        <h1 className="ElettricistaTitle">{t("electric.Title")}</h1>
        <p>{t("electric.description")}</p>
        <div className="works">
          <h2>{t("electric.Gallery")}</h2>
          <ImageGallery items={images} />
        </div>
      </div>
    </div>
  );
};

export default Elettricista;
