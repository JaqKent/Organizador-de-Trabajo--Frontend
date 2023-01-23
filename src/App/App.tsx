import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ROUTES } from './constants';
import NotFound from './NotFound';

import NavBar from '~components/NavBar';

function App() {
    return (
        <>
            <ToastContainer />
            <Router>
                <NavBar />
                <Routes>
                    {ROUTES.map((route) => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={route.element}
                        />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
