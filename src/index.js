import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { weatherApi} from "./apis/index.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/location/:searchTerm", async (req, res) => {
  const { searchTerm } = req.params;
  const data = await weatherApi.get(
    `geo/1.0/direct?q=${searchTerm}&limit=5&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );

  res.send(data.data);
});

app.get("/weather/:lat/:lon", async (req, res) => {
  const { lat, lon } = req.params;
  const data = await weatherApi.get(
    `data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );
  res.send(data.data);
});

app.get("/3h/:lat/:lon", async (req, res) => {
  const { lat, lon } = req.params;
  const data = await weatherApi.get(
    `data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.OPEN_WEATHER_API_KEY}`
  );
  res.send(data.data);
});

app.listen(PORT, () => {
  console.log("Server listening on port 5000");
});
