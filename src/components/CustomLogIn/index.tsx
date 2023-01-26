import styles from './styles.module.scss';

function CustomLogIn() {
    return (
        <div className={styles.logContainer}>
            <form className={styles.logForm}>
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
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CustomLogIn;
