import http from "http";
import { reqMethod, reqUrl } from "./request/req.js";
import { resSend } from "./reposnse/res.js";

const port = 3000;

const server = http.createServer(async (req, res) => {
	const isGet = reqMethod(req.method);

	if (isGet) {
		const newUrl = reqUrl(req.url);
		const data = await resSend(newUrl);
		console.log(typeof data);
		res.end(data)
		
	} else {
		console.log("metodo não altorizado");
	}

});

server.listen(port, () => {
	console.log(`run in ${port}`);
});
