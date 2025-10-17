# Age Calculator App

Small, responsive age calculator built with plain HTML, CSS and JavaScript. Enter a birth date (day, month, year), validate the input, and display the age in years, months and days with a simple number animation.

## What it does

- Validates required fields and value ranges (day: 1–31, month: 1–12).
- Detects invalid calendar dates (e.g. 31/04) and future dates.
- Calculates age correctly across months and leap years.
- Animates result numbers to their final values.
- Basic responsive layout and focus/hover states.

## Project files

- `index.html` — main page with the form and results
- `styles.css` — layout, input, error and result styles
- `script.js` — input validation, age calculation and animation
- `assets/` — images and fonts used by the project

## Quick start (local)

1. Open `index.html` directly in a browser, or run a local server:
   - Python: `python -m http.server 8000`
   - Node: `npx http-server -p 8000`
2. Open `http://localhost:8000` (if using a server) or open `index.html` directly.

## Testing checklist

- Enter a valid date (e.g. 16/10/1990) and press Calculate — results should animate.
- Leave a field empty — a "This field is required" message should appear.
- Enter invalid day or month values — an appropriate validation error appears.
- Enter a nonexistent date (e.g. 31/04/1991) — input shows "Must be a valid date".
- Enter a future date — year field shows an error.

## Notes and next steps

- Accessibility improvements: add aria-live for results and aria-invalid on invalid inputs.
- Consider adding unit tests for the calculation logic and a simple deploy workflow (GitHub Pages / Vercel).

## Author

- tehjp

## License

- MIT (or choose preferred license)
