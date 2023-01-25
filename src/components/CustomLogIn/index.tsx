function CustomLogIn() {
    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
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
                        />Password</label>
                        
                    </div>
                    <div className="d-grid gap-2 mt-3">
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
