import * as yup from "yup";

export const registerValidationSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, ({ min }) => `Şifreniz en az ${min} karakter olmalıdır.`)
    .max(20, ({ max }) => `Şifreniz en fazla ${max} karakter olmalıdır.`)
    .required("Şifre Gerekli")
    .matches(/(?=.*[0-9])/, "Şifreniz en az bir rakam içermelidir."),
  name: yup.string().required("Ad Gerekli"),
  surname: yup.string().required("Soyad Gerekli"),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi giriniz.")
    .required("E-posta Gerekli"),
});

export const initialValues = {
  name: "",
  surname: "",
  password: "",
  email: "",
};

export const registerAuthValidationSchema = yup.object().shape({
  phoneNumber: yup
    .string()
    .required("Telefon Numarası Gerekli")
    .matches(/^(\+90|0)(5[0-9]{9})$/, "Geçerli bir telefon numarası giriniz."),
});

export const initialValuesAuth = {
  phoneNumber: "",
};
