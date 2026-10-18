const starterLessons = [
  {
    id: "python-start",
    topic: "Foundations",
    title: "Give your first instructions",
    description: "Meet Python and see how a few lines of code can do a task for you.",
    duration: "10 MIN",
    lead: "A program is simply a set of instructions. Python is a readable language that lets you describe those instructions in a way your computer can follow.",
    explanation: "Start with a value you want to remember, give it a name, and ask Python to show it. The name is called a variable. Change the value and the same instruction can work on tomorrow's data too.",
    code: "# A tiny work note\nname = \"Monday report\"\nrows_to_check = 24\n\nprint(name)\nprint(\"Rows to review:\", rows_to_check)",
    codeNote: "The equals sign stores a value in a variable. print() displays a result so you can check what your code is doing.",
    practice: "Change the report name and row count in your file, run it, and add one print statement that displays the number of rows you still need to review.",
    question: "What is a variable useful for?",
    options: ["Giving a value a name so you can use it later", "Making every line run twice", "Turning Python into a spreadsheet"],
    answer: 0
  },
  {
    id: "python-data",
    topic: "Foundations",
    title: "Work with everyday data",
    description: "Keep related values together and make a first useful calculation.",
    duration: "12 MIN",
    lead: "Lists help you keep a group of related values together. That is useful for names, amounts, dates, and rows you want to process.",
    explanation: "Python can add up numbers, count items, and let you look at individual values. These little operations are the building blocks of spreadsheet clean-up and reporting.",
    code: "# Weekly travel costs\ncosts = [12.50, 8.00, 15.25]\ntotal = sum(costs)\n\nprint(\"Total:\", total)\nprint(\"Number of trips:\", len(costs))",
    codeNote: "A list uses square brackets. sum() adds numeric values and len() counts how many values are in the list.",
    practice: "Add two values to the list, calculate the new total, and decide what your program should do if the list is empty.",
    question: "Which Python function adds up the numbers in a list?",
    options: ["count()", "sum()", "join()"],
    answer: 1
  },
  {
    id: "python-repeat",
    topic: "Foundations",
    title: "Automate a repeated step",
    description: "Use a loop to apply the same instruction to many items.",
    duration: "12 MIN",
    lead: "If you find yourself doing the same thing to each spreadsheet row, a loop can repeat that work for you.",
    explanation: "The for loop takes one item at a time from a list. The indented lines are the instructions that run for each item. This pattern scales from a few values to thousands of rows.",
    code: "# Review each department total\ndepartments = [\"North\", \"Central\", \"South\"]\n\nfor department in departments:\n    print(\"Check:\", department)",
    codeNote: "The colon starts the loop body. Indentation is meaningful in Python: it shows which instructions repeat.",
    practice: "Change the list to three recurring tasks from your workday, then print a numbered checklist for each one.",
    question: "What does the indented instruction do in a for loop?",
    options: ["Runs once for every item in the list", "Only runs if the list is empty", "Renames the list"],
    answer: 0
  },
  {
    id: "excel-files",
    topic: "Excel",
    title: "Read a spreadsheet with Python",
    description: "Get to know pandas and load an Excel sheet for analysis.",
    duration: "15 MIN",
    lead: "Python's pandas library makes spreadsheet-like data easier to inspect, transform, and combine.",
    explanation: "A DataFrame is a table of rows and columns. This complete example writes a tiny fictional workbook, then reads it with pandas so you can explore the file-reading step without needing separate training data.",
    code: "# Install once in your terminal:\n# Windows: py -m pip install pandas openpyxl\n# macOS/Linux: python3 -m pip install pandas openpyxl\n\nimport pandas as pd\n\nsample = pd.DataFrame({\"Team\": [\"North\", \"South\"], \"Amount\": [120, 80]})\nsample.to_excel(\"synthetic_weekly_report.xlsx\", index=False)\nreport = pd.read_excel(\"synthetic_weekly_report.xlsx\")\nprint(report.head())\nprint(\"Rows and columns:\", report.shape)",
    codeNote: "The workbook contains fictional sample values and is created in the current folder; run the example in a practice folder. `head()` previews rows; `shape` shows the row and column counts. Run the commands in the Python setup from the README.",
    practice: "Use a copy of a small workbook. Print its sheet names and column names, then check the row count against Excel.",
    question: "What does report.head() help you do?",
    options: ["Preview the first rows of the table", "Delete the first five rows", "Save a new workbook"],
    answer: 0
  },
  {
    id: "excel-clean",
    topic: "Excel",
    title: "Filter rows and make a first total",
    description: "Use a tiny synthetic table to filter valid amounts and total by team.",
    duration: "15 MIN",
    lead: "Start with one small, repeatable clean-up rule. This first example uses fictional data so you can run it without preparing a workbook.",
    explanation: "The synthetic table has three records, including one with a missing amount. Filter that row explicitly, then group the remaining amounts by team. Later lessons add missing-value audits and richer validation.",
    code: "import pandas as pd\n\nreport = pd.DataFrame({\n    \"Team\": [\"North\", \"South\", \"North\"],\n    \"Amount\": [120.0, 80.0, None],\n})\n\nclean = report.dropna(subset=[\"Amount\"])\nby_team = clean.groupby(\"Team\")[\"Amount\"].sum()\nprint(by_team.sort_values(ascending=False))",
    codeNote: "Install pandas with `py -m pip install pandas` on Windows or `python3 -m pip install pandas` on macOS/Linux. This beginner example filters and totals; `excel-summarize` later adds an explicit audit of missing values. Both lesson IDs are retained so saved progress is preserved.",
    practice: "Run this synthetic example, check the two totals by hand, then change one amount and predict how the output will change.",
    question: "What does groupby(\"Team\") do here?",
    options: ["Groups rows with the same Team value", "Sorts every column alphabetically", "Changes the workbook's file name"],
    answer: 0
  },
  {
    id: "dashboard-story",
    topic: "Dashboards",
    title: "Turn a summary into a chart",
    description: "Pick a chart that makes a useful comparison easy to see.",
    duration: "15 MIN",
    lead: "A helpful dashboard makes one question easier to answer. Start with the decision or comparison, then pick a visual that makes it clear.",
    explanation: "A bar chart is a strong choice for comparing categories. This standalone example builds a tiny synthetic table, groups it, then labels the chart so another person can understand its measure.",
    code: "import pandas as pd\nimport matplotlib.pyplot as plt\n\nsample = pd.DataFrame({\n    \"Team\": [\"North\", \"South\", \"North\"],\n    \"Amount\": [120, 80, 45],\n})\nby_team = sample.groupby(\"Team\")[\"Amount\"].sum()\nby_team.plot(kind=\"bar\", color=\"#64836a\")\nplt.title(\"Synthetic total amount by team\")\nplt.xlabel(\"Team\")\nplt.ylabel(\"Amount (illustrative units)\")\nplt.tight_layout()\nplt.show()",
    codeNote: "This example is self-contained. Install pandas and matplotlib with `py -m pip install pandas matplotlib` on Windows or `python3 -m pip install pandas matplotlib` on macOS/Linux.",
    practice: "Change the chart title and labels to match your data, then write one sentence about what comparison the chart supports.",
    question: "When is a bar chart a useful choice?",
    options: ["When comparing values across categories", "When you need a map projection", "When you want to hide the data labels"],
    answer: 0
  },
  {
    id: "gis-locations",
    topic: "GIS",
    title: "Explore location data",
    description: "Learn what makes a table of coordinates spatial data.",
    duration: "15 MIN",
    lead: "Location data adds a where to your records. Coordinates, addresses, or area codes can connect a spreadsheet to a map.",
    explanation: "A coordinate pair only makes sense when you know its coordinate reference system (CRS). For latitude and longitude, the common GPS reference is EPSG:4326. Check your data's CRS before mapping or measuring distances.",
    code: "# Example coordinates: longitude, latitude\nlocations = [\n    {\"site\": \"A\", \"lon\": 106.82, \"lat\": -6.18},\n    {\"site\": \"B\", \"lon\": 107.61, \"lat\": -6.91},\n]\n\nfor place in locations:\n    print(place[\"site\"], place[\"lat\"], place[\"lon\"])",
    codeNote: "These fictional coordinate pairs are longitude/latitude in EPSG:4326. Order matters when constructing points. If source coordinates or their CRS are unknown, verify them before labeling or mapping them.",
    practice: "Add one synthetic site, label longitude and latitude clearly, and write down where the coordinates came from and which CRS they use.",
    question: "Why should you check a dataset's coordinate reference system?",
    options: ["So locations and measurements are interpreted correctly", "So Python can sort text columns", "So the file becomes an Excel workbook"],
    answer: 0
  },
  {
    id: "gis-map",
    topic: "GIS",
    title: "Make your first map",
    description: "Plot points and start thinking spatially with GeoPandas.",
    duration: "18 MIN",
    lead: "With a spatial table, you can inspect patterns that are hard to spot in a spreadsheet: clusters, coverage gaps, and how places relate.",
    explanation: "GeoPandas adds geometry and CRS awareness to pandas. These fictional longitude/latitude values have a known GPS CRS, EPSG:4326, so the example labels them explicitly before plotting. Never assign a CRS to unknown coordinates by guessing.",
    code: "import geopandas as gpd\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\nreport = pd.DataFrame({\n    \"site\": [\"A\", \"B\", \"C\"],\n    \"lon\": [106.82, 106.90, 106.86],\n    \"lat\": [-6.18, -6.20, -6.12],\n})\nsites = gpd.GeoDataFrame(\n    report,\n    geometry=gpd.points_from_xy(report[\"lon\"], report[\"lat\"]),\n    crs=\"EPSG:4326\",  # Coordinates are known synthetic longitude/latitude\n)\nif sites.crs is None:\n    raise ValueError(\"CRS is unknown; verify coordinate metadata before mapping\")\nsites.plot(markersize=12, color=\"#527b65\")\nplt.title(\"Fictional sample locations\")\nplt.show()",
    codeNote: "Install GeoPandas and matplotlib with `py -m pip install geopandas matplotlib` on Windows or `python3 -m pip install geopandas matplotlib` on macOS/Linux. These fictional points are around Jakarta; EPSG:4326 is angular degrees, not a measurement CRS.",
    practice: "Plot a few public or fictional coordinates, inspect their CRS, and verify that the points appear in the expected region.",
    question: "What does a GeoDataFrame add to an ordinary table?",
    options: ["Spatial geometry and coordinate reference information", "Automatic Excel formulas", "A password for each row"],
    answer: 0
  }
];

