import path from "path";
import { fileExists } from '../file/file.js';

const extFile = {
  html: "text/html; charset=utf-8",
  css: "text/css; charset=utf-8",
  js: "application/javascript; charset=utf-8",
  json: "application/json; charset=utf-8",
  png: "image/png",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  svg: "image/svg+xml; charset=utf-8",
  ico: "image/x-icon",
  webp: "image/webp",
  txt: "text/plain; charset=utf-8",
};

async function resFile(newUrl) {
  const data = await fileExists(newUrl);
  return data;
}

function resHeader(newUrl) {
  const ext = path.extname(newUrl);
  return extFile[ext.substring(1)];
}

export { resFile, resHeader };