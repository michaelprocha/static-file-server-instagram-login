import fs from "fs";
import { resHeader } from '../reposnse/res.js'

const isUtf = ['text/html; charset=utf-8', "text/css; charset=utf-8", "application/javascript; charset=utf-8", "application/json; charset=utf-8", "image/svg+xml; charset=utf-8", "text/plain; charset=utf-8"]

async function readFile(newUrl) {
    const ext = resHeader(newUrl);
	try {
        if (isUtf.includes(ext.substring(1))) {
            const data = await fs.promises.readFile(newUrl, "utf8");
            return data;
        }
        const data = await fs.promises.readFile(newUrl);
        return data;
	} catch (error) {
		throw error;
	}
}

function fileExists(newUrl) {
	if (fs.existsSync(newUrl)) {
		return readFile(newUrl);
	} else {
		return '';
	}
}

export { readFile, fileExists };
