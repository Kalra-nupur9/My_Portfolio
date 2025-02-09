export default function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, contactNumber, message } = req.body;

    if (!firstName || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // You can process or save the data here (e.g., send an email, save to DB, etc.)
    return res
      .status(200)
      .json({ success: true, message: "Form submitted successfully!" });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
