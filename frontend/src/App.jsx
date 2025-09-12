import { Route, Routes } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";

import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";


function App() {
  //const {products} = useProductsStore()

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  )
}

export default App
