import shortid from "shortid";
import URL from "../models/url.js";

export async function handleGenerateNewShortURL(req, res) {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "url is required" });
  
  const shortID = shortid.generate();
  
  await URL.create({
    shortId: shortID,
    redirectURL: url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

export async function handleGetAnalytics(req, res) {
  const { shortId } = req.params;
  const result = await URL.findOne({ shortId });
  
  if (!result) return res.status(404).json({ error: "Short URL not found" });
  
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

export default { handleGenerateNewShortURL, handleGetAnalytics };