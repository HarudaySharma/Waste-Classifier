import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home/Home.tsx';
import About from '../pages/About/About.tsx';
import NotFound from '../pages/NotFound/NotFound.tsx';
import MainPage from '../pages/MainPage/MainPage.tsx';
import Info from '../pages/Info/Info.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <NotFound />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/info",
        element: <Info/>
    },
    {
        path: "/main",
        element: <MainPage/>
    },

]);

export default router;
