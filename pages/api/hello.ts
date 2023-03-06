import { NextApiRequest, NextApiResponse } from "next";

// req: https://nodejs.org/api/http.html#http_class_http_incomingmessage
// res: https://nodejs.org/api/http.html#http_class_http_serverresponse
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ text: "Hello" });
}
