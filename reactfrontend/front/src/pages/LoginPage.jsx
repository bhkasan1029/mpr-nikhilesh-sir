import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({ username: "", password: "", cpassword: "" });


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = isLogin ? "http://localhost:8080/login" : "http://localhost:8080/signup";

        if (!isLogin && formData.password !== formData.cpassword) {
            alert("Passwords do not match!");
            return; // stop submission
        }


        try {
            console.log("im here")
            const res = await fetch(endpoint, {
                method: "POST", // normal post request 
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),//sends data json ke form mein
            });

            console.log("kya response printing", res);

            const data = await res.json(); // converts json to js object await fun

            if (!res.ok) {
                alert(data.message);
            } else {
                alert(data.message);
                if (!isLogin) setIsLogin(true); // switch to login after signup is suucessfukl
            }
        } catch (err) {
            console.error(err);
            alert("Something went wrong.");
        }
    };




    return (
        <>
            <header>
                <h1>CampusX</h1>
                <nav>
                    <a href="../home">Home</a>
                    <a href="../about">About</a>
                    <a href="../login">Login</a>
                    <a href="../events">Events</a>
                    <a href="../contact">Contact</a>
                </nav>
            </header>
            <div>
                <div className="container">
                    <h2>{isLogin ? "LOGIN" : "SIGN UP"}</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className="input-field"
                            placeholder="Username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="password"
                            className="input-field"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {!isLogin && (
                            <input
                                type="password"
                                className="input-field"
                                name="cpassword"
                                placeholder="Confirm Password"
                                value={formData.cpassword}
                                onChange={handleChange}
                                required
                            />
                        )}
                        <button type="submit" className="btn">
                            {isLogin ? "LOGIN" : "CREATE ACCOUNT"}
                        </button>
                    </form>

                    <p>
                        {isLogin ? "New user?" : "Already a user?"}{" "}
                        <a onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Sign Up" : "Login"}
                        </a>
                    </p>
                </div>
            </div>
        </>
    );
}
