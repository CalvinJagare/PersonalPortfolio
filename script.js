
const PROJECTS = [
  {
    n: "01",
    name: "Snêk — B2B Portal, AI Import Pipeline & Pricing Engine",
    tagline: "Full-stack customer portal with quote flow, Zaver + Scrive, AI-driven data import, and validated pricing",
    blurb: "<span class='pc-em'>B2B Portal</span> — Full-stack customer portal with quote approval workflows, Zaver payment processing, real-time seller collaboration, and Scrive digital contract signing, plus comprehensive order tracking with change-request management.<br><br><span class='pc-em'>AI Import Pipeline</span> — AI-assisted pipeline that imports supplier data (Siemens, Smeg, Bertazzoni) in three phases: LLM tooling for column mapping and categorisation, a local Ollama model (llama3.2) for cost-efficient inference, and fine-tuning on Snêk-specific data via synthetic JSONL. Playwright drives scraping of JS-rendered supplier pages as part of an agentic flow.<br><br><span class='pc-em'>Pricing Engine</span> — Reverse-engineered SMEG's Excel-based pricing flow into a validated formula handling chemicals tax, environmental fee, and discount logic.<br><br><span class='pc-em'>Recommendation System</span> — Appliance recommendation system matching cabinet identifiers to packages via database-driven rules, refactored into a clean N+1-free engine.",
    stack: ["Blazor", "C#", "ASP.NET Core", "REST API", "SQL Server", "Entity Framework", "Zaver API", "Scrive", "LLM tooling", "Ollama", "JSONL", "Playwright"],
    metrics: [{ k: "LLM phases", v: "3" }, { k: "suppliers", v: "3+" }, { k: "integrations", v: "Zaver · Scrive" }],
    arch: "snek",
  },
  {
    n: "02",
    name: "Snêk — Design System & Figma Analysis",
    tagline: "Full design system from Figma — palette, type, components",
    blurb: "Produced a complete design system from Figma files: colour palette (brand burgundy, muted greys), typography (Garamond serif), and component specifications for navigation, buttons, product cards, and order overview. Swedish localisation and responsive behaviour baked into the spec.",
    stack: ["Figma", "Design System", "Blazor"],
    metrics: [{ k: "palette", v: "burgundy" }, { k: "type", v: "Garamond" }, { k: "locale", v: "sv-SE" }],
    arch: "design",
  },
  {
    n: "03",
    name: "KPI Performance Analytics System",
    tagline: "Research-team performance tracking — pipelines + dashboards",
    blurb: "Comprehensive performance-tracking platform for research teams analysing work output, quality metrics, and wellbeing indicators. Built automated data pipelines with Power Automate and created interactive dashboards to identify performance trends and outliers.",
    stack: ["Power BI", "Power Automate", "Azure", "C#", "SQL", "Microsoft Forms"],
    metrics: [{ k: "pipelines", v: "9" }, { k: "dashboards", v: "14" }, { k: "rows/day", v: "210k" }],
    arch: "kpi",
  },
  {
    n: "04",
    name: "Personal Project — Desktop Shell & Portable AI",
    tagline: "Tauri + React + Rust, and a personal portable AI",
    blurb: "An in-progress desktop application built from scratch — a personal sandbox for learning Tauri, wiring up a React/TypeScript frontend to a Rust backend, and getting a real PTY-based terminal running inside a native window. Alongside it, I'm training a personal portable AI — a small model I can carry across devices and run locally. Kept quiet on details; here to flag the stack I'm actively working in.",
    stack: ["Tauri", "React", "TypeScript", "Tailwind", "Rust", "Node PTY", "Fine-tuning", "Local LLMs"],
    metrics: [{ k: "runtime", v: "Tauri" }, { k: "front", v: "React / TS" }, { k: "ai", v: "portable" }],
    arch: "desktop",
  },
  {
    n: "05",
    name: "Two-Points Studios — 2ps.se",
    tagline: "Favour for friends — solo dev on 2ps.se",
    blurb: "Built and deployed 2ps.se solo as a favour for friends running a UF-företag in photography, film, design, and digital marketing. Shipped on GitHub Pages with DNS configured through Loopia.",
    stack: ["HTML/CSS/JS", "GitHub Pages", "Loopia DNS"],
    metrics: [{ k: "role", v: "solo dev" }, { k: "host", v: "GH Pages" }, { k: "dns", v: "Loopia" }],
    arch: "tps",
  },
];