const lessons = [...starterLessons, ...window.fieldnotesAdvancedLessons];
const courseModules = window.fieldnotesCourseModules;
const lessonsById = new Map(lessons.map((lesson) => [lesson.id, lesson]));
const moduleByLessonId = new Map(courseModules.flatMap((module) => module.lessonIds.map((id) => [id, module])));
courseModules.forEach((module) => {
  module.lessons = module.lessonIds.map((id) => lessonsById.get(id)).filter(Boolean);
});

const projects = [
  {
    id: "excel", title: "The tidy weekly report", category: "EXCEL AUTOMATION", level: "BEGINNER", time: "1–2 HOURS",
    description: "Combine repeated weekly files, clean a few columns, and create a summary you can reuse.",
    steps: ["Choose a copy of a non-sensitive workbook.", "Load it with pandas and inspect the column names.", "Pick one repeatable clean-up rule and apply it.", "Compare the summary to a manual check, then save a new file."],
    art: "excel-art"
  },
  {
    id: "dashboard", title: "A dashboard for one question", category: "DASHBOARDS", level: "BEGINNER", time: "2–3 HOURS",
    description: "Turn one useful comparison into a clear chart with a title, labels, and a simple takeaway.",
    steps: ["Write down one question your team asks regularly.", "Summarize just the data needed to answer it.", "Try a bar chart for category comparisons or a line chart for trends.", "Add plain-language labels and check the chart against the source."],
    art: "dashboard-art"
  },
  {
    id: "gis", title: "Map your service area", category: "GIS & LOCATION DATA", level: "BEGINNER", time: "2–3 HOURS",
    description: "Plot a small set of locations and look for a pattern, gap, or outlier.",
    steps: ["Start with public or invented sample locations.", "Confirm what coordinate columns and CRS you have.", "Create point geometry with GeoPandas.", "Plot the points and write one observation; verify locations look plausible."],
    art: "gis-art"
  }
];

