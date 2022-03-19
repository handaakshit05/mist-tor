import React from "react";
import { Redirect, Route } from "react-router-dom";
 
import { useTorState } from "./context";
 
// renders the components according to the routes
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    const userDetails = useTorState();
    
    return (
        <Route
            path={path}
            render={props =>
                // redirect to sign in page if no token is present
                isPrivate && !Boolean(userDetails.token) ? (
                    <Redirect
                        to={{ pathname: "/" }}
                    />
                )
                : (
                    <Component {...props} />
                )
            }
            {...rest}
        />
    )
}
 
export default AppRoutes;