import { useContext } from "react";
import { AutContext } from "../Context/autenticador";

const useAut = () => {
    const context = useContext(AutContext);

    return context;
}

export default useAut;