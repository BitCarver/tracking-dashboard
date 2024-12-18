import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import PageNotFound from "../pages/PageNotFound/PageNotFound";

export const Routing = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"*"} element={<PageNotFound />} />
        </Routes>
    );

}

export default Routing;