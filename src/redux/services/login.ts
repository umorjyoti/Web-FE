import axios from "axios";
import { getUserJWT } from "../../utils";

const defaultOptions:any = {
    baseUrl : "https://ragalia.onrender.com/api/auth/",
}

const cancelToken = axios.CancelToken;
const source = cancelToken.source();
const controller = new AbortController();

const instance = axios.create(defaultOptions);

instance.interceptors.request.use(function(config){
    const userToken = getUserJWT();
    // config.headers.Authorization = userToken;
    config.headers.isEncrypted = true;
    config.cancelToken = source.token;
    config.signal = controller.signal;
    config.headers["Content-Type"] = "application/json";
    config.headers.Host = "<calculated when request is sent>";
    config.headers["Content-Length"] = "<calculated when request is sent>";
    config.headers.Accept = "*/*";
    return config;
})

export default instance;