const storageKey = "fieldnotes-python-progress-v2";
const legacyStorageKey = "fieldnotes-python-progress-v1";
let progressState = readProgress();
let completedLessons = progressState.completed;
let activeLessonId = null;
let quizAnsweredCorrectly = false;

function readProgress() {
  const empty = { completed: [], activeDays: [], dailyBonusDays: [], weeklyLessons: [], weeklyBonusWeeks: [] };
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new TypeError("Saved progress must be an object.");
      }
      const knownIds = new Set(lessons.map((lesson) => lesson.id));
      return {
        completed: Array.isArray(parsed.completed) ? [...new Set(parsed.completed.filter((id) => knownIds.has(id)))] : [],
        activeDays: Array.isArray(parsed.activeDays) ? [...new Set(parsed.activeDays.filter(isDateKey))] : [],
        dailyBonusDays: Array.isArray(parsed.dailyBonusDays) ? [...new Set(parsed.dailyBonusDays.filter(isDateKey))] : [],
        weeklyLessons: Array.isArray(parsed.weeklyLessons)
          ? parsed.weeklyLessons.filter((item) => item && typeof item.week === "string" && knownIds.has(item.lessonId)) : [],
        weeklyBonusWeeks: Array.isArray(parsed.weeklyBonusWeeks)
          ? [...new Set(parsed.weeklyBonusWeeks.filter((week) => typeof week === "string"))] : []
      };
    }
    const legacy = JSON.parse(localStorage.getItem(legacyStorageKey) || "[]");
    if (Array.isArray(legacy)) {
      return { ...empty, completed: [...new Set(legacy.filter((id) => lessonsById.has(id)))] };
    }
    return empty;
  } catch (error) {
    console.warn("Could not load saved learning progress.", error);
    return empty;
  }
}

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(progressState));
  } catch (error) {
    console.warn("Could not save learning progress in this browser.", error);
  }
}

