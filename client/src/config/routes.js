// routes for the application

// import pages
import LandingPage from "./../pages/LandingPage";
import Dashboard from "./../pages/Dashboard/Dashboard";
import ErrorPage from "../pages/error/Error";

const routes = [  
  {
    path: "/error",
    component: ErrorPage,
    isPrivate: false
  },
  {
    path: "/dashboard",
    component: Dashboard,
    isPrivate: true
  },
  {
    path:'/',
    component: LandingPage,
    isPrivate: false
  },
]

export default routes;