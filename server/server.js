import express from "express";
import activitiesRouter from "./routes/activities.js";

const app = express();
const port = process.env.PORT ?? 3001;
const host = "127.0.0.1";

app.use(express.json());
app.use("/api/activities", activitiesRouter);

app.get("/api/health", (_request, response) => {
  response.json({ status: "ok" });
});

app.listen(port, host, () => {
  console.log(`Family Activity Planner API running on http://${host}:${port}`);
});
