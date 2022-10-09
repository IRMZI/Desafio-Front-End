import { createContext, useEffect, useState  } from "react";

export const AutContext = createContext({});     

export const AutProvider = ({ children }) => {  
    const [user, setUser] = useState();         

    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const userStorage = localStorage.getItem("users_bd");
    
        if (userToken && userStorage) {
          const temUser = JSON.parse(userStorage)?.filter(
            (user) => user.email === JSON.parse(userToken).email
          );
    
          if (temUser) setUser(temUser[0]);
        }
      }, []);
    
    const signin = (email, password) => {

            const userStorage = JSON.parse(localStorage.getItem("users_bd"));

            const temUser = userStorage?.filter((user) => user.email === email);

            if (temUser?.length) {
              if (temUser[0].email === email && temUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, password });
                return; 
              } else {
                return "Usuário não cadastrado";
              }
            } else {
              return "E-mail ou senha incorretos";
            }
          }

      const signup = (email, password) => {
      const userStorage = JSON.parse(localStorage.getItem("users_bd"));

      const temUser = userStorage?.filter((user) => user.email === email);

      if (temUser?.length) {
        return "Já tem uma conta com esse E-mail";
      }

      let newUser;

      if (userStorage) {
        newUser = [...userStorage, { email, password }];
      } else {
        newUser = [{ email, password }];
      }

      localStorage.setItem("users_bd", JSON.stringify(newUser));

      return;
    };

    const signout = () => {
      setUser(null);
      localStorage.removeItem("user_token");
    };

    return (
      <AutContext.Provider
        value={{ user, logged: !!user, signin, signup, signout }}
      >
        {children}
      </AutContext.Provider>
    );
  }
