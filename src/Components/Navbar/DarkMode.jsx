import {useEffect, useState} from "react";

import {useTheme} from "next-themes";
import {Button} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export const DarkMode = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) return null;

  return (
    <div className='flex items-center'>
      <Button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        isIconOnly
        className='mr-0 sm:mr-6 md:mr-0 lg:p-6'
      >
        {theme === 'dark'
          ? <FontAwesomeIcon className="text-[16px] lg:text-[18px]" icon={faSun} />
          : <FontAwesomeIcon className="text-[16px] lg:text-[18px]" icon={faMoon} />
        }
      </Button>
    </div>
  )
}