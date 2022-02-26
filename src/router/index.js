import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import  Home  from '../pages/home';
import MovieDetail from "../pages/detail";
import NavBar from "../components/navbar/navbar";

function AppRoutes() {
    return(
      <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/tv/:id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    )
}
export default AppRoutes;




// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from "react-router-dom";
// import { Home } from "../pages";
// import MovieDetail from "../pages/detail";

// function AppRoutes() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/:id" element={<MovieDetail />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default AppRoutes;
