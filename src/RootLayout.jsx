import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from 'react';
import { TopBar } from "./Components/Navbar/TopBar.jsx";

export const RootLayout = () => {

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return (
        <div className='overflow-hidden root-layout'>
            <TopBar/>
            <main className={`w-full min-h-full mt-0.5 mb-12`}>
                <Outlet />
            </main>
        </div>
    )
}
