import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { ROUTES } from './constants';
import NotFound from './NotFound';

import NavBar from '~components/NavBar';
import { ContentProvider } from '~context/contentContext/contentContext';

function App() {
    return (
        <ContentProvider>
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
        </ContentProvider>
    );
}

export default App;
