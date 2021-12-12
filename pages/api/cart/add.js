import cookie from "cookie";
import { API_URL } from "../../../config/index";

export default async (req, res) => {
  if (req.method === 'PUT') {
    const cookies = cookie.parse(req.headers.cookie ?? "");
    const access = cookies.access ?? false;
    //console.log(access);
    //console.log(req.body)
    const product = req.body;

    const body = JSON.stringify({
      product,
    });
    //console.log(body);
    try {
      const apiRes = await fetch(`${API_URL}/api/Cart/Add/`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${access}`,
          'Content-Type': 'application/json',
        },
        
        body: body,

      });
      const data = await apiRes.json();

      if (apiRes.status === 200) {
        return res.status(200).json({
        });
      } else {
        return res.status(apiRes.status).json({
          error: data.error,
        });
      }
    } catch (err) {
      return res.status(500).json({
        error: "Something went wrong when retrieving user",
      });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).json({
      error: `Method ${req.method} not allowed`,
    });
  }
};
