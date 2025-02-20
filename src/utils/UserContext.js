import { createContext } from "react";

const UserContext = createContext({
    loggedUser : "Guest User"
})

export default UserContext;