function isDateKey(value) {
  return typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)
    && !Number.isNaN(Date.parse(`${value}T00:00:00Z`));
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function localWeekKey(date = new Date()) {
  const monday = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const weekday = (monday.getDay() + 6) % 7;
  monday.setDate(monday.getDate() - weekday);
  return localDateKey(monday);
}

function totalExperience() {
  return completedLessons.length * 25 + progressState.dailyBonusDays.length * 10
    + progressState.weeklyBonusWeeks.length * 50;
}

function renderLessons() {
  const grid = document.querySelector("#lesson-grid");
  const topic = document.querySelector("#topic-filter").value;
  const sequence = courseModules.flatMap((module) => module.lessons);
  const lessonNumbers = new Map(sequence.map((lesson, index) => [lesson.id, index + 1]));
  grid.innerHTML = courseModules.map((module) => {
    const moduleLessons = module.lessons.filter((lesson) => topic === "all" || lesson.topic === topic);
    if (!moduleLessons.length) return "";
    const moduleComplete = moduleLessons.filter((lesson) => completedLessons.includes(lesson.id)).length;
    const cards = moduleLessons.map((lesson) => {
      const complete = completedLessons.includes(lesson.id);
      const topicClass = lesson.topic.toLowerCase().replace(/\s+/g, "-");
      return `
        <button class="lesson-card${complete ? " is-complete" : ""}" type="button" data-lesson="${lesson.id}" aria-label="Open lesson ${lesson.title}${complete ? ", completed" : ""}">
          <span class="lesson-card-top"><span class="lesson-number">LESSON ${String(lessonNumbers.get(lesson.id)).padStart(2, "0")}</span><span class="lesson-check" aria-hidden="true">✓</span></span>
          <span class="topic-chip topic-${topicClass}">${lesson.topic}</span>
          <span class="lesson-title">${lesson.title}</span>
          <span class="lesson-desc">${lesson.description}</span>
          <span class="lesson-duration">◷ &nbsp;${lesson.duration}${complete ? " &nbsp;·&nbsp; DONE" : " &nbsp;·&nbsp; +25 XP"}</span>
        </button>`;
    }).join("");
    return `
      <section class="module-block">
        <div class="module-heading">
          <div><p class="module-subtitle">${module.subtitle}</p><h3>${module.title}</h3><p class="module-description">${module.description}</p></div>
          <span class="module-progress">${moduleComplete} / ${moduleLessons.length} done</span>
        </div>
        <div class="path-grid">${cards}</div>
      </section>`;
  }).join("") || '<p class="empty-state">No lessons match this topic yet.</p>';
  grid.querySelectorAll("[data-lesson]").forEach((card) => card.addEventListener("click", () => openLesson(card.dataset.lesson)));
}

