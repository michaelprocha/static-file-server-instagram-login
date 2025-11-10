import http from "http";
import { URL } from "url";
import path from "path";
import fs from "fs";
import verifyReq from "./request/verifyReq.js";

const port = 3000;
const initialPath = path.join(process.cwd(), "/public");

const server = http.createServer((req, res) => {
	const isGet = verifyReq(req.method);

	if (req.url === "/") {
		const finalPath = path.join(initialPath, "/index.html");
		console.log(finalPath);
		const reqUrl = new URL(finalPath);
		console.log(reqUrl.href);

		if (isGet) {
			console.log("metodo permitido");
		} else {
			console.log("metodo não altorizado");
		}
	}

	// const urlOfReq = new URL(req.url);
	// console.log(urlOfReq.hostname);
	// console.log(urlOfReq.href);
});

server.listen(port, () => {
	console.log(`run in ${port}`);
});
