import { get } from "../api";

const apiUri = process.env.REACT_APP_API_URL;
const socketIoEndpoint = async() => {
    return await get(`${apiUri}/server/getUri`, {});
}
export default socketIoEndpoint;