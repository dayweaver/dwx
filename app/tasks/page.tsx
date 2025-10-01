type Task = { id: number; title: string; status: "✅" | "⏳" | "❌"; };

const demo: Task[] = [
  { id: 1, title: "שיחת תכנון יומית", status: "✅" },
  { id: 2, title: "כתיבת BRD ל-DayWeaverX", status: "⏳" },
  { id: 3, title: "בדיקת אינטגרציית Google Sheets", status: "❌" },
];

export default function TasksPage() {
  return (
    <section>
      <h1 style={{marginTop:0}}>לוח משימות</h1>
      <div style={{display:"grid", gap:12}}>
        {demo.map(t => (
          <div key={t.id} style={{display:"flex", justifyContent:"space-between", padding:"12px 14px", border:"1px solid #eee", borderRadius:8}}>
            <span>{t.title}</span>
            <span style={{fontSize:20}}>{t.status}</span>
          </div>
        ))}
      </div>
      <p style={{opacity:.7, marginTop:16}}>זהו נתון הדגמה סטטי — נחליף לחיבור Google Sheets בהמשך.</p>
    </section>
  );
}
