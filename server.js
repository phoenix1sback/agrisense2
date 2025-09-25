const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/recommend", (req,res)=>{
  const {crop, ph, weather} = req.body;
  let result="";
  if(crop=="wheat") result+="Urea 30 kg/acre. ";
  if(crop=="rice") result+="DAP 25 kg/acre. ";
  if(crop=="maize") result+="NPK 20 kg/acre. ";
  if(weather=="rain") result+="💧 Skip irrigation tomorrow.";
  else result+="💧 Irrigate lightly tomorrow.";
  if(ph<6) result+=" Soil acidic → add lime.";
  if(ph>7.5) result+=" Soil alkaline → add gypsum.";
  res.json({recommendation: result});
});

app.listen(5000,()=>console.log("Server running on port 5000"));
