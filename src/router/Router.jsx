import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";
import Signin from "../pages/signin/Signin";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplication from "../pages/myApplication/MyApplication";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/myPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/viewApplications/ViewApplications";



const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Error,Please write appropriate code.</h2>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: 'register',
                element: <Register></Register>
            },

            {
                path: 'signin',
                element: <Signin></Signin>
            },
            {
                path: '/jobDetails/:id',
                element:
                    <PrivateRoute>
                        <JobDetails></JobDetails>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:6900/jobs/${params.id}`)
            },
            {
                path: '/jobApply/:id',
                element:
                    <PrivateRoute>
                        <JobApply></JobApply>
                    </PrivateRoute>,
            },
            {
                path: '/myApplication',
                element:
                    <PrivateRoute>
                        <MyApplication></MyApplication>
                    </PrivateRoute>
            },
            {
                path: 'addJob',
                element:
                    <PrivateRoute>
                        <AddJob></AddJob>
                    </PrivateRoute>
            },
            {
                path: 'myPostedJobs',
                element:
                    <PrivateRoute>
                        <MyPostedJobs></MyPostedJobs>
                    </PrivateRoute>
            },
            {
                path: '/viewApplication/:job_id',
                element:
                    <PrivateRoute>
                        <ViewApplications></ViewApplications>
                    </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:6900/job-application/jobs/${params.job_id}`)
            }

        ]
    }
])

export default router;