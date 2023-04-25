const pool = require("./database");

function clientSignup(req, res) {
  const { name, email, companyName, address, password, confirmPassword, phoneNumber } = req.body;

  if (
    !name ||
    !email ||
    !companyName ||
    !address ||
    !password ||
    !confirmPassword ||
    !phoneNumber
  ) {
    return res.status(400).json({ message: "Missing required data" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const sql = "INSERT INTO clients (name, email, company_name, address, password, phone_number) VALUES (?, ?, ?, ?, ?, ?)";
  const values = [name, email, companyName, address, password, phoneNumber];
  
  pool.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into the database: ", err);
      return res.status(500).json({ message: "Server error" });
    }
    console.log("Form data:", {
      name,
      email,
      companyName,
      address,
      password,
      confirmPassword,
      phoneNumber
    });
    res.status(200).json({ message: "Registration successful" });
  });
}

module.exports = clientSignup;
