import { Url } from "../models/urlModel.js";

export async function getUrls(req, res) {
  try {
    const urls = await Url.find().sort({createdAt:-1});
    res.status(200).json(urls);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
}

export async function shortenUrl(req, res) {
  try {
    const { url } = req.body;

    const newShortenedUrl = new Url({
      longUrl: url,
      shortID: crypto.randomUUID().slice(24, -4),
    });

    const savedUrl = await newShortenedUrl.save();
    res
      .status(201)
      .json({ message: "Short url created succesifully", data: savedUrl });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
}

export async function urlRedirect(req, res) {
  try {
    const { shortID } = req.params;
    const url = await Url.findOne({ shortID });
    url.clicks += 1;
    await url.save();

    // Redirecting the user to the long url
    res.redirect(url.longUrl);
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
}

export async function deleteUrl(req, res) {
  try {
    const { id } = req.params;
    await Url.findByIdAndDelete(id);
    res.status(200).json({ message: "Url deleted succesifully!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!" });
  }
}