const EXPERIENCE = [
  {
    date: "2024 — present",
    org: "Snêk",
    role: "Full-Stack Developer",
    commits: [
      "built B2B customer portal from zero",
      "owned quote + Zaver payment + Scrive contract flow",
      "AI import pipeline (LLM tooling + Ollama + fine-tune)",
      "PDF catalog parser for supplier data",
      "validated pricing engine + optimiser",
      "appliance recommendation system",
      "design system from Figma",
    ],
  },
  {
    date: "2025",
    org: "Two-Points Studios",
    role: "Solo Dev · Favour for Friends",
    commits: ["shipped 2ps.se end-to-end", "hosted on GitHub Pages", "wired DNS through Loopia"],
  },
  {
    date: "2023 — 2024",
    org: "Luleå tekniska universitet",
    role: "Research / Data Engineering",
    commits: ["KPI analytics platform", "Power Automate pipelines", "outlier-detection dashboards"],
  },
  {
    date: "2023 — 2024",
    org: "AI Factory",
    role: "Data Automation & Hardware",
    commits: ["data-automation pipelines", "Raspberry Pi sensor rigs", "lightweight on-device processing"],
  },
];

const SKILLS = [
  {
    group: "Frontend",
    items: [
      ["Blazor (Server + WASM)", 0.92],
      ["Tauri", 0.68],
      ["React + TypeScript", 0.78],
      ["Tailwind CSS", 0.78],
      ["WPF", 0.80],
      ["WinForms", 0.72],
      ["HTML / CSS / JS", 0.88],
      ["MAUI", 0.60],
      ["Angular", 0.58],
    ],
  },
  {
    group: "Backend",
    items: [
      ["C# / .NET", 0.95],
      ["ASP.NET Core", 0.92],
      ["Entity Framework", 0.88],
      ["REST APIs", 0.90],
      ["SQL Server", 0.85],
      ["SQLite", 0.78],
      ["DevExpress XAF + Reporting", 0.70],
      ["Python", 0.72],
      ["Rust (via Tauri)", 0.55],
      ["Java", 0.60],
    ],
  },
  {
    group: "AI & Data",
    items: [
      ["LLM tooling (Sonnet / Opus / Haiku)", 0.88],
      ["Ollama / local LLMs", 0.78],
      ["Unsloth (fine-tuning)", 0.65],
      ["Fine-tuning (JSONL)", 0.70],
      ["MCP (Model Context Protocol)", 0.74],
      ["Prompt engineering", 0.85],
      ["Playwright (scraping)", 0.80],
      ["Power BI", 0.82],
      ["Power Automate", 0.80],
    ],
  },
  {
    group: "DevOps & Infra",
    items: [
      ["Azure", 0.78],
      ["Git / GitHub", 0.92],
      ["CI / CD", 0.75],
      ["Docker", 0.72],
      ["Unit Testing", 0.80],
      ["WSL / Linux dev", 0.82],
      ["GitHub Pages + custom DNS", 0.85],
      ["Database Design", 0.85],
      ["Algorithm Design", 0.78],
    ],
  },
];

const PROFILE_CODE = [
  `<span class="kw">const</span> <span class="prop">profile</span> = {`,
  `  <span class="prop">name</span>:      <span class="str">"Calvin Jägare"</span>,`,
  `  <span class="prop">role</span>:      <span class="str">"Full-Stack Developer"</span>,`,
  `  <span class="prop">location</span>:  <span class="str">"Sweden"</span>,`,
  `  <span class="prop">passion</span>:   <span class="str">"Turning ideas into reality"</span>,`,
  `  <span class="prop">stack</span>: [<span class="str">"C#"</span>, <span class="str">".NET"</span>, <span class="str">"Blazor"</span>, <span class="str">"React"</span>, <span class="str">"Tauri"</span>],`,
  `  <span class="prop">exploring</span>: [<span class="str">"LLM tooling"</span>, <span class="str">"Ollama"</span>, <span class="str">"Rust"</span>],`,
  `  <span class="prop">cloud</span>:     <span class="str">"Azure"</span>,`,
  `  <span class="prop">available</span>: <span class="kw">true</span>,`,
  `  <span class="prop">coffee</span>:    <span class="num">0.82</span>,`,
  `  <span class="cmt">// loves puzzles — code is the best kind</span>`,
  `};`,
];

