import { createContext, useEffect, useState  } from "react";
import { json } from "react-router-dom";

export const AutContext = createContext({});     

export const AutProvider = ({ children }) => {  
    const [user, setUser] = useState();         

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("users_db");
    
        if (userToken && userStorage) {
          const temUser = JSON.parse(userStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
          );
    
          if (temUser) setUser(temUser[0]);
        }
      }, []);
    
      const login = (email, password) => {
        const userStorage = JSON.parse(localStorage.getItem("users_db"));

        const temUser = userStorage = json.parse(localStorage.getItem(users))
      }

return <AutContext.Provider>{children}</AutContext.Provider>;
};