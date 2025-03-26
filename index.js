// import express from "express";
// import { connectToMongoDB } from "./connect.js";
// import urlRoute from "./routes/url.js";
// import URL from "./models/url.js";

// const app = express();
// const PORT = 8001;

// connectToMongoDB().then(() => console.log("MongoDB connected"));

// app.use(express.json());
// app.use("/url", urlRoute);

// app.get("/:shortId", async (req, res) => {
//   const { shortId } = req.params;
//   const entry = await URL.findOneAndUpdate(
//     { shortId },
//     {
//       $push: {
//         visitHistory: { timestamp: Date.now() },
//       },
//     },
//     { new: true }
//   );

//   if (!entry) return res.status(404).json({ error: "Short URL not found" });

//   res.redirect(entry.redirectURL);
// });

// app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));

import express from "express";
import cors from "cors"; // Import CORS
import { connectToMongoDB } from "./connect.js";
import urlRoute from "./routes/url.js";
import URL from "./models/url.js";

const app = express();
const PORT = 8001;

// Enable CORS for all origins
app.use(cors());

app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitHistory: { timestamp: Date.now() } } },
    { new: true }
  );

  if (!entry) return res.status(404).json({ error: "Short URL not found" });

  res.redirect(entry.redirectURL);
});

connectToMongoDB().then(() => console.log("MongoDB connected"));

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));
