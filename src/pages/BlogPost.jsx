import React, { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import { blogs } from "../data/blogData";
import "./BlogPost.css";

export default function BlogPost() {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="blog-not-found">
                <h2>Blog post not found</h2>
                <NavLink to="/blog" className="btn-back">Back to Blog</NavLink>
            </div>
        );
    }

    return (
        <article className="blog-post-page">
            {/* Cinematic Hero */}
            <header
                className="page-hero animate-fade-in"
                style={{ backgroundImage: `url(${blog.image})` }}
            >
                <div className="page-hero-content animate-fade-up delay-100">
                    <span className="blog-category" style={{ color: 'var(--accent-color)', fontWeight: '700' }}>{blog.category || "Client story"}</span>
                    <h1 style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 64px)' }}>{blog.title}</h1>
                    <div className="blog-meta-row" style={{ color: 'rgba(255,255,255,0.9)', justifyContent: 'center', gap: '20px' }}>
                        <div className="meta-item">
                            <span>Read time: {blog.readTime || "2.7"} min</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content Layout */}
            <div className="blog-container blog-content-grid">

                {/* Left Sidebar - Sticky Nav */}
                <aside className="blog-sidebar">
                    <nav className="sidebar-nav">
                        {blog.contentSections ? (
                            blog.contentSections.map(section => (
                                <a key={section.id} href={`#${section.id}`} className="sidebar-link">
                                    {section.sidebarTitle || section.title}
                                </a>
                            ))
                        ) : (
                            <>
                                <a href="#content" className="sidebar-link active">Article</a>
                            </>
                        )}
                    </nav>

                    <div className="sidebar-cta">
                        <p>Looking for more insights? Never miss an update.</p>
                    </div>
                </aside>

                {/* Right Content Area */}
                <div className="blog-main-content">

                    {/* Main Hero Image */}
                    <div className="blog-image-hero">
                        <img src={blog.image} alt={blog.title} onError={(e) => e.target.src = '/project-type-2.png'} />
                    </div>

                    {/* Value Highlight Box - Optional */}
                    {blog.highlightBox && (
                        <div className="value-highlight-box">
                            <h2>{blog.highlightTitle || "Value"}</h2>
                            <p>{blog.highlightBox}</p>
                        </div>
                    )}

                    {/* Intro Text - Optional */}
                    {blog.intro && (
                        <section className="content-section">
                            {blog.intro.split('\n\n').map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </section>
                    )}

                    {/* Dynamic Sections */}
                    {blog.contentSections ? (
                        blog.contentSections.map(section => (
                            <section key={section.id} id={section.id} className="content-section">
                                <h2>{section.title}</h2>
                                {section.content.split('\n\n').map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </section>
                        ))
                    ) : (
                        <section id="content" className="content-section">
                            <p>{blog.fullContent || blog.excerpt}</p>
                        </section>
                    )}
                </div>
            </div>
        </article>
    );
}
