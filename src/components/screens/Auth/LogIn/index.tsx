import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

import ButtonWithIcon from '~components/ButtonWithIcon';
import ContentContainer from '~components/ContentContainer';

function LogIn() {
    return (
        <div className={styles.logContainer}>
            <ContentContainer centerContent outerPadding={5}>
                <form>
                    <div className={styles.logContent}>
                        <h3 className={styles.logTitle}>Sign In</h3>
                        <div className="form-group mt-3">
                            <label htmlFor="email">
                                <input
                                    id="inputid"
                                    type="email"
                                    className="form-control mt-1"
                                    placeholder="Enter email"
                                />
                                Email address
                            </label>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="pass">
                                <input
                                    id="pass"
                                    type="password"
                                    className="form-control mt-1"
                                    placeholder="Enter password"
                                />
                                Password
                            </label>
                        </div>
                        <div className="d-flex mt-3">
                            <ButtonWithIcon
                                className="mt-4"
                                variant="success"
                                type="submit"
                                label="Iniciar Sesión"
                                icon={faDoorOpen}
                            />
                        </div>
                    </div>
                </form>
            </ContentContainer>
        </div>
    );
}

export default LogIn;
