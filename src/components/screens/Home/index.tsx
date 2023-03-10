import { useNavigate } from 'react-router-dom';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import ButtonWithIcon from '~components/ButtonWithIcon';
import ContentContainer from '~components/ContentContainer';

function Home() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/login');
    };
    return (
        <ContentContainer centerContent>
            <h1>Es necesario estar logeado para ver esta página</h1>
            <ButtonWithIcon
                className="mt-5"
                label="Iniciar sesión"
                icon={faDoorOpen}
                onClick={handleRedirect}
            />
        </ContentContainer>
    );
}

export default Home;
