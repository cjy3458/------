import axios from "axios";

const baseUrl = `https://all-it-chat.o-r.kr/accounts`;

export const mentorLogin = async () => {
  const url = `${baseUrl}/login/mentor`;
  const result = await axios.post(url);
  console.log(result);
};