const BOOT_LINES = [
  { tag: "OK", msg: "loading profile for Calvin Jägare (uid=1000)" },
  { tag: "OK", msg: "detected 3+ years of experience" },
  { tag: "OK", msg: "indexed 5 shipped projects, more in queue" },
  { tag: "OK", msg: "stack: c#, blazor, react, tauri, azure" },
  { tag: "OK", msg: "ai tooling: llm tooling · ollama · jsonl fine-tune" },
  { tag: "WARN", msg: "found 1 ambitious side project in drafts/" },
  { tag: "OK", msg: "coffee nominal (0.82) — ready." },
];

const SOCKET_LINES = [
  { tag: "INFO", msg: "binding socket on tcp/443 ... done" },
  { tag: "INFO", msg: "TLS handshake complete (TLS 1.3)" },
  { tag: "INFO", msg: "connection established: you → calvin@jagare.se" },
  { tag: "OK", msg: "ready to receive your message." },
];

const bootLog = document.getElementById("boot-log");
const heroName = document.getElementById("hero-name");
const heroSub = document.getElementById("hero-sub");
const NAME_STR = "Calvin Jägare.";

function buildBoot() {
  let i = 0;
  const add = () => {
    if (i >= BOOT_LINES.length) { buildName(); return; }
    const l = BOOT_LINES[i++];
    const ts = (i * 0.04).toFixed(6).padStart(12);
    const col = l.tag === "OK" ? "var(--green)" : l.tag === "WARN" ? "var(--amber)" : "var(--muted)";
    const d = document.createElement("div");
    d.className = "blog-line";
    d.innerHTML = `<span class="bl-ts">[${ts}]</span><span class="bl-ok" style="color:${col};width:46px">[${l.tag.padEnd(4)}]</span><span class="bl-msg">${l.msg}</span>`;
    d.style.opacity = 0;
    bootLog.appendChild(d);
    requestAnimationFrame(() => { d.style.transition = "opacity .25s"; d.style.opacity = 1; });
    setTimeout(add, 160 + Math.random() * 120);
  };
  add();
}

function buildName() {
  heroName.innerHTML = "";
  let i = 0;
  const chars = NAME_STR.split("");
  const add = () => {
    if (i >= chars.length) {
      heroSub.classList.add("on");
      buildCPU();
      return;
    }
    const g = document.createElement("span");
    g.className = "glyph";
    g.textContent = chars[i++] === " " ? " " : chars[i - 1];
    heroName.appendChild(g);
    requestAnimationFrame(() => requestAnimationFrame(() => g.classList.add("on")));
    setTimeout(add, 40 + Math.random() * 30);
  };
  setTimeout(add, 200);
}

function buildCPU() {
  const grid = document.getElementById("cpu-grid");
  const labels = ["blazor", "c# .net", "ai/llms", "azure", "react", "rust/tauri", "sql srv", "devops"];
  const vals = [0.92, 0.95, 0.82, 0.78, 0.78, 0.55, 0.85, 0.75];
  labels.forEach((lbl, i) => {
    const row = document.createElement("div");
    row.className = "cpu-row";
    row.innerHTML = `<div class="cpu-lbl">${lbl}</div><div class="cpu-bar-outer"><div class="cpu-bar-inner" id="cpu-${i}" style="width:0%"></div></div>`;
    grid.appendChild(row);
    setTimeout(() => {
      const el = document.getElementById(`cpu-${i}`);
      if (el) el.style.width = vals[i] * 100 + "%";
    }, 200 + i * 80);
  });
  setInterval(() => {
    vals.forEach((v, i) => {
      const j = v + (Math.random() - 0.5) * 0.06;
      const el = document.getElementById(`cpu-${i}`);
      if (el) el.style.width = Math.min(99, Math.max(5, j * 100)) + "%";
    });
  }, 1800);
}

function buildProfileCode() {
  const el = document.getElementById("profile-code");
  el.innerHTML = PROFILE_CODE.map((l, i) => `<div class="co-line" data-li="${i}">${l}</div>`).join("");
}

function buildProjects() {
  const list = document.getElementById("project-list");
  PROJECTS.forEach((p, i) => {
    const pillsDelay = p.stack.map((_, j) => `transition-delay:${j * 40}ms`);
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.idx = i;
    card.innerHTML = `
      <div class="pc-head">
        <div class="pc-num">${p.n}</div>
        <div>
          <div class="pc-name">${p.name}</div>
          <div class="pc-tag">${p.tagline}</div>
        </div>
        <div class="pc-toggle">+</div>
      </div>
      <div class="pc-body">
        <div>
          <div class="pc-blurb">${p.blurb}</div>
          <div class="pc-stack">${p.stack.map((s, j) => `<span class="pc-pill" style="${pillsDelay[j]}">${s}</span>`).join("")}</div>
        </div>
        <div class="pc-metrics">
          ${p.metrics.map((m) => `<div class="metric-row"><span class="metric-k">${m.k}</span><span class="metric-v">${m.v}</span></div>`).join("")}
          <div class="pc-arch" id="arch-${i}"></div>
        </div>
      </div>`;
    card.querySelector(".pc-head").addEventListener("click", () => toggleCard(i));
    list.appendChild(card);
  });
}

