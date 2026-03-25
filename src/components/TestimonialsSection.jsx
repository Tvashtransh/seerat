import React from "react";
import "./TestimonialsSection.css";

const testimonials = [
  {
    id: 1,
    text: "Setsquare Construction's framing precision transformed our multi-family project. Their efficiency and structural integrity are unparalleled in the Lower Mainland.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250",
    name: "Sarah Jenkins",
    role: "Lead Developer",
  },
  {
    id: 2,
    text: "Implementing their prefab solutions accelerated our timeline significantly. The team's craftsmanship and attention to detail exceeded all our expectations.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=250",
    name: "Michael Chen",
    role: "Project Director",
  },
  {
    id: 3,
    text: "The structural framing for our custom timber home was flawless. Setsquare brings true mastery to traditional wood framing and makes it look effortless.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=250",
    name: "Emily Roberts",
    role: "Homeowner",
  },
  {
    id: 4,
    text: "Professional, reliable, and highly skilled. Their team consistently delivers high-quality framing for our commercial and residential developments across BC.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250",
    name: "David Thompson",
    role: "Commercial Builder",
  },
  {
    id: 5,
    text: "Setsquare's commitment to safety and modern engineering makes them our go-to partner for all large-scale structural projects.",
    image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=250",
    name: "Jessica Wong",
    role: "Operations Manager",
  },
  {
    id: 6,
    text: "From drafting to the final touches, their structural expertise ensured our 50-unit townhome complex was built to perfection without any delays.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=250",
    name: "Robert MacIntyre",
    role: "Senior Architect",
  },
  {
    id: 7,
    text: "Their precision framing perfectly aligned with our modern design requirements. A truly collaborative and professional construction partner.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250",
    name: "Andrew Clarke",
    role: "Principal Architect",
  },
  {
    id: 8,
    text: "They delivered the community infrastructure exactly on schedule. A dependable team that understands the complexities of building codes.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250",
    name: "Maria Fernandez",
    role: "Urban Planner",
  },
  {
    id: 9,
    text: "The attention to detail in their timber framing is outstanding. Setsquare Construction is synonymous with quality and reliability in the industry.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250",
    name: "James Wilson",
    role: "Custom Home Builder",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialCard = ({ quote }) => (
  <div className="testimonial-card">
    <p className="testimonial-text">{quote.text}</p>
    <div className="testimonial-author">
      <img src={quote.image} alt={quote.name} className="testimonial-avatar" />
      <div className="testimonial-meta">
        <div className="testimonial-name">{quote.name}</div>
        <div className="testimonial-role">{quote.role}</div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-header">
        <span className="testimonials-badge">Testimonials</span>
        <h2 className="testimonials-title">What our partners say</h2>
        <p className="testimonials-subtitle">
          See the impact of true craftsmanship across British Columbia's largest developments.
        </p>
      </div>

      <div className="testimonials-marquee-wrapper">
        {/* Column 1 */}
        <div className="testimonials-column staggered-1">
          {/* Duplicate contents to seamlessly loop smoothly */}
          {[...firstColumn, ...firstColumn].map((quote, idx) => (
            <TestimonialCard key={`col1-${idx}`} quote={quote} />
          ))}
        </div>

        {/* Column 2 */}
        <div className="testimonials-column reverse staggered-2">
          {[...secondColumn, ...secondColumn].map((quote, idx) => (
            <TestimonialCard key={`col2-${idx}`} quote={quote} />
          ))}
        </div>

        {/* Column 3 */}
        <div className="testimonials-column staggered-3">
          {[...thirdColumn, ...thirdColumn].map((quote, idx) => (
            <TestimonialCard key={`col3-${idx}`} quote={quote} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
