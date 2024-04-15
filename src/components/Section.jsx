export default function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>Title</h2>
      {children}
    </section>
  );
}
