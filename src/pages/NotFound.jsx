import { NavLink } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
    return (
        <section className="not-found-page">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Page Not Found</h2>
                <p className="not-found-text">
                    Sorry, the page you're looking for doesn't exist or has been moved.
                </p>
                <NavLink to="/" className="not-found-btn">
                    Back to Home
                </NavLink>
            </div>
        </section>
    );
}
