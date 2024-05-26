import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Flex } from "@chakra-ui/react";

function Autlayout({ children }) {
    return (
        <Flex flexDirection={"column"} w={"full"} >
            <Header />
            {children}
            <Footer />
        </Flex>
    )

    
}
export default Autlayout