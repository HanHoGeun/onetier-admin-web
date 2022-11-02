import axios, {AxiosRequestConfig} from 'axios';

const customAxios = axios.create({
    baseURL: 'http://localhost:19400',
    headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Accept": "application/json"
    },
    withCredentials: true,
})

customAxios.interceptors.request.use(
    (config) => {
        config.headers = {
            ...getAuth(),
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
);

customAxios.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const {
            response: { status },
        } = error;
        console.log('status:::', status)
        return Promise.reject(error);
    }
);

const getAuth = () => {
    /* if (store.state.auth.accessToken && store.state.auth.accessToken !== "") {
        return { Authorization: `Bearer ${store.state.auth.accessToken}` };
    }
    return {}; */
    return {}
};

export default customAxios;
