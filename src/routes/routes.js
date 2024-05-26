import React from "react";
import { Routes,Route } from "react-router-dom";
import { config } from "../pages/config";

function RoutesProviders () {
    return(
        <Routes>
            {
                config.map(({element,path,Layout},index)=>(
                    <Route key={index} element={<Layout>{element}</Layout>} path={path} />
                ))
            }
        </Routes>
    )
}

export default RoutesProviders