function renderProgress() {
  const count = completedLessons.length;
  const percent = Math.round((count / lessons.length) * 100);
  const xp = totalExperience();
  const levels = [
    { xp: 0, name: "Trailhead" },
    { xp: 125, name: "Python apprentice" },
    { xp: 300, name: "Data explorer" },
    { xp: 500, name: "Automation builder" },
    { xp: 750, name: "Spatial thinker" },
    { xp: 1000, name: "Capstone maker" }
  ];
  const currentLevel = levels.slice().reverse().find((level) => xp >= level.xp);
  const nextLevel = levels.find((level) => level.xp > xp);
  const today = localDateKey();
  const week = localWeekKey();
  const weeklyLessons = new Set(progressState.weeklyLessons.filter((item) => item.week === week).map((item) => item.lessonId));
  const weeklyProgress = Math.min(weeklyLessons.size, 3);
  const activeDaySet = new Set(progressState.activeDays);
  let streak = 0;
  const todayDate = new Date(`${today}T00:00:00Z`);
  if (!activeDaySet.has(today)) todayDate.setUTCDate(todayDate.getUTCDate() - 1);
  while (activeDaySet.has(todayDate.toISOString().slice(0, 10))) {
    streak++;
    todayDate.setUTCDate(todayDate.getUTCDate() - 1);
  }
  const xpIntoLevel = xp - currentLevel.xp;
  const levelSpan = nextLevel ? nextLevel.xp - currentLevel.xp : 250;
  const levelPercent = nextLevel ? Math.min(100, (xpIntoLevel / levelSpan) * 100) : 100;

  document.querySelector("#progress-percent").textContent = `${percent}%`;
  document.querySelector("#progress-fill").style.width = `${percent}%`;
  document.querySelector("#lesson-count").textContent = `${count} / ${lessons.length} lessons`;
  document.querySelector("#progress-caption").textContent = count === lessons.length
    ? "Every module complete. Take on your capstone."
    : count === 0 ? "Your first 25 XP is one lesson away." : "Every lesson builds a skill you can reuse.";
  document.querySelector("#level-name").textContent = currentLevel.name;
  document.querySelector("#level-xp").textContent = nextLevel ? `${xpIntoLevel} / ${levelSpan} XP to next level` : "Highest learning level reached";
  document.querySelector("#xp-total").textContent = `${xp} XP`;
  document.querySelector("#daily-quest-progress").textContent = progressState.dailyBonusDays.includes(today)
    ? "Quest complete — your +10 XP bonus is earned."
    : "Complete a new lesson today to earn a bonus and keep your streak.";
  document.querySelector("#daily-quest-fill").style.width = progressState.dailyBonusDays.includes(today) ? "100%" : "0%";
  document.querySelector("#weekly-quest-progress").textContent = weeklyProgress === 3
    ? "Quest complete — your +50 XP bonus is earned."
    : `${weeklyProgress} / 3 new lessons this week`;
  document.querySelector("#weekly-quest-fill").style.width = `${(weeklyProgress / 3) * 100}%`;
  document.querySelector("#streak-count").textContent = String(streak);
}

