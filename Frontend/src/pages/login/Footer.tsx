import { List } from "@mui/material";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n/i18n";

export default function Footer() {
  const { t } = useTranslation();
  const changeLanguages = () => {
    i18n.changeLanguage(i18n.language === "tr" ? "en" : "tr");
  };
  return (
    <div>
      <List className="footer">
        <a href="#">{t("login.about")}</a>
        <a href="#">{t("login.blog")}</a>
        <a href="#">{t("login.jobs")}</a>
        <a href="#">{t("login.help")}</a>
        <a href="#">{t("login.api")}</a>
        <a href="#">{t("login.privacy")}</a>
        <a href="#">{t("login.terms")}</a>
        <a href="#">{t("login.locations")}</a>
        <a href="#">{t("login.instagram-lite")}</a>
        <a href="#">{t("login.threads")}</a>
        <a href="#">{t("login.contact-up")}</a>
        <a href="#">{t("login.verified")}</a>
      </List>
      <List className="footer">
        <a href="#" onClick={() => changeLanguages()}>
          {i18n.language === "tr" ? "English" : "Türkçe"}
        </a>
        <a href="#">©2023 Instagram from Meta</a>
      </List>
    </div>
  );
}
