import ImageError from '../assets/ImageError.svg'
import {Link} from "react-router-dom";

export const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <img src={ImageError} alt="" className="w-96 object-cover md:w-[500px] xl:w-[600px]" />
            <h1 className='text-4xl font-bold text-[#D6AE67]'>Error 404</h1>
            <p className='mt-4 text-center'>¡Ops! Al parecer la página que estás buscando no existe.</p>
            <div className='mt-2 flex flex-col sm:flex sm:flex-row'>
                <Link to='/' className='underline mb-4 text-primary-500'>Regresar</Link>
            </div>
        </div>
    )
}