export const config = {
  api: {
    bodyParser: true, // Enables JSON body parsing
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { shortPain, longPain, symbol } = req.body;

    console.log("✅ Webhook received");
    console.log("Symbol:", symbol);
    console.log("Long Max Pain:", longPain);
    console.log("Short Max Pain:", shortPain);

    return res.status(200).json({ message: "Data received" });
  } else {
    return res.status(405).json({ error: "Method not allowed" });
  }
}
