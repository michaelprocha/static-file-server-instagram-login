import path from "path";
import { readFile } from '../file/file.js';

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
  const data = await readFile(newUrl);
  return data;
}

function resHeader(ext) {
  const ext = path.extname(newUrl);
  return extFile[ext.substrimng(1)];
}

export { resFile, resHeader };