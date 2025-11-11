import http from "http";
import { reqMethod, reqUrl } from "./request/req.js";
import { resFile, resHeader } from "./reposnse/res.js";

const port = 3000;

const server = http.createServer(async (req, res) => {
	const isGet = reqMethod(req.method);

	if (isGet) {
		const newUrl = reqUrl(req.url);
		const data = await resFile(newUrl);
		const content = resHeader(newUrl);
		res.setHeader('Content-Type', content);
		if (data) {
			res.end(data);
		}else{
			res.end();
		}
	} else {
		console.log("metodo não altorizado");
	}
});

server.listen(port, () => {
	console.log(`run in ${port}`);
});
