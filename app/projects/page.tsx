type Item = { id: number; title: string; tag: string; owner: string; progress: number; };

const backlog: Item[] = [
  { id: 1, title: "MVP – טבלת משימות", tag: "core", owner: "Shachar", progress: 70 },
  { id: 2, title: "UI – לוח שבועי", tag: "ui", owner: "Shachar", progress: 40 },
  { id: 3, title: "Sync – Google Sheets", tag: "integrations", owner: "Shachar", progress: 10 },
];

export default function ProjectsPage() {
  return (
    <section>
      <h1 style={{marginTop:0}}>פרויקט: DayWeaverX</h1>
      <div style={{display:"grid", gap:12}}>
        {backlog.map(it => (
          <div key={it.id} style={{border:"1px solid #eee", borderRadius:8, padding:12}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <strong>{it.title}</strong>
              <span style={{opacity:.7}}>Owner: {it.owner}</span>
            </div>
            <div style={{opacity:.8, marginTop:4}}>Tag: {it.tag}</div>
            <div style={{height:8, background:"#eee", borderRadius:6, marginTop:10}}>
              <div style={{width:`${it.progress}%`, height:"100%", background:"#111", borderRadius:6}} />
            </div>
          </div>
        ))}
      </div>
      <p style={{opacity:.7, marginTop:16}}>דמו להצגת פרויקטים/אפיקים. בהמשך נחבר ל־Sheets.</p>
    </section>
  );
}
