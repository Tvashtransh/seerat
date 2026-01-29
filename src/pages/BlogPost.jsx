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
            <header className="blog-post-header">
                <div className="blog-container">
                    {/* Category */}
                    <span className="blog-category">{blog.category || "Client story"}</span>

                    {/* Title */}
                    <h1 className="blog-title">{blog.title}</h1>

                    {/* Subtitle */}
                    <p className="blog-subtitle">
                        {blog.subtitle || "Our client, a large global bank, was faced with the challenge of complying with Covid-19 health & safety standards while still optimizing operations and saving costs."}
                    </p>

                    {/* Tags */}
                    <div className="blog-tags">
                        {blog.tags && blog.tags.map((tag, index) => (
                            <span key={index} className="blog-tag">{tag}</span>
                        ))}
                    </div>

                    {/* Meta Divider */}
                    <div className="blog-meta-divider"></div>

                    {/* Meta Info */}
                    <div className="blog-meta-row">
                        <div className="blog-meta-left">
                            <div className="meta-item">
                                <svg className="meta-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span>Listen to article</span>
                            </div>
                            <div className="meta-bullet">•</div>
                            <div className="meta-item">
                                <span>Read time: {blog.readTime || "2.7"} min</span>
                            </div>
                        </div>

                        <div className="blog-meta-right">
                            <button className="share-btn">
                                Share
                                <svg className="share-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" width="18" height="18">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                                </svg>
                            </button>
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
                        <img src={blog.image} alt={blog.title} onError={(e) => e.target.src = '/project-type-1.png'} />
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
