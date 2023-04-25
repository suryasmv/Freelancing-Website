const db = require('./database');

// Create a new table for clients if it does not exist
db.query(`CREATE TABLE IF NOT EXISTS freelancer (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  description VARCHAR(45) NOT NULL,
  password VARCHAR(15) NOT NULL,
  phone_number VARCHAR(10) NOT NULL
)`, (error, results) => {
  if (error) {
    console.error('Error creating table: ', error);
  } 
});

function freelancerSignup(req, res) {
  const { name, email, description, password, confirmPassword , phoneNumber } = req.body;

  if (
    !name ||
    !email ||
    !description ||
    !password ||
    !confirmPassword ||
    !phoneNumber
  ) {
    return res.status(400).json({ message: "Missing required data" });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  const sql = "INSERT INTO freelancer (name, email, description, password, phone_number) VALUES (?, ?, ?, ?, ?)";
  const values = [name, email, description, password, phoneNumber];
  
  db.query(sql, values, (err, results) => {
    if (err) {
      console.error("Error inserting data into the database: ", err);
      return res.status(500).json({ message: "Server error" });
    }
    console.log("Form data:", {
      name,
      email,
      description,
      password,
      phoneNumber
    });
    res.status(200).json({ message: "Registration successful" });
  });
}

module.exports = freelancerSignup;
