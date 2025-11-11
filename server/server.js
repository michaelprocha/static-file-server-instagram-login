import http from "http";
import { reqMethod, reqUrl } from "./request/req.js";
import { resFile, resHeader } from "./reposnse/res.js";

const port = 3000;

const server = http.createServer(async (req, res) => {
	const isGet = reqMethod(req.method);
	if (isGet) {
		const newUrl = reqUrl(req.url);
		const data = await resFile(newUrl);
		if (data) {
			const content = resHeader(newUrl);
			res.statusCode = 200;
			res.setHeader("Content-Type", content);
			res.end(data);
		} else {
			res.statusCode = 404;
			res.setHeader("Content-Type", "text/plain; charset=utf-8");
			res.end("Pagina não encontrada!");
		}
	} else {
		res.setHeader("Content-Type", "text/plain; charset=utf-8");
		res.statusCode = 401;
		res.end("Metodo não autorizado!");
	}
});

server.listen(port, () => {
	console.log(`run in ${port}`);
});