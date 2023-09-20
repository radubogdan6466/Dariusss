import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "../../App.css";
import { useTranslation } from "react-i18next";

const images = [
  {
    original: require("../../images/paint/image1.jpg"),
  },
  {
    original: require("../../images/paint/image2.jpg"),
  },
  {
    original: require("../../images/paint/image3.jpg"),
  },
  {
    original: require("../../images/paint/image4.jpg"),
  },
  {
    original: require("../../images/paint/image5.jpg"),
  },
  {
    original: require("../../images/paint/image6.jpg"),
  },
  {
    original: require("../../images/paint/image7.jpg"),
  },
  {
    original: require("../../images/paint/image8.jpg"),
  },
];
const Imbianchino = () => {
  const { t } = useTranslation();

  return (
    <div className="ImbianchinoComponent" id="imbianchino">
      <div className="ImbianchinoContent">
        <h1 className="ImbianchinoTitle">{t("Painter.Title")}</h1>
        <p>{t("Painter.description")}</p>
        <div className="works">
          <h2>{t("Painter.Gallery")}</h2>
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

export default Imbianchino;
