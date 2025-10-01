export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      gap: "12px",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: 36, margin: 0 }}>Asrego · DayWeaverX</h1>
      <p style={{ opacity: .8, margin: 0 }}>החיבור ל-Vercel פעיל. זהו דף בדיקה ראשוני.</p>
      <a href="https://asrego.com" style={{ textDecoration: "underline" }}>פתח את האתר בדומיין</a>
    </main>
  );
}
