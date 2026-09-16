// Cover details that differ per variant (kept internal — not part of the props API)
const COVERS = {
  html: {
    label: "HTML lesson cover",
    word: "HTML",
    wordClass: "cover-word gradient-html",
    bars: ["bar-teal", "bar-pink", "bar-violet"],
    ghost: "</>",
    code: (
      <>
        <span className="tok-tag">{"<div"}</span>{" "}
        <span className="tok-attr">class</span>=<span className="tok-str">"container"</span>
        <span className="tok-tag">{">"}</span>
        {"\n  "}
        <span className="tok-tag">{"<h1>"}</span>Lesson Title<span className="tok-tag">{"</h1>"}</span>
        {"\n  "}
        <span className="tok-tag">{"<p>"}</span>Learn to code<span className="tok-tag">{"</p>"}</span>
        {"\n"}
        <span className="tok-tag">{"</div>"}</span>
      </>
    ),
  },
  css: {
    label: "CSS lesson cover",
    word: "CSS",
    wordClass: "cover-word",
    bars: ["bar-blue", "bar-violet", "bar-cyan"],
    ghost: "{ }",
    code: (
      <>
        <span className="tok-sel">.box</span> <span className="tok-plain">{"{"}</span>
        {"\n  "}
        <span className="tok-prop">color</span><span className="tok-plain">:</span>{" "}
        <span className="tok-val-green">#fff</span><span className="tok-plain">;</span>
        {"\n  "}
        <span className="tok-prop">display</span><span className="tok-plain">:</span>{" "}
        <span className="tok-val-pink">flex</span><span className="tok-plain">;</span>
        {"\n"}
        <span className="tok-plain">{"}"}</span>
      </>
    ),
  },
};

export default function LessonCard({ title, description, chip, dueDate, variant }) {
  const cover = COVERS[variant];

  return (
    <article className="card">
      <div className={`card-cover cover-${variant}`} role="img" aria-label={cover.label}>
        <div className="cover-title">
          <span className={cover.wordClass}>{cover.word}</span>
          <span className="cover-bars">
            {cover.bars.map((bar) => (
              <i key={bar} className={`bar ${bar}`}></i>
            ))}
          </span>
        </div>
        <div className="code-window">
          <div className="code-window-header">
            <i className="dot dot-red"></i>
            <i className="dot dot-yellow"></i>
            <i className="dot dot-green"></i>
          </div>
          <pre className="code-window-body">
            <code>{cover.code}</code>
          </pre>
        </div>
        <span className="cover-ghost">{cover.ghost}</span>
        <div className={`cover-strip strip-${variant}`}></div>
      </div>
      <div className="card-content">
        <div className="card-info">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-meta">
          <span className="chip">{chip}</span>
          <span className="due-date">{`Due Date: ${dueDate}`}</span>
        </div>
      </div>
    </article>
  );
}
