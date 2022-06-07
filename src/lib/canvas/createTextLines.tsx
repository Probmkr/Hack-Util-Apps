import { Canvas } from "canvas";

interface SeparatedText {
  line: string;
  remaining: string;
}

const createTextLine = (canvas: Canvas, text: string, maxWidth: number): SeparatedText => {
  const context = canvas.getContext("2d");

  for (let i = 0; i < text.length; i += 1) {
    const line = text.substring(0, i + 1);

    if (context.measureText(line).width > maxWidth) {
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

const createTextLines = (canvas: Canvas, text: string, maxWidth: number = 1000): string[] => {
  const lines: string[] = [];
  let currentText = text;

  while (currentText !== "") {
    const separatedText = createTextLine(canvas, currentText, maxWidth);
    lines.push(separatedText.line);
    currentText = separatedText.remaining;
  }
  return lines;
};

export default createTextLines;
