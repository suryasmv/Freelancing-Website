const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const clientSignup = require("./Login-Singup/clientSignup");
const freelancerSignup = require("./Login-Singup/freelancerSignup");
const clientLogin = require("./Login-Singup/clientLogin");
const freelancerLogin = require("./Login-Singup/freelancerLogin")

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/api/client-registration", clientSignup);

app.post("/api/freelancer-registration", freelancerSignup);

app.post("/api/client-login", clientLogin);

app.post("/api/freelancer-login", freelancerLogin )

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
