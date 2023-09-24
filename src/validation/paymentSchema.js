import * as yup from "yup";

export const PaymentSchema = yup.object({
  cardNumber: yup
    .string()
    .required("Kart numarası zorunludur")
    .length(16, "Kart numarası 16 haneli olmalıdır"),
  cardName: yup.string().required("Kart üzerindeki isim zorunludur"),
  cardExpiry: yup
    .string()
    .required("Kart son kullanma tarihi zorunludur")
    .matches(
      /^(0[1-9]|1[0-2])\/\d{2}$/,
      "Geçerli bir tarih formatı giriniz (MM/YY)"
    ),
  cardCvc: yup
    .string()
    .required("CVC zorunludur")
    .max(3, "CVC 3 karakterden uzun olmamalıdır"),
});
