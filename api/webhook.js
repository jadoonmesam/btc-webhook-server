export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  try {
    const { longPain, shortPain, symbol } = req.body;

    console.log("📨 Webhook received:");
    console.log("Symbol:", symbol);
    console.log("Long Max Pain:", longPain);
    console.log("Short Max Pain:", shortPain);

    return res.status(200).json({ message: 'Webhook received successfully' });
  } catch (err) {
    console.error("❌ Error processing webhook:", err);
    return res.status(500).json({ message: 'Server error' });
  }
}