function renderProjects() {
  document.querySelector("#project-grid").innerHTML = projects.map((project) => `
    <article class="project-card" data-project="${project.id}">
      <div class="project-art ${project.art}" aria-hidden="true">
        ${project.id === "excel" ? '<div class="art-window"><div class="mini-line"></div><div class="mini-cells">' + "<span></span>".repeat(12) + "</div></div>" : ""}
        ${project.id === "dashboard" ? '<div class="chart-bars"><span></span><span></span><span></span><span></span><span></span></div>' : ""}
        ${project.id === "gis" ? '<div class="map-shape"></div><span class="map-pin"></span>' : ""}
      </div>
      <div class="project-body">
        <div class="project-meta"><span>${project.category}</span><span>${project.level}</span></div>
        <h3>${project.title}</h3><p>${project.description}</p>
        <ol class="project-steps">${project.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
        <button class="project-toggle" type="button" aria-expanded="false"><span>See a first-step plan</span><span aria-hidden="true">+</span></button>
        <div class="project-meta" style="margin-top:12px"><span>◷ &nbsp;${project.time}</span><span>YOUR FIRST WIN</span></div>
      </div>
    </article>`).join("");

  document.querySelectorAll(".project-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".project-card");
      const expanded = card.classList.toggle("is-expanded");
      button.setAttribute("aria-expanded", String(expanded));
      button.firstElementChild.textContent = expanded ? "Hide first-step plan" : "See a first-step plan";
      button.lastElementChild.textContent = expanded ? "−" : "+";
    });
  });
}

function openLesson(id) {
  const lesson = lessons.find((item) => item.id === id);
  if (!lesson) return;
  activeLessonId = id;
  quizAnsweredCorrectly = false;
  const alreadyComplete = completedLessons.includes(id);
  const codeHtml = lesson.code.split("\n").map((line) => {
    const safe = escapeHtml(line);
    return line.trimStart().startsWith("#") ? `<span class="code-comment">${safe}</span>` : safe;
  }).join("\n");
  const topicClass = lesson.topic.toLowerCase().replace(/\s+/g, "-");
  const moduleName = moduleByLessonId.get(id)?.subtitle || "Learning path";
  const practice = lesson.practice || "Change one value in the example, predict the result, then run it in your own Python environment.";
  document.querySelector("#lesson-content").innerHTML = `
    <p class="dialog-module">${moduleName}</p>
    <span class="topic-chip topic-${topicClass} lesson-dialog-chip">${lesson.topic} &nbsp;·&nbsp; ${lesson.duration} &nbsp;·&nbsp; +25 XP</span>
    <h2 id="lesson-title">${lesson.title}</h2>
    <p class="dialog-lead">${lesson.lead}</p>
    <section class="lesson-block"><h3>The idea</h3><p>${lesson.explanation}</p></section>
    <section class="lesson-block"><h3>Try reading this example</h3><div class="code-block"><button type="button" class="code-copy">Copy code</button><code>${codeHtml}</code></div><div class="lesson-callout">${lesson.codeNote}</div></section>
    <section class="practice-block"><span class="practice-label">YOUR HANDS-ON CHALLENGE</span><p>${practice}</p><span class="practice-note">Run and adapt examples in your own Python environment; this learning app does not execute code.</span></section>
    <section class="quiz-box"><h3>Quick check: ${lesson.question}</h3><div class="quiz-options">${lesson.options.map((option, index) => `<button class="quiz-option" type="button" data-option="${index}">${option}</button>`).join("")}</div><p class="quiz-feedback" aria-live="polite"></p></section>
    <div class="lesson-actions"><span class="lesson-hint">${alreadyComplete ? "Completed lessons do not award XP twice." : "Answer the quick check to earn 25 XP."}</span><button class="primary-button" type="button" disabled>${alreadyComplete ? "Completed ✓" : "Complete lesson · +25 XP"}</button></div>`;

  const dialog = document.querySelector("#lesson-dialog");
  dialog.showModal();
  document.querySelector(".code-copy").addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(lesson.code);
      event.currentTarget.textContent = "Copied!";
      window.setTimeout(() => { event.currentTarget.textContent = "Copy code"; }, 1500);
    } catch (error) {
      event.currentTarget.textContent = "Select code to copy";
      console.warn("Could not copy code to the clipboard.", error);
    }
  });
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.addEventListener("click", () => answerQuiz(button, lesson));
  });
  document.querySelector(".primary-button").addEventListener("click", completeLesson);
}

