export default async function handler(req, res) {
    if (req.method === "POST") {
      const { firstName, lastName, email, contactNumber, message } = req.body;
      const file = req.file; // Access file if needed (requires a middleware like Multer)
  
      // Add your logic to save data (e.g., save to database or send an email)
      return res.status(200).json({ message: "Form submitted successfully!" });
    } else {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  