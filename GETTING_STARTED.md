# Getting Started: React Forms, Validation, and Context

## ⚡ Setup (do this first!)

1. Create your own copy of this template repository using GitHub's **Use this template** button.
2. Open your copy in VS Code with the Claude Code extension available.
3. **Open a terminal in the project directory and run:**
   ```bash
   npm install
   npm run dev
   ```
4. Wait for the dev server to start. It will show you a local URL (like `http://localhost:5173`).
5. Open that URL in your browser to see the app running.
6. Open Claude Code and type **Start my lesson.**
7. Follow the tutor's steps, writing and testing code as you go.

If Claude does not begin the guided lesson, close and reopen Claude Code, then type **Start my lesson.**

## Your mission

Build a Course Registration application. You will first make a form work, then validate its inputs, manage registrations through props, and finally use React Context to share the registrations across components.

**Estimated time:** 60 to 90 minutes, depending on your experience.

## How to work

- Do not ask the tutor to complete the whole application.
- Explain your thinking, make predictions, and test your changes.
- Commit your work after major checkpoints so your progress is preserved.
- Run `npm run build` before submission.

## What you will build

- A controlled form for name, email, and course selection.
- Validation with clear, field-specific messages.
- A list of registrations with a remove action.
- A summary with totals by course.
- A Context Provider and a custom hook that replace prop drilling.
- Your own additional field, validation rule, and Context-based feature.

## Troubleshooting

- If `npm` is not recognized, install a recent Node.js LTS version and reopen your terminal.
- If the development server shows a blank page, inspect the browser console and terminal errors.
- If TypeScript reports a missing import, verify file names and relative paths.
- If a React input warning appears, check that controlled inputs always receive a defined value.
- If Context data is undefined, confirm the consuming component is rendered inside its Provider.
- If Claude loses the lesson position, tell it which checkpoint you finished and ask it to review the current files before continuing.

## Completion

Submit your entire repository and a short reflection explaining:

1. What makes an input controlled?
It’s controlled when React state holds its value. I pass value={name} and an onChange that updates the state, so React is in charge of what shows up. That’s also why my state starts as "" instead of undefined.

2. Why do we prevent invalid form submissions?
stops the page from refreshing so React can handle the submit itself. Validation stops junk like empty names or bad emails from getting into the list, and it tells the user what to fix. You’d still want server-side checks in a real app though.

3. What problem did Context solve in this application?
The thing with props. RegistrationDashboard was passing registrations and onRemove down without even using them. Now the form, list and summary just call useRegistrations() and grab what they need. The data still disappears when you refresh though.

4. When would props be preferable to Context?
If the data’s only going down a level or two, props are better. It’s easier to see where stuff comes from, and the components are easier to reuse and test. Context makes more sense when a bunch of components all over the app need the same data.

5. What did you add independently, and how did you test it?
I added a year field (Freshman to Senior) that shows “Please select your year.” if you don’t pick one. I also added a dropdown to filter the list by course, plus a success message that shows the name, email, course and year.

