import { NextApiRequest, NextApiResponse } from "next";
import { Canvas, createCanvas, registerFont, createImageData, loadImage } from "canvas";
import path from "path";
import createTextLines from "../../../lib/canvas/createTextLines";

const linesTop = 250;
const titleFontSize = 135;
const subtitleFontSize = 110;
const lineHeight = 160;

const createOgp = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  process.env.FONTCONFIG_PATH = require("path").resolve(
    __dirname,
    "./assets/fonts"
  );
  const WIDTH = 1200 as const;
  const HEIGHT = 630 as const;
  const DX = 0 as const;
  const DY = 0 as const;
  const canvas = createCanvas(WIDTH, HEIGHT);

  const { dynamic, theme, customTitle } = req.query;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = theme === "dark" ? "#23262B" : "#E6F0FF";
  ctx.fillRect(DX, DY, WIDTH, HEIGHT);

  registerFont(path.resolve("./assets/fonts/GenJyuuGothic-Regular.ttf"), {
    family: "genjyuu-gothic",
  });

  ctx.font = titleFontSize + "px genjyuu-gothic";
  ctx.fillStyle = "dark" ? "#4C91FF" : "#3466B4";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const title = customTitle ? String(customTitle) : "Hack Util Apps";
  const subtitle = String(dynamic);

  const titleLine = createTextLines(canvas, title);
  titleLine.forEach((line, index) => {
    const y = linesTop - titleFontSize / 2 + titleFontSize * (index - (titleLine.length - 1) / 2);
    ctx.fillText(line, 600, y);
  });

  const subtitleLine = createTextLines(canvas, subtitle);
  const subtitleY = linesTop + lineHeight - subtitleFontSize / 2;
  ctx.font = subtitleFontSize + "px genjyuu-gothic";
  ctx.fillStyle = theme === "dark" ? "#DAE2FF" : "#272830";
  subtitleLine.forEach((line, index) => {
    const y = linesTop + lineHeight + subtitleFontSize * 1.2 * (index - (subtitleLine.length - 1) / 2);
    ctx.fillText(line, 600, y);
  });

  const favicon = await loadImage(path.resolve("./public/favicon.ico"));

  ctx.drawImage(favicon, 1020, 460, 150, 150);

  const buffer = canvas.toBuffer();

  res.writeHead(200, {
    "Content-Type": "image/png",
    "Content-Length": buffer.length,
  });
  res.end(buffer, "binary");
};

export default createOgp;
