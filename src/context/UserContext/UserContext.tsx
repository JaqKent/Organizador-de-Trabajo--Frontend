/* eslint-disable react/jsx-no-constructed-context-values */
import {
    createContext,
    Dispatch,
    ReactNode,
    SetStateAction,
    useState,
} from 'react';

const initialState: {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
} = {
    isLoggedIn: false,
    setIsLoggedIn: () => {},
};

const UserContext = createContext(initialState);

interface Props {
    children: ReactNode;
}

export function UserProvider({ children }: Props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
