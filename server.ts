import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/redirect/*", (req: express.Request<{ "0": string }>, res) => {
  const urlPath = req.params[0]; // Capture everything after /redirect/

  if (!urlPath) {
    return res.status(400).send("Missing URL parameter");
  }

  try {
    // Basic validation - should start with panj and ends with ng
    if (!urlPath.startsWith("panj") && !urlPath.endsWith("ng")) {
      return res.status(400).send("Invalid URL");
    }

    let timestart = new Date().getTime();
    const decodedUrl = binaryToString(
      urlPath.replace("panj", "").replace("ng", "")
    );
    const endtime = new Date().getTime();
    console.log(`Time taken: ${endtime - timestart}ms`);
    console.log(`Redirecting to: ${decodedUrl}`);
    res.redirect(encodeURI(decodedUrl));
  } catch (err) {
    console.error("Redirect error:", err);
    res.status(500).send("Error processing redirect");
  }
});

function binaryToString(text: string): string {
  let asciiString = "";
  const binarylong = text.replace(/a/g, "0").replace(/A/g, "1");

  if (binarylong.length % 8 !== 0) {
    throw new Error("Binary string length must be a multiple of 8");
  }
  for (let i = 0; i < binarylong.length; i += 8) {
    const byte = binarylong.substring(i, i + 8);
    const decimal = parseInt(byte, 2);
    asciiString += String.fromCharCode(decimal);
  }
  return asciiString;
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
