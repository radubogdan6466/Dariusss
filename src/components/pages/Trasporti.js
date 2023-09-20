import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../App.css";
import { useTranslation } from "react-i18next";
const images = [
  {
    original: require("../../images/transport/mainImg.jpg"),
  },
  {
    original: require("../../images/transport/image1.jpg"),
  },
  {
    original: require("../../images/transport/image2.jpg"),
  },
  {
    original: require("../../images/transport/image3.jpg"),
  },
  {
    original: require("../../images/transport/image4.jpg"),
  },
  {
    original: require("../../images/transport/image5.jpg"),
  },
  {
    original: require("../../images/transport/image6.jpg"),
  },
];
const Trasporti = () => {
  const { t } = useTranslation();

  return (
    <div className="TransportiComponent" id="transporti">
      <div className="TransportiContent">
        <h1 className="TransportiTitle">{t("Transport.Title")}</h1>
        <p>{t("Transport.description")}</p>
        <div className="works">
          <h2>{t("Transport.Gallery")}</h2>
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            slideDuration={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Trasporti;
