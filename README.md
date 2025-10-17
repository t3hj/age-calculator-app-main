# Frontend Mentor - Age calculator app

![Design preview for the Age calculator app coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a decent understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this age calculator app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to: 

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The date is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

All the required assets for this project are in the `/assets` folder. The images are already exported for the correct screen size and optimized.

We also include variable and static font files for the required fonts for this project. You can choose to either link to Google Fonts or use the local font files to host the fonts yourself. Note that we've removed the static font files for the font weights that aren't needed for this project.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommended hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
# Age Calculator App

Small, responsive age-calculator built with plain HTML, CSS and JavaScript.

This repository contains a minimal implementation of an age calculator UI that accepts a birth date (day, month, year), validates the input, and displays the age in years, months and days. The result numbers animate to their final values.

## Features

- Input validation (required fields, day/month ranges, rejects future dates, rejects invalid calendar dates like 31/04)
- Correct age calculation accounting for varying month lengths and leap years
- Animated result numbers
- Simple, responsive layout and basic focus/hover states

## Files

- `index.html` — main page with the form and results
- `styles.css` — styles for layout, inputs, errors and results
- `script.js` — form validation, calculation and animation logic
- `assets/` — images/fonts used by the project
- `style-guide.md` — design tokens and color/font notes
- `README-template.md` — original template (kept for reference)

## How to run locally

You can open the page directly in a browser or run a tiny local server. Examples for PowerShell (Windows):

Open `index.html` in your default browser:

```powershell
Start-Process .\index.html
```

Run a simple HTTP server (Python):

```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or, if you have Node installed, use a lightweight server:

```powershell
npx http-server -p 8000
# then open http://localhost:8000
```

Note: opening via an HTTP server is useful if you plan to fetch assets or test service-worker behavior.

## Quick testing checklist

- Enter a valid date (e.g. 16/10/1990) and press Calculate — the results should animate.
- Leave a field empty — a "This field is required" message appears under the empty input.
- Enter invalid day/month values (e.g. day 32 or month 13) — a validation error appears.
- Enter a nonexistent calendar date (e.g. 31/04/1991) — inputs show a "Must be a valid date" message.
- Enter a future year — error shown for the year field.

## Attribution note

The original starter files included a reference to Frontend Mentor. That line has been removed from the page footer; the page now shows only the "Coded by" line. Keep any required asset/license files in `assets/` (for example, font license `OFL.txt`) if you redistribute this project.

## Next steps / ideas

- Improve accessibility (aria-live regions for results, aria-invalid on invalid inputs)
- Add unit tests for the age calculation function
- Polish styles to match a production design more closely
- Add CI and a deploy workflow (GitHub Pages / Vercel)

## Author

- Your Name Here — replace with your name or link to your site

---

If you want, I can also: add accessibility improvements, add unit tests for the calculation logic, or wire up a simple deploy config. Tell me which you'd like next.
