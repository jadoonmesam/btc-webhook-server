export const config = {
  api: {
    bodyParser: true,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log("✅ Webhook triggered");
    console.log("🔍 Full body:", JSON.stringify(req.body));

    const { shortPain, longPain, symbol } = req.body;

    console.log("Symbol:", symbol);
    console.log("Long Max Pain:", longPain);
    console.log("Short Max Pain:", shortPain);

    return res.status(200).json({ message: "Received" });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
