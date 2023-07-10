import axios from "axios";
const smsBaseUrl = "https://k3wm88.api.infobip.com/sms/2/text/advanced";
const emailBaseUrl = "https://k3wm88.api.infobip.com/email/3/send";

export const smsVerify = async ({ phoneNumber, pin }) => {
  try {
    const result = await axios.post(
      `${smsBaseUrl}`,
      {
        messages: [
          {
            destinations: [
              {
                to: `${phoneNumber}`,
              },
            ],
            from: "InfoSMS",
            text: `Your PIN is ${pin}`,
          },
        ],
      },
      {
        auth: {
          username: "kaijun",
          password: "Kaijun0908!",
        },
      }
    );
    console.log(result);
    return result;
  } catch (error) {
    console.error("2FA" + error);
  }
};

export const emailConfirmation = async () => {
  const data = new FormData();
  data.append("from", "chun19970810@gmail.com");
  data.append("to", "kaijun_huang@outlook.com");
  data.append("subject", "Mail subject text and placeholder ph1");
  data.append("text", "Dear KKK, this is mail body text");
  try {
    const result = await axios.post(`${emailBaseUrl}`, data, {
      auth: {
        username: "kaijun",
        password: "Kaijun0908!",
      },
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
