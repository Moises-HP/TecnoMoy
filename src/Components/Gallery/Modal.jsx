import ModalImage from "react-modal-image";

export const Modal = ({title, imageUrl}) => {
  return (
    <ModalImage
        small={imageUrl}
        large={imageUrl}
        alt={title}
        showRotate
        imageBackgroundColor="none"
        className="z-0 transition-transform duration-300 transform hover:scale-125"
    />
  )
}