function toggleCard(i) {
  const card = document.querySelector(`.project-card[data-idx="${i}"]`);
  const wasOpen = card.classList.contains("open");
  document.querySelectorAll(".project-card").forEach((c) => c.classList.remove("open"));
  if (!wasOpen) {
    card.classList.add("open");
    drawArch(PROJECTS[i].arch, card.querySelector(".pc-arch"));
  }
}

function drawArch(kind, el) {
  if (!el || el.querySelector("svg")) return;
  const svgs = {
    snek: `<svg viewBox="0 0 220 120" width="220" height="120" style="display:block;margin-top:6px">
      <rect x="6"   y="10" width="58" height="24" fill="none" stroke="var(--hair)" stroke-width="1.2"/>
      <text x="35"  y="26" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="var(--muted)">Blazor UI</text>
      <rect x="78"  y="10" width="64" height="24" fill="none" stroke="var(--amber)" stroke-width="1.2"/>
      <text x="110" y="26" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="var(--amber)">ASP.NET API</text>
      <rect x="156" y="10" width="58" height="24" fill="none" stroke="var(--green)" stroke-width="1.2"/>
      <text x="185" y="26" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="var(--green)">SQL Server</text>
      <line x1="64" y1="22" x2="78"  y2="22" stroke="var(--hair)"  stroke-width="1"/>
      <line x1="142" y1="22" x2="156" y2="22" stroke="var(--green)" stroke-width="1"/>
      <rect x="62"  y="54" width="96" height="20" fill="none" stroke="var(--hair)" stroke-width="1" stroke-dasharray="3 2"/>
      <text x="110" y="68" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="var(--muted)">Zaver · Scrive</text>
      <line x1="110" y1="34" x2="110" y2="54" stroke="var(--hair)" stroke-width="1" stroke-dasharray="3 2"/>
      <rect x="6"   y="84" width="96" height="20" fill="none" stroke="var(--blue)" stroke-width="1" stroke-dasharray="2 2"/>
      <text x="54"  y="98" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="var(--blue)">LLM import pipeline</text>
      <rect x="118" y="84" width="96" height="20" fill="none" stroke="var(--pink)" stroke-width="1" stroke-dasharray="2 2"/>
      <text x="166" y="98" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="var(--pink)">pricing engine</text>
    </svg>`,
    kpi: `<svg viewBox="0 0 220 100" width="220" height="100" style="display:block;margin-top:6px">
      ${["Forms", "Automate", "Azure", "Power BI"].map((n, i) => `
        <rect x="${i * 50 + 10}" y="30" width="44" height="40" fill="none" stroke="${i === 3 ? "var(--amber)" : "var(--hair)"}" stroke-width="1.2"/>
        <text x="${i * 50 + 32}" y="54" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="${i === 3 ? "var(--amber)" : "var(--muted)"}">${n}</text>
        ${i < 3 ? `<line x1="${i * 50 + 54}" y1="50" x2="${i * 50 + 60}" y2="50" stroke="var(--hair)" stroke-width="1"/><polygon points="${i * 50 + 60},47 ${i * 50 + 65},50 ${i * 50 + 60},53" fill="var(--hair)"/>` : ""}
      `).join("")}
    </svg>`,
    design: ``,
    desktop: `<svg viewBox="0 0 220 110" width="220" height="110" style="display:block;margin-top:6px">
      <rect x="12"  y="14" width="196" height="82" fill="none" stroke="var(--hair)" stroke-width="1.2"/>
      <line x1="12" y1="28" x2="208" y2="28" stroke="var(--hair)" stroke-width="1"/>
      <circle cx="22" cy="21" r="2.5" fill="var(--red)"/>
      <circle cx="32" cy="21" r="2.5" fill="var(--amber)"/>
      <circle cx="42" cy="21" r="2.5" fill="var(--green)"/>
      <text x="110" y="24" text-anchor="middle" font-family="JetBrains Mono" font-size="8" fill="var(--muted)">desktop shell</text>
      <rect x="22"  y="36" width="82" height="24" fill="none" stroke="var(--amber)" stroke-width="1"/>
      <text x="63"  y="52" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="var(--amber)">React + TS</text>
      <rect x="114" y="36" width="82" height="24" fill="none" stroke="var(--blue)" stroke-width="1"/>
      <text x="155" y="52" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="var(--blue)">Rust (Tauri)</text>
      <rect x="22"  y="66" width="174" height="22" fill="none" stroke="var(--green)" stroke-width="1"/>
      <text x="109" y="81" text-anchor="middle" font-family="JetBrains Mono" font-size="7" fill="var(--green)">PTY  ◦  native IPC</text>
    </svg>`,
    tps: ``,
  };
  el.innerHTML = svgs[kind] || "";
}

