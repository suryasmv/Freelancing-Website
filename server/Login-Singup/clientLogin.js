const pool = require("./database");

function clientLogin(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing required data" });
  }

  const sql = "SELECT * FROM clients WHERE email = ? AND password = ?";
  const values = [email, password];

  pool.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error fetching data from the database: ", err);
      return res.status(500).json({ message: "Server error" });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Client found, send success response
    res.status(200).json({ message: "Login successful" });
  });
}

module.exports = clientLogin;
