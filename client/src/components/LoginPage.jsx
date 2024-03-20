import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    async function handleLoginSubmit(ev) {
        ev.preventDefault();
        try {
            await axios.post("/login", {email, password})
            alert("Login successful!");
            setRedirect(true);
        }   catch (e) {
            alert("Login failed!"); 
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />;
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
            <h1 className="text-4xl text-center mb-4" onSubmit={handleLoginSubmit}>Login</h1>
            <form className="max-w-md mx-auto">
                <input type="email" placeholder="your@email.com" value={email} onChange={ev => setEmail(ev.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={ev => setPassword(ev.target.value)}/>
                <button className="primary">Login</button>
                <div className="text-center py-2 text-gray-500">Not yet Registered? <Link className="underline text-black" to={"/register"}>Register Now</Link></div>
            </form>
            </div>
        </div>
    );
}