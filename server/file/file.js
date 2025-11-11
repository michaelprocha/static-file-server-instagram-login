import fs from 'fs';

async function readFile(newUrl) {
    try {
        const data = await fs.promises.readFile(newUrl, 'utf8');
        return data;
    } catch (error) {
        throw error;
    }
}

export { readFile };