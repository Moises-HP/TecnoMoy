export const getNavbarState = () => {
    const storedState = localStorage.getItem('navbarState');
    return storedState ? JSON.parse(storedState) : null;
};