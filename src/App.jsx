import Light from "./Light.jsx";

export default function App() {
  return (
    <>
      <Light />
      <section
        id="mission"
        style={{
          background: "#dededeff",
          textAlign: "center",
          fontSize: "2rem",
          padding: "2rem",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            paddingTop: "50px",
            paddingBottom: "20px",
          }}
        >
          Our Mission
        </div>
        <div
          style={{
            marginBottom: "100px",
          }}
        >
          To create a smart tracking system for surgical lights.
        </div>
      </section>

      <section
        id="team"
        style={{
          background: "#f8f9fa",
          textAlign: "center",
          fontSize: "2rem",
          padding: "4rem 2rem",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            fontSize: "60px",
            paddingBottom: "40px",
            color: "#2c3e50",
          }}
        >
          Meet Our Team
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            flexWrap: "wrap",
            rowGap: "2rem",
            marginTop: "2rem",
            width: "100%",
          }}
        >
          {[
            { name: "Matthew", desc: "Senior | Computer Engineering" },
            { name: "Ray", desc: "Senior | Optical Engineering" },
            { name: "Aayush", desc: "Senior | Computer Engineering" },
            { name: "James", desc: "Senior | Computer Engineering" },
            { name: "Joshua", desc: "Senior | Computer Engineering" },
          ].map((m) => (
            <div
              key={m.name}
              style={{
                minWidth: "140px",
                maxWidth: "220px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              <div style={{ fontWeight: 700 }}>{m.name}</div>
              <div
                style={{
                  fontSize: "1rem",
                  color: "#6c757d",
                  letterSpacing: "0.02em",
                  lineHeight: 1.2,
                }}
              >
                {m.desc}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: "9rem",
            textAlign: "center",
          }}
        >
          <div style={{ fontWeight: 700 }}>Professor Kevin Lu</div>
          <div
            style={{
              fontSize: "1rem",
              color: "#6c757d",
              marginTop: "0.25rem",
              letterSpacing: "0.02em",
            }}
          >
            Advisor
          </div>
        </div>
      </section>

      <section id="timeline" className="timeline-wrap">
        <div className="timeline-title">Project Timeline</div>
        <div className="timeline-sub">
          Key milestones and development phases of our smart surgical lighting system.
        </div>

        {(() => {
          const items = [
            { date: "Oct 2025", title: "Tracking Mount Finished", desc: "Finish the prototype mount and program the actuators to work with the trained model." },
            { date: "Nov 2025", title: "Lighting Array Finished", desc: "Add the lighting array and integrate lighting tracking." },
            { date: "Dec 2025", title: "Finish Initial Prototype", desc: "Complete the initial prototype and test all components." },
            { date: "Jan 2026...", title: "Second Design", desc: "Expand the original design and add more features." },
          ];

          return (
            <div className="timeline">
              <div className="timeline-track">
                {items.map((it, i) => (
                  <div className="timeline-item" key={it.date + i}>
                    <div className="timeline-card">
                      <div className="timeline-date">{it.date}</div>
                      <div style={{ fontWeight: 700, marginBottom: 6 }}>{it.title}</div>
                      <div className="timeline-desc">{it.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })()}
      </section>
    </>
  );
}
