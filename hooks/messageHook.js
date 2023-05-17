const { useState, createContext } = require("react")

const [message,setMessage] = useState({})

const messageContext = createContext()