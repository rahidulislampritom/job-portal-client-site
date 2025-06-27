import axios from "axios";
import { useEffect } from "react";
import useAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";


const axiosInstance = axios.create({
    baseURL: 'https://job-portal-server-site-six.vercel.app',
    withCredentials: true,
})

const useAxiosSecure = () => {

    const { authSignOut } = useAuth()
    const navigate = useNavigate();



    useEffect(() => {
        axiosInstance.interceptors.response.use(response => {
            return response;
        }, error => {
            // console.log('error caught in interceptor', error)

            if (error.status === 401 || error.status === 403) {
                // console.log('need to logout the user')
                authSignOut()
                    .then(() => {
                        // console.log('logout user')
                        navigate('/signin')
                    })
                    .catch(() => {
                        // console.log(err)

                    })
            }
            return Promise.reject(error);
        })

    }, [])

    return axiosInstance;
};

export default useAxiosSecure;