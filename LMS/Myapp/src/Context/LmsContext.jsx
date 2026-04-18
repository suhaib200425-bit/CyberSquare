import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { MeApi } from "../assets/Api";

const LMScontext = createContext();

function LMSProvider({ children }) {
    const [DashboardMenu, setDashboardMenu] = useState('Dashboard');
    const token = localStorage.getItem('token')
    console.log(token);
    
    const [User, setUser] = useState(null)
    const UserLogedStatus = async () => {
        try {
            const response = await axios.get(
                MeApi,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log(response.data);
            return {
                status: true,
                user: response.data
            }
        } catch (error) {
            console.log(error.response?.data || error.message);
            return {
                status: false,
                error: error.response.data
            }
        }
    }

    useEffect(() => {
        Promise.all([UserLogedStatus()]).then((result) => {
            console.log('uselm');
            console.log(result);
            
            if (result[0].status) {

                setUser(result[0].user)
            }
        })
    },[])


    return (
        <LMScontext.Provider value={{
            DashboardMenu,
            setDashboardMenu,
            setUser,
            User,
            // USER LOGED STATUS FUNCTION 
            UserLogedStatus
        }}>
            {children}
        </LMScontext.Provider>
    );
}
const useLMS = () => {
    const context = useContext(LMScontext)
    return context
}
export {
    useLMS,
    LMSProvider
};

