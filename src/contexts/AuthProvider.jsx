import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {

    const userInfo = {
        name: 'alamintanvir25@gmail.com',
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
       
    );
};

export default AuthProvider;