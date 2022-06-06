import { NextApiRequest, NextApiResponse } from "next";
import { Canvas, createCanvas, registerFont, createImageData, loadImage } from "canvas";
import path from "path";

const linesTop = 250;
const titleFontSize = 135;
const subtitleFontSize = 110;
const lineHeight = 170;

interface SeparatedText {
  line: string;
  remaining: string;
}

const createTextLine = (canvas: Canvas, text: string): SeparatedText => {
  const context = canvas.getContext("2d");
  const MAX_WIDTH = 1000 as const;

  for (let i = 0; i < text.length; i += 1) {
    const line = text.substring(0, i + 1);

    if (context.measureText(line).width > MAX_WIDTH) {
      return {
        line,
        remaining: text.substring(i + 1),
      };
    }
  }

  return {
    line: text,
    remaining: "",
  };
};

const createTextLines = (canvas: Canvas, text: string): string[] => {
  const lines: string[] = [];
  let currentText = text;

  while (currentText !== "") {
    const separatedText = createTextLine(canvas, currentText);
    lines.push(separatedText.line);
    currentText = separatedText.remaining;
  }
  return lines;
};

const culculateY = (lines: string[]): number => {
  return linesTop + lines.length * lineHeight;
};

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
  // const titleY = linesTop - titleFontSize / 2;
  // ctx.fillText(titleLine, 600, titleY);

  const subtitleLine = createTextLines(canvas, subtitle);
  const subtitleY = linesTop + lineHeight - subtitleFontSize / 2;
  ctx.font = subtitleFontSize + "px genjyuu-gothic";
  ctx.fillStyle = theme === "dark" ? "#DAE2FF" : "#272830";
  subtitleLine.forEach((line, index) => {
    const y = linesTop + lineHeight + subtitleFontSize * (index - (subtitleLine.length - 1) / 2);
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
