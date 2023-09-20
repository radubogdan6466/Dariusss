import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import "../../App.css";
import logo from "../../builder.png";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa";
const Contact = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="ContactComponent" id="contact">
      <div className="ContactContent">
        <h1 className="ContactTitle">{t("Contact.Title")}</h1>
        <p>{t("Contact.description")}</p>
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => copyToClipboard("+39 389 470 7308")}
        >
          <FaPhone style={{ color: "#008000" }} /> +39 389 470 7308
        </h2>
        {copied && <div style={{ color: "green" }}>{t("copyNumber")}</div>}
      </div>
      <div className="floatWhatsapp">
        <FloatingWhatsApp
          phoneNumber="+39 389 470 7308"
          accountName="Darius"
          chatMessage={t("whatsappHello")}
          statusMessage={t("whatsappStatus")}
          placeholder={t("whatsappPlaceHolder")}
          avatar={logo}
        />
      </div>
    </div>
  );
};

export default Contact;
