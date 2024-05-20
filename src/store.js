import {configureStore} from "@reduxjs/toolkit"
import NavbarSlice from "./Features/NavbarSlice.js"

export default configureStore({
    reducer: {
        navbar: NavbarSlice,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})