import { useNavigate } from 'react-router-dom';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import ContentContainer from '~components/ContentContainer';

function Logout() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className={styles.logContainer}>
            <ContentContainer centerContent outerPadding={5}>
                <h1>Has cerrado sesión</h1>
                <ButtonWithIcon
                    className="mt-5"
                    label="Volver a la pagina principal"
                    icon={faDoorOpen}
                    onClick={handleRedirect}
                />
            </ContentContainer>
        </div>
    );
}

export default Logout;