function answerQuiz(button, lesson) {
  const chosen = Number(button.dataset.option);
  const feedback = document.querySelector(".quiz-feedback");
  const completeButton = document.querySelector(".primary-button");
  if (chosen === lesson.answer) {
    quizAnsweredCorrectly = true;
    button.classList.add("is-correct");
    feedback.textContent = "That's right. Nice work!";
    completeButton.disabled = false;
  } else {
    button.classList.add("is-wrong");
    feedback.textContent = "Not quite — take another look at the example and try again.";
  }
}

function completeLesson() {
  if (!activeLessonId || !quizAnsweredCorrectly) return;
  if (!completedLessons.includes(activeLessonId)) {
    completedLessons.push(activeLessonId);
    const today = localDateKey();
    const week = localWeekKey();
    if (!progressState.activeDays.includes(today)) progressState.activeDays.push(today);
    if (!progressState.dailyBonusDays.includes(today)) progressState.dailyBonusDays.push(today);
    if (!progressState.weeklyLessons.some((item) => item.week === week && item.lessonId === activeLessonId)) {
      progressState.weeklyLessons.push({ week, lessonId: activeLessonId });
    }
    const weeklyCount = new Set(progressState.weeklyLessons.filter((item) => item.week === week).map((item) => item.lessonId)).size;
    if (weeklyCount >= 3 && !progressState.weeklyBonusWeeks.includes(week)) {
      progressState.weeklyBonusWeeks.push(week);
    }
    saveProgress();
    renderLessons();
    renderProgress();
  }
  const button = document.querySelector(".primary-button");
  button.textContent = "Completed ✓";
  button.disabled = true;
  document.querySelector(".lesson-hint").textContent = "25 XP earned. Daily and weekly quests update automatically.";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function switchPage(page) {
  const pageNames = { learn: "Learning path", projects: "My projects", capstone: "Final project" };
  Object.entries(pageNames).forEach(([key]) => {
    document.querySelector(`#${key}-page`).classList.toggle("hidden", key !== page);
  });
  document.querySelector("#breadcrumb-page").textContent = pageNames[page] || pageNames.learn;
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.page === page);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-page]").forEach((button) => button.addEventListener("click", () => switchPage(button.dataset.page)));
document.querySelector("#topic-filter").addEventListener("change", renderLessons);
document.querySelector(".close-dialog").addEventListener("click", () => document.querySelector("#lesson-dialog").close());
document.querySelector("#lesson-dialog").addEventListener("click", (event) => {
  if (event.target === event.currentTarget) event.currentTarget.close();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && document.querySelector("#lesson-dialog").open) {
    document.querySelector("#lesson-dialog").close();
  }
});

renderLessons();
renderProjects();
renderProgress();
