import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ROUTES } from './constants';
import NotFound from 'NotFound';
import './App.css';

function App() {
    return (
        <>
            <ToastContainer />
            <Router>
                <Routes>
                    {ROUTES.map((route) => (
                        <Route path={route.path} element={route.element} />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
