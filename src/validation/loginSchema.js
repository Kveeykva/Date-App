import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçersiz E-Posta Adresi")
    .required("E-Posta Adresi Gerekli "),

  password: yup
    .string()
    .min(6, ({ min }) => `Şifreniz en az ${min} karakter olmalıdır.`)
    .required("Şifre Gerekli")
    .matches(/(?=.*[0-9])/, "Şifreniz en az bir rakam içermelidir."),
});

export const initialValues = {
  password: "",
  email: "",
};