function buildExperience() {
  const log = document.getElementById("git-log");
  EXPERIENCE.forEach((e, i) => {
    const entry = document.createElement("div");
    entry.className = "git-entry";
    entry.dataset.ei = i;
    entry.innerHTML = `
      <div class="ge-date">${e.date}</div>
      <div class="ge-spine">
        <div class="ge-dot"></div>
        <div class="ge-line"></div>
      </div>
      <div class="ge-body">
        <div class="ge-org">${e.org}</div>
        <div class="ge-role">${e.role}</div>
        ${e.commits.map((c) => `<div class="ge-commit">${c}</div>`).join("")}
      </div>`;
    log.appendChild(entry);
  });
}

function buildSkills() {
  const tabs = document.getElementById("skills-tabs");
  const panels = document.getElementById("skills-panels");
  SKILLS.forEach((g, i) => {
    const btn = document.createElement("button");
    btn.className = "sk-tab" + (i === 0 ? " active" : "");
    btn.textContent = g.group;
    btn.onclick = () => {
      document.querySelectorAll(".sk-tab").forEach((b) => b.classList.remove("active"));
      document.querySelectorAll(".sk-panel").forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById(`sk-panel-${i}`).classList.add("active");
      animateBars(i);
    };
    tabs.appendChild(btn);

    const panel = document.createElement("div");
    panel.className = "sk-panel" + (i === 0 ? " active" : "");
    panel.id = `sk-panel-${i}`;
    panel.innerHTML = g.items
      .map(
        ([k, v]) =>
          `<div class="skill-bar-row">
        <span class="skill-name">${k}</span>
        <div class="skill-outer"><div class="skill-inner" data-pct="${v * 100}" style="width:0%"></div></div>
        <span class="skill-pct">${Math.round(v * 100)}%</span>
      </div>`
      )
      .join("");
    panels.appendChild(panel);
  });
}

function animateBars(i) {
  const panel = document.getElementById(`sk-panel-${i}`);
  if (!panel) return;
  panel.querySelectorAll(".skill-inner").forEach((bar, j) => {
    setTimeout(() => { bar.style.width = bar.dataset.pct + "%"; }, j * 60);
  });
}

function buildSocketLog() {
  const el = document.getElementById("socket-log");
  el.innerHTML = SOCKET_LINES.map((l, i) => {
    const col = l.tag === "OK" ? "var(--green)" : l.tag === "INFO" ? "var(--blue)" : "var(--muted)";
    return `<div class="sl-line" data-sli="${i}">
      <span style="color:var(--muted)">[${String(i * 0.012).padEnd(6, "0").slice(0, 8)}]</span>
      <span style="color:${col};display:inline-block;width:52px"> [${l.tag}]</span>
      ${l.msg}
    </div>`;
  }).join("");
}

const sections = ["s-hero", "s-about", "s-work", "s-exp", "s-skills", "s-contact"];
let lastScroll = 0, scrollVel = 0;

