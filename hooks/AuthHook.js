import React, { useState, useEffect, useContext, createContext } from "react";
import { backend_link, signin_link, signup_link } from "../links";

const authContext = createContext()

export const useAuth = () => {
    return useContext(authContext)
}

export const AuthProvider = ({children}) =>{

    const auth = useAuthProvider()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuthProvider = () => {

    const [user, setUser] = useState({something:'test'})

    const signin = async (email, password) => {

        const url = `${backend_link}${signin_link}`
        const data = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        })

        if (data) {
            const user = await data.json().user
        }
        else {
            setUser(false)
        }
        if (user) {
            setUser(user)
        }
        else {
            setUser(false)
        }
    }

    const signup = async (email, password) => {

        const url = `${backend_link}${signup_link}`
        const data = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    email: email,
                    password: password
                }
            )
        })

        if (data) {
            const user = await data.json().user
        }
        else {
            setUser(false)
        }
        if (user) {
            setUser(user)
        }
        else {
            setUser(false)
        }
    }

    const signout = () => {
        setUser(false)
    }

    return {
        user,
        signin,
        signup,
        signout
    }

}