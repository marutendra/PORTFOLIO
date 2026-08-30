export default function SectionHeading({ label, title, copy }) {
  return (
    <div>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}
