import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import React, { useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import UserContext from "./utils/UserContext";
import RestaurantMenu from './components/RestaurantMenu';
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

// const RestaurantMenu = lazy(()=>import('./components/RestaurantMenu'));
 
const AppLayout = ()=>{
    const [userLocation, setUserLocation] = useState();
    const {loggedUser} = useContext(UserContext);

    return (
        <Provider store={appStore}>
            <div className="app">
                <UserContext.Provider value={{
                    userLocation,
                    setUserLocation,
                    loggedUser
                }}>
                    <Header/>
                    <Outlet />
                </UserContext.Provider>
            </div>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children:[
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path:'/contact',
                element: <Contact/>
            },
            {
                path:'/cart',
                element: <Cart/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu />
            }
        ],
        errorElement:<Error/>
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