function onScroll() {
  const st = window.scrollY;
  const maxSt = document.body.scrollHeight - window.innerHeight;
  const pct = Math.round((st / maxSt) * 100);

  scrollVel = Math.abs(st - lastScroll);
  lastScroll = st;
  const tbVel = document.getElementById("tb-vel");
  const tbPct = document.getElementById("tb-pct");
  const rp = document.getElementById("rail-pos");
  if (tbVel) tbVel.textContent = scrollVel.toFixed(0) + " px/s";
  if (tbPct) tbPct.textContent = pct + "%";
  if (rp) rp.textContent = pct + "%";

  sections.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    const dots = document.querySelectorAll(".rail-dot");
    if (dots[i]) dots[i].classList.toggle("active", top <= window.innerHeight * 0.4 && top > -el.offsetHeight * 0.5);
  });

  const aboutEl = document.getElementById("s-about");
  if (aboutEl) {
    const r = aboutEl.getBoundingClientRect();
    const prog = Math.max(0, Math.min(1, (window.innerHeight - r.top) / (window.innerHeight * 0.7)));
    const linesTotal = PROFILE_CODE.length;
    const linesShown = Math.floor(prog * linesTotal);
    document.querySelectorAll(".co-line").forEach((l, i) => {
      if (i < linesShown) l.classList.add("on");
    });
    const y = Math.round(2 + prog * 1);
    const p = Math.round(2 + prog * 3);
    const sy = document.getElementById("stat-years");
    const sp = document.getElementById("stat-proj");
    if (sy) sy.textContent = y + "+";
    if (sp) sp.textContent = p + "+";
  }

  document.querySelectorAll(".git-entry").forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) {
      el.classList.add("on");
      el.querySelectorAll(".ge-commit").forEach((c, j) => {
        setTimeout(() => c.classList.add("done"), 200 + j * 150);
      });
    }
  });

  const skillEl = document.getElementById("s-skills");
  if (skillEl) {
    const sr = skillEl.getBoundingClientRect();
    if (sr.top < window.innerHeight * 0.7 && !skillEl.dataset.animated) {
      skillEl.dataset.animated = "1";
      animateBars(0);
    }
  }

  document.querySelectorAll(".sl-line").forEach((l, i) => {
    const top = l.getBoundingClientRect().top;
    if (top < window.innerHeight * 0.85) setTimeout(() => l.classList.add("on"), i * 150);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
  const idx = sections.findIndex((id) => {
    const el = document.getElementById(id);
    if (!el) return false;
    const r = el.getBoundingClientRect();
    return r.top >= -el.offsetHeight * 0.3 && r.top < window.innerHeight * 0.5;
  });
  if (e.key === "j" || e.key === "ArrowDown") {
    const next = sections[Math.min(idx + 1, sections.length - 1)];
    document.getElementById(next)?.scrollIntoView({ behavior: "smooth" });
  }
  if (e.key === "k" || e.key === "ArrowUp") {
    const prev = sections[Math.max(idx - 1, 0)];
    document.getElementById(prev)?.scrollIntoView({ behavior: "smooth" });
  }
  if (e.key === "g") document.getElementById(sections[0])?.scrollIntoView({ behavior: "smooth" });
  if (e.key === "G") document.getElementById(sections[sections.length - 1])?.scrollIntoView({ behavior: "smooth" });
  const n = parseInt(e.key);
  if (n >= 1 && n <= sections.length) document.getElementById(sections[n - 1])?.scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".rail-dot").forEach((d) => {
  d.onclick = () => document.getElementById(d.dataset.sec)?.scrollIntoView({ behavior: "smooth" });
});

function tick() {
  const now = new Date();
  const s = now.toLocaleTimeString("sv-SE", { hour12: false }) + " CET";
  const tb = document.getElementById("tb-time");
  const ft = document.getElementById("footer-time");
  if (tb) tb.textContent = s;
  if (ft) ft.textContent = "© " + now.getFullYear() + " Calvin Jägare";
}
setInterval(tick, 1000);
tick();

const cform = document.getElementById("contact-form");
if (cform) {
  cform.addEventListener("submit", async (e) => {
    e.preventDefault();
    const btn = cform.querySelector(".form-submit");
    const orig = btn.textContent;
    btn.textContent = "sending...";
    btn.disabled = true;
    try {
      const res = await fetch(cform.action, {
        method: "POST",
        body: new FormData(cform),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      btn.textContent = "message_sent() ✓";
      btn.style.background = "var(--green)";
      cform.reset();
    } catch {
      btn.textContent = "error — retry";
      btn.style.background = "var(--red)";
    } finally {
      setTimeout(() => {
        btn.textContent = orig;
        btn.style.background = "";
        btn.disabled = false;
      }, 3200);
    }
  });
}

buildProfileCode();
buildProjects();
buildExperience();
buildSkills();
buildSocketLog();
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

setTimeout(buildBoot, 300);

console.log("%c Calvin Jägare ", "background:#d18947;color:#0f0e0c;padding:8px 16px;font-size:13px;font-weight:bold");
console.log("%c Full-Stack Developer · Sweden · press 1-6 or j/k to navigate ", "color:#7a6e5c;font-size:11px;padding:2px 16px");
