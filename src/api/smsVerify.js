import axios from "axios";
const smsBaseUrl = "https://k3wm88.api.infobip.com/sms/2/text/advanced";

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
      //   {
      //     headers: {
      //         API_KEY:
      //         "Bearer e91cc7a038c084fca33981591a6cf49f-e96aab2a-b435-405f-9e16-10fccbbbb434",
      //     },
      //   }
    );
    return result;
  } catch (error) {
    console.error("2FA" + error);
  }
};
