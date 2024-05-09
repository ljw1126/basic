import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import Root from "./pages/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <NotFound/>,
        children: [
            {index:true, element: <Home/>},
            {path:'videos', element: <Videos/>}
        ]
    }
]);
export default function Router() {
    return (
        <RouterProvider router={router}>
        </RouterProvider>
    );
}
