import { NavLink } from "react-router-dom";
import { blogs } from "../data/blogData";
import "./Blog.css";

export default function Blog() {
  return (
    <section className="blog-page">
      <div className="blog-container">
        <div className="blog-header">
          <h1>Our Blog</h1>
          <p>
            Insights, expertise, and industry knowledge from Setsquare Construction.
          </p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <NavLink
              key={blog.id}
              to={`/blog/${blog.id}`}
              className="blog-card"
            >
              <div className="blog-image">
                <img
                  src={blog.image}
                  alt={blog.title}
                  onError={(e) => e.target.src = '/project-type-2.png'}
                />
              </div>

              <div className="blog-content">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-excerpt">{blog.excerpt}</p>

                <div className="blog-footer">
                  <div className="blog-tags">
                    {blog.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="blog-tag">{tag}</span>
                    ))}
                  </div>
                  <div className="blog-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
