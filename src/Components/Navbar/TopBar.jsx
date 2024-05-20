import { Link, useNavigate } from "react-router-dom"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faComment, faHandshake, faUsersViewfinder, faImages } from "@fortawesome/free-solid-svg-icons"

import { UseNavbar } from "../../hooks/useNavbar.js";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { NavbarMenuMobile, NavbarContentsMobile, DarkMode } from  './index.js'

export const TopBar = () => {
    const { handleButtonClick } = UseNavbar();
    const { status: navbarState } = useSelector(state => state.navbar);
    const navigate = useNavigate();
    useEffect(() => {
        const currentPath = window.location.pathname;
        if (currentPath === '/') {
            handleButtonClick('us');
        } else if (currentPath.startsWith('/nuestros-servicios')) {
            handleButtonClick('ourServices'); 
        } else if (currentPath.startsWith('/nuestros-clientes')) {
            handleButtonClick('ourClients');
        } else if (currentPath.startsWith('/galeria')) {
            handleButtonClick('gallery');
        } else if (currentPath.startsWith('/contacto'))
            handleButtonClick('contact');
    }, []);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar position="sticky" maxWidth='full' className="h-[70px] sm:h-[100px] lg:h-[120px]" classNames={{wrapper: "px-3 sm:px-0 lg:px-4 gap-1 sm:gap-2 lg:gap-4"}} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarContentsMobile handleButtonClick={handleButtonClick} setIsMenuOpen={setIsMenuOpen} />
            <NavbarContent justify='start' className="hidden sm:flex">
                <NavbarBrand className="justify-center">
                    <Link onClick={() => handleButtonClick('us')} to="/">
                        <p className="font-bold titleNav-text text-base md:text-lg lg:text-xl">TecnoMoy</p>
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent justify='center' className="hidden sm:flex gap-3 lg:gap-4">
                <NavbarItem className="mr-0 lg:mr-3">
                        <Button
                            disableRipple
                            className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-base lg:text-lg xl:text-xl ${navbarState==='us' && 'text-[#D6AE67]'}`}
                            variant="light"
                            onClick={() => {handleButtonClick('us')
                            navigate('/')}}
                        >
                            <FontAwesomeIcon icon={faUsers} className="pr-0 lg:pr-0.5"/>
                            Nosotros
                        </Button>
                </NavbarItem>
                <NavbarItem className="mr-0 lg:mr-3">
                    <Button
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-base lg:text-lg xl:text-xl ${navbarState === 'ourServices' && 'text-[#D6AE67]'}`}
                        variant="light"
                        onClick={() => {handleButtonClick('ourServices')
                        navigate('/nuestros-servicios')}}
                    >
                        <FontAwesomeIcon icon={faHandshake} className="pr-0 lg:pr-0.5"/>
                        Servicios
                    </Button>
                </NavbarItem>
                <NavbarItem className="mr-0 lg:mr-3">
                    <Button
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-base lg:text-lg xl:text-xl ${navbarState === 'ourClients' && 'text-[#D6AE67]'}`}
                        variant="light"
                        onClick={() => {handleButtonClick('ourClients')
                        navigate('/nuestros-clientes')}}
                    >
                        <FontAwesomeIcon icon={faUsersViewfinder} className="pr-0 lg:pr-0.5"/>
                        Clientes
                    </Button>
                </NavbarItem>
                <NavbarItem className="mr-0 lg:mr-3">
                    <Button
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-base lg:text-lg xl:text-xl ${navbarState === 'gallery' && 'text-[#D6AE67]'}`}
                        variant="light"
                        onClick={() => {handleButtonClick('gallery')
                        navigate('/galeria')}}
                    >
                        <FontAwesomeIcon icon={faImages} className="pr-0 lg:pr-0.5"/>
                        Galería
                    </Button>
                </NavbarItem>
                <NavbarItem className="mr-0 lg:mr-3">
                    <Button
                        disableRipple
                        className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-base lg:text-lg xl:text-xl ${navbarState === 'contact' && 'text-[#D6AE67]'}`}
                        variant="light"
                        onClick={() => {handleButtonClick('contact')
                        navigate('/contacto')}}
                    >
                        <FontAwesomeIcon icon={faComment} className="pr-0 lg:pr-0.5"/>
                        Contacto
                    </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify='end'>
                <NavbarBrand className="justify-end sm:justify-center">
                    <DarkMode />
                </NavbarBrand>
            </NavbarContent>

            <NavbarMenuMobile navbarState={navbarState} handleButtonClick={handleButtonClick} setIsMenuOpen={setIsMenuOpen} />

        </Navbar>
    )
}