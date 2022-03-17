import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Home from '../pages/home/home';
import MovieDetail from '../pages/detail/details';
import Header from '../components/header';
import FooterSection from '../components/footer';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv/:id" element={<MovieDetail />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}
export default AppRoutes;
