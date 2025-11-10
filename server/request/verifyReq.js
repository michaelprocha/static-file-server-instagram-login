export default function verifyReq(method){
    if (method === 'GET') {
        return true;
    }
    return false;
}