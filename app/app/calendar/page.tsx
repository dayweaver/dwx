const days = ["א׳","ב׳","ג׳","ד׳","ה׳","ו׳","ש׳"];

export default function CalendarPage() {
  return (
    <section>
      <h1 style={{marginTop:0}}>יומן שבועי (דמו)</h1>
      <div style={{display:"grid", gridTemplateColumns:"repeat(7, 1fr)", gap:10}}>
        {days.map(d => (
          <div key={d} style={{border:"1px solid #eee", borderRadius:8, padding:10, minHeight:160}}>
            <strong>{d}</strong>
            <ul style={{marginTop:8, paddingInlineStart:18}}>
              <li>09:00 – סטנדאפ</li>
              <li>13:00 – עבודה מרוכזת</li>
            </ul>
          </div>
        ))}
      </div>
      <p style={{opacity:.7, marginTop:16}}>תצוגת דמו. נחליף למקור נתונים מגוגל קלנדר/שיטס.</p>
    </section>
  );
}
