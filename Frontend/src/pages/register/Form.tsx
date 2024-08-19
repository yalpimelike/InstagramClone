import { Button, List, TextField } from "@mui/material";
import { useState } from "react";
import * as dto from "../../dto/Login";
import axios from "axios";
import { useTranslation } from "react-i18next";

export default function Form() {
  const { t } = useTranslation();
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSignUp = () => {
    if (dataControl()) {
      const data: dto.SignUpDto = {
        email: email,
        fullname: fullname,
        username: username,
        password: password,
      };
      register(data);
      navigate("/");
    }
  };

  const register = (data: dto.SignUpDto) => {
    axios
      .post("http://localhost:8082/login/register", data)
      .then((response) => {
        navigate("/");
        console.log("Başarılı:", response.data);
      })
      .catch((error) => {
        setErrorMessage("Kayıt Oluşturulamadı");
        setIsError(true);
        console.error("Hata:", error);
      });
  };

  const dataControl = (): boolean => {
    if (
      username.length === 0 ||
      fullname.length === 0 ||
      email.length === 0 ||
      password.length === 0
    ) {
      setErrorMessage("login.input-emty-error");
      setIsError(true);
      return false;
    } else if (password.length < 6) {
      setErrorMessage("login.password-error");
      setIsError(true);
      return false;
    }
    return true;
  };
  return (
    <div>
      {" "}
      <TextField
        className="login-input"
        size="small"
        placeholder={t("login.input-email")}
        onChange={(e) => setEmail(e.target.value)}
      ></TextField>
      <TextField
        className="login-input"
        size="small"
        placeholder={t("login.fullname")}
        onChange={(e) => setFullname(e.target.value)}
      ></TextField>
      <TextField
        className="login-input"
        size="small"
        placeholder={t("login.input-pass")}
        onChange={(e) => setPassword(e.target.value)}
      ></TextField>
      <TextField
        className="login-input"
        size="small"
        placeholder={t("login.username")}
        onChange={(e) => setUsername(e.target.value)}
      ></TextField>
      <List>
        <div className="a">
          Hizmetimizi kullanan kişiler senin iletişim bilgilerini Instagram'a
          yüklemiş olabilir. Daha Fazla Bilgi Al
        </div>

        <div>
          Kaydolarak, Koşullarımızı, Gizlilik İlkemizi ve Çerezler İlkemizi
          kabul etmiş olursun.
        </div>
      </List>
      {isError && (
        <div className="error-message" style={{ marginBottom: 10 }}>
          <a>{t(errorMessage)}</a>
        </div>
      )}
      <Button
        variant="contained"
        className="login-button"
        onClick={() => handleSignUp()}
      >
        {t("login.sign-up")}
      </Button>
    </div>
  );
}
function navigate(arg0: string) {
  throw new Error("Function not implemented.");
}
