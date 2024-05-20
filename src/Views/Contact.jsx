import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card"
import { useTheme } from "next-themes";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { Button, Input, Textarea } from "@nextui-org/react";
import { MailIcon } from "../assets/MailIcon.jsx"
import { UserIcon } from "../assets/UserIcon.jsx"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const { theme } = useTheme();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (value) => {
    setName(value);
  };
  const handleEmailChange = (value) => {
    setEmail(value);
  };
  const handleMessageChange = (value) => {
    setMessage(value);
  };

  const handleSubmit = () => {
    if (!name.trim()) {
      toast.error('El nombre es requerido');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Ingresa un correo electrónico válido');
      return;
    }
    if (!message.trim()) {
      toast.error('El mensaje es requerido');
      return;
    }
    console.log({'Nombre': name, 'Correo': email, 'Message': message});
    toast.success('Mensaje enviado correctamente');
  };

  return (
    <>
      <div className="design-1div">
          <div className="design-2div"></div>
              <div className="design-3div">
                  <svg className="design-svg" fill={`${theme === 'light'?'white':'#161616'}`} viewBox="0 0 1000 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                      <path className="design-pathSvg" d="M500,97C126.7,96.3,0.8,19.8,0,0v100l1000,0V1C1000,19.4,873.3,97.8,500,97z"/>
                  </svg>
              </div>
          <div className="design-4div bottom-[50%]">
              <h2 className="ourService-h2 text-[25px] sm:text-[37px] md:text-[45px] leading-7 md:leading-8">Contacto</h2>
          </div>
      </div>

      <div className="mx-8 pt-10 grid grid-cols-12 gap-4 animate-fade-left animation-once animation-duration-2000 animation-ease-linear">
        <div className="col-span-12 lg:col-span-6 text-center">
            <h3 className="font-bold text-primary-500 text-[30px] md:text-[33px] ">Información del contacto</h3>
            <div className="grid grid-cols-12 gap-4">
            <div className="col-span-6">
                    <Card className="py-7 mt-8 contact-card">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <span className="text-[#fff] p-4 md:p-5 bg-[#D36E00FF] rounded-full mb-4"><FontAwesomeIcon icon={faEnvelope} className="text-[30px] md:text-[35px]"/></span>
                            <h3 className="font-bold text-[20px] md:text-[23px] mb-8 text-primary-500">Correo</h3>
                            <p className="mb-8 md:mb-11 text-[12px] md:text-[16px]">info@igrtec.com</p>
                        </CardHeader>
                    </Card>
                </div>
                <div className="col-span-6">
                    <Card className="py-7 mt-8 contact-card">
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                            <span className="text-[#fff] p-4 md:p-5 bg-[#D36E00FF] rounded-full mb-4"><FontAwesomeIcon icon={faPhone} className="text-[30px] md:text-[35px]"/></span>
                            <h3 className="font-bold text-[20px] md:text-[23px] mb-8 text-primary-500">Teléfono</h3>
                            <p className="mb-8 md:mb-11 text-[12px] md:text-[16px]">+52 442 645 7154</p>
                        </CardHeader>
                    </Card>
                </div>
            </div>
        </div>
        <div className="col-span-12 lg:col-span-6 text-center animate-fade-left animation-once animation-duration-2000 animation-ease-linear">
        <Card className="py-4 mt-8">
          <CardBody className="px-5">
            <Input
              autoFocus
              label="Nombre"
              placeholder="Introduce tu nombre"
              variant="bordered"
              className="mb-4"
              value={name}
              onValueChange={handleNameChange}
              endContent={
                <UserIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
              }
            />
            <Input
              label="Correo"
              placeholder="Introduce tu correo"
              variant="bordered"
              className="mb-4"
              value={email}
              onValueChange={handleEmailChange}
              endContent={
                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0"/>
              }
            />
            <Textarea
              variant="bordered"
              label="Agrega un Mensaje"
              placeholder="Agrega un Mensaje"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
              value={message}
              onValueChange={handleMessageChange}
            />
          </CardBody>
          <CardFooter className="justify-center">
            <Button color="primary" onClick={handleSubmit}>
              <p className="text-[12px] md:text-[16px]">Enviar</p>
            </Button>
          </CardFooter>
        </Card>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </>
  )
}
