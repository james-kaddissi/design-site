import Light from "./Light.jsx";

export default function App() {
  return (
    <>
      <Light />
      <section
        style={{
          background: "var(--bg-lit)",
          textAlign: "center",
          fontSize: "2rem",
          padding: "2rem",
        }}
      >
        <div>Welcome to our Senior Design</div>
        <div>Matthew Ray Aayush James Joshua</div>
      </section>
    </>
  );
}
