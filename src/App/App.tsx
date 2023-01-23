import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ROUTES } from './constants';

import NavBar from '~components/NavBar';

function App() {
    return (
        <>
            <ToastContainer />
            <NavBar />
            <Router>
                <Routes>
                    {ROUTES.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                </Routes>
            </Router>
        </>
    );
}

export default App;
