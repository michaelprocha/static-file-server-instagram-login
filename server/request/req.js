// import { URL } from "url";
import path from "path";

const initialPath = path.join(process.cwd(), "/public");

function reqMethod(method) {
	if (method === "GET") {
		return true;
	}
	return false;
}

function reqUrl(reqNewUrl) {
    console.log(reqNewUrl)
    if (reqNewUrl === "/") {
        const finalPath = path.normalize(path.join(initialPath, "/index.html"));
        return finalPath;
	}
    
	const finalPath = path.normalize(path.join(initialPath, reqNewUrl));
    return finalPath;
}

export { reqMethod, reqUrl };
