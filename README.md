# Fieldnotes

Fieldnotes is a free, self-paced learning course delivered as static HTML, CSS,
and JavaScript. Its 33 lessons introduce Python, spreadsheet work, dashboards,
GIS, and basic project practice.

## Open the course

Open `index.html` in a modern browser. There is no build step, server, or
package installation for the course itself. The page loads `styles.css`,
`curriculum.js`, and `app.js` directly.

Lesson completion, XP, and quest activity stay in this browser's local storage.
There are no accounts, backend services, uploads, telemetry, or cloud code
execution. Browser storage is local to this device and browser; clearing it
removes saved progress.

## Publish the learning site for free

The course is static and can be served by GitHub Pages without a server or
paid hosting plan. Publishing with GitHub Pages makes the repository contents
public as well as the website. Do not put private data, credentials, or
unapproved work files in this project.

1. Create a **public** GitHub repository for this project.
2. Push the site files to the `main` branch.
3. In the repository, open **Settings → Pages** and select **GitHub Actions**
   as the deployment source.
4. The workflow in `.github/workflows/pages.yml` publishes the HTML course.
   The resulting URL appears in the workflow's deployment details and Pages
   settings.

The Pages workflow publishes only `index.html`, `styles.css`, `app.js`, and
`curriculum.js`. It does not deploy or run the Python capstone. That dashboard
stays local and should use synthetic practice data. A custom domain may have a
separate registration cost; the default Pages address does not require one.

## Follow the Python examples

The course displays examples but does not run Python code. Use Python 3 and a
text editor such as VS Code, create a practice folder, save an example as a
`.py` file, and run it from that folder:

```text
# Windows
py example.py

# macOS or Linux
python3 example.py
```

Examples use fictional, synthetic values and small in-memory tables wherever
possible. File-based Excel examples create a small synthetic workbook first.
Do not substitute private or sensitive work data into practice examples.

Install only the libraries needed for the lesson you are following:

```text
# Windows
py -m pip install pandas openpyxl matplotlib
py -m pip install streamlit
py -m pip install geopandas
py -m pip install pytest

# macOS or Linux: use python3 -m pip in place of py -m pip
```

The standalone Python, pandas, charting, GIS, and logging examples run from a
terminal with `python example.py` (or `py example.py` on Windows). Run the
pytest example with `py -m pytest` on Windows or `python3 -m pytest` on macOS
or Linux. For a Streamlit dashboard, save the complete app as `app.py` and
start it locally with `py -m streamlit run app.py` on Windows or
`python3 -m streamlit run app.py` on macOS or Linux. Do not publish or host
the practice dashboard. GeoPandas installation can vary by operating system;
if pip reports geospatial dependency errors, follow the official GeoPandas
installation guidance or use a conda-forge environment.

## Bounded practice capstone

The capstone is intentionally small: one synthetic workbook → schema and
value checks → one validated summary → a simple dashboard running locally →
one spatial result using a known CRS → a few tests and a README. The README
should explain setup, the synthetic data, privacy boundaries, assumptions,
units, and limitations. Keep the source workbook unchanged. A projected
straight-line distance is not road distance or network travel time.

The review rubric is aspirational guidance for this exercise, not a guarantee
of professional or portfolio readiness, employment, or certification. Keep
the work local: the course does not provide a backend, accounts, data upload,
cloud Python execution, leaderboard, or hosted Streamlit service.

## Local progress

- A correct lesson knowledge check earns 25 XP once.
- Completing a new lesson on a calendar day earns a +10 XP daily quest bonus.
- Completing three new lessons in a calendar week earns a +50 XP bonus.
- Learning activity on consecutive calendar days builds a local streak.

These game mechanics are encouragement, not a measure of professional
ability. Existing completion IDs for `excel-clean` and `excel-summarize` remain
distinct, so clarifying the two lessons does not discard saved progress.
