import React from 'react';
import '/Users/benjijackson/cs260/startup/src/app.css';

export function Login() {
  return (
    <main className="container-fluid text-center bg-info">
        <div>
            <h3> J4CK3D Login: </h3>
            <form method="get" action="feed">
                <div className="input-group mb-3">
                    <span className="input-group-text">Username:</span>
                    <input className="form-control" type="text" placeholder="username" />
                </div>
                <div class="input-group mb-3">
                    <span className="input-group-text">Password:</span>
                    <input className="form-control" type="text" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-light">Login</button>
                <button type="submit" className="btn btn-light">New User</button>
            </form>
        </div>
    </main>
  );
}