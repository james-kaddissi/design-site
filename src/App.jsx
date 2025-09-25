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
        <div style={{ 
          fontSize: "60px",
          paddingTop: "50px",
          paddingBottom: "20px"
        }}>Our Mission</div>
        <div style={{
          marginBottom: "100px"
        }}>To create a smart tracking system for surgical lights.</div>
      </section>
    </>
  );
}
