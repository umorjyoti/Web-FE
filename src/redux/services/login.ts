import axios from "axios";
import { getUserJWT } from "../../utils";

const defaultOptions = {
    baseUrl : "https:/sdgfknsdgs",
}

const cancelToken = axios.CancelToken;
const source = cancelToken.source();
const controller = new AbortController();

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(function(config){
    const userToken = getUserJWT();
    config.headers.Authorization = userToken;
    config.headers.isEncrypted = true;
    config.cancelToken = source.token;
    config.signal = controller.signal;
    return config;
})

export default instance;