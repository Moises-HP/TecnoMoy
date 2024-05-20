import {createBrowserRouter} from "react-router-dom"
import {RootLayout} from "../RootLayout.jsx"
import { Us, OurServices, OurClients, Gallery, Contact, ErrorPage, ServSup, ServWebsites } from "../Views/index.js"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Us />
            },
            {
                path: "nuestros-servicios",
                element: <OurServices />
            },
            {
                path: "nuestros-servicios/soporte",
                element: <ServSup />
            },
            {
                path: "nuestros-servicios/paginas-web",
                element: <ServWebsites />
            },
            {
                path: "nuestros-clientes",
                element: <OurClients />
            },
            {
                path: "galeria",
                element: <Gallery />
            },
            {
                path: "contacto",
                element: <Contact />
            },
        ]
    }
])