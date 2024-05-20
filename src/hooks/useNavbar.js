import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { onChangeButton } from '../Features/NavbarSlice.js';
import { getNavbarState } from '../helpers/getNavbarState.js'


export const UseNavbar = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.navbar)
    const storedState = getNavbarState();

    const initialNavbarState = storedState || status;
    const [navbarState, setNavbarState] = useState(initialNavbarState);

    useEffect(() => {
        dispatch(onChangeButton(navbarState));
        localStorage.setItem('navbarState', JSON.stringify(navbarState));
    }, [navbarState, dispatch]);

    const handleButtonClick = (button) => {
        setNavbarState(button);
    };

    return {
        navbarState,
        handleButtonClick,
    };
};