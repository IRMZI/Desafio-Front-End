import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlist from "../Components/Userlist/Userlist";
import RegisterPage from "../Components/Registerpage/RegisterPage";
import LoginPage from "../Components/Loginpage/LoginPage";
const  Private = ({ Item }) => {
    const logged = false;

    return logged > 0 ? <Item /> : <LoginPage />;
};

const RoutesApp = () => {
    return(
    <BrowserRouter>
    <Fragment>
            <Routes>
                <Route exact path="/userlist" element={<Private Item={Userlist} />} />
                <Route path="/" element={<LoginPage />} /> 
                <Route exact path="/registerpage" element={<RegisterPage/>} />
                <Route path="*" element={<LoginPage />} />
    </Routes>
    </Fragment>
    </BrowserRouter>
    );
};


export default RoutesApp;