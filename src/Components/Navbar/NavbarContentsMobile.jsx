import { Link } from "react-router-dom"
import {NavbarBrand, NavbarContent, NavbarMenuToggle} from "@nextui-org/navbar";

export const NavbarContentsMobile = ({handleButtonClick, setIsMenuOpen}) => {
  return (
    <>
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle />
        </NavbarContent>

        <NavbarContent justify='center' className="sm:hidden">
            <NavbarBrand className="justify-center">
                <Link className="flex items-center" to="/" onClick={() => {handleButtonClick('us')
                    setIsMenuOpen(false)}} >
                    <p className="font-bold text-[16px] titleNav-text">TecnoMoy</p>
                </Link>
            </NavbarBrand>
        </NavbarContent>
    </>
  )
}
