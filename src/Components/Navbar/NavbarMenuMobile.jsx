import { useNavigate } from "react-router-dom"
import { NavbarItem, NavbarMenu,NavbarMenuItem} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faComment, faHandshake, faUsersViewfinder, faImages } from "@fortawesome/free-solid-svg-icons"

export const NavbarMenuMobile = ({ navbarState, handleButtonClick, setIsMenuOpen }) => {
    const navigate = useNavigate();

    return (
        <NavbarMenu>
            <NavbarMenuItem className="mr-3">
                <Button
                    disableRipple
                    className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-xl ${navbarState === 'us' && 'text-[#D6AE67]'}`}
                    variant="light"
                    onClick={() => {handleButtonClick('us')
                    navigate('/')
                    setIsMenuOpen(false)}}
                >
                    <FontAwesomeIcon icon={faUsers} className="pr-1"/>
                    Nosotros
                </Button>
            </NavbarMenuItem>
            <NavbarMenuItem >
                <Button
                    disableRipple
                    className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-xl ${navbarState === 'ourServices' && 'text-[#D6AE67]'}`}
                    variant="light"
                    onClick={() => {handleButtonClick('ourServices')
                    navigate('/nuestros-servicios')
                    setIsMenuOpen(false)}}
                >
                    <FontAwesomeIcon icon={faHandshake} className="pr-1"/>
                    Nuestros Servicios
                </Button>
            </NavbarMenuItem>
            <NavbarMenuItem >
                <Button
                    disableRipple
                    className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-xl ${navbarState === 'ourClients' && 'text-[#D6AE67]'}`}
                    variant="light"
                    onClick={() => {handleButtonClick('ourClients')
                    navigate('/nuestros-clientes')
                    setIsMenuOpen(false)}}
                >
                    <FontAwesomeIcon icon={faUsersViewfinder} className="pr-1"/>
                    Nuestros Clientes
                </Button>
            </NavbarMenuItem>
            <NavbarMenuItem >
                <Button
                    disableRipple
                    className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-xl ${navbarState === 'gallery' && 'text-[#D6AE67]'}`}
                    variant="light"
                    onClick={() => {handleButtonClick('gallery')
                    navigate('/galeria')
                    setIsMenuOpen(false)}}
                >
                    <FontAwesomeIcon icon={faImages} className="pr-1"/>
                    Galería
                </Button>
            </NavbarMenuItem>
            <NavbarItem >
                <Button
                    disableRipple
                    className={`p-0 bg-transparent data-[hover=true]:bg-transparent text-primary-500 hover:text-[#D6AE67] text-xl ${navbarState === 'contact' && 'text-[#D6AE67]'}`}
                    variant="light"
                    onClick={() => {handleButtonClick('contact')
                    navigate('/contacto')
                    setIsMenuOpen(false)}}
                >
                    <FontAwesomeIcon icon={faComment} className="pr-1"/>
                    Contacto
                </Button>
            </NavbarItem>
        </NavbarMenu>
    )
}
