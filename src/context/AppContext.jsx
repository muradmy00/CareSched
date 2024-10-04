import { createContext } from "react";

import { doctors } from "../assets/assets";

// create app context
export const AppContext = createContext()

// context provider function
const AppContextProvider = (props) => {


    const currency = '৳';


    // variable  in Object  (access any components)
    const value = {
        doctors,
        currency
    }


    return(
        <AppContext.Provider value={value}>
           {props.children} 
        </AppContext.Provider>
    )

}

export default AppContextProvider