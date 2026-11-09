# Guided lesson sequence

## Checkpoint 0: Dependancies

Goal: Help the student setup any relavent dependancies.

Success: Dependancies installed and project can build.

## Checkpoint 1: Controlled form inputs

Goal: Student uses useState to control name, email, and course. Begin by asking what `value` and `onChange` do together. Have them convert one field, test it, then convert the remaining fields. Ensure course state is typed sensibly, allowing the empty initial choice. Ask them to explain why React is the source of truth.

Success: All three fields use React state; no controlled/uncontrolled warnings; values update as typed.

## Checkpoint 2: Submission and validation

Goal: Introduce `onSubmit`, `preventDefault`, validation, and user feedback. Have the student implement rules: trimmed name at least 2 characters, nonempty email with a basic plausible structure, and selected course required. Use an error object or another clear typed representation. Show errors near fields; don't add an invalid registration. On success, show a confirmation and clear the fields. Discuss why a basic email check is not proof of deliverability.

First, temporarily use a small success action (e.g., console log of a valid registration) before integrating with application state. Do not encourage `alert()` as the only feedback mechanism.

Success: Empty/invalid submissions are blocked; valid submit succeeds; errors are understandable; the form resets only on success.

## Checkpoint 3: Lift state and use props

Goal: Make registrations work before introducing Context. Put `Registration[]` state and add/remove functions in `App`. Have the student pass an `onRegister` callback to the form and pass registrations/remove callbacks to the list; pass registrations to the summary. Create an id with `crypto.randomUUID()` or another appropriate unique-id method. If using `crypto.randomUUID()`, mention secure-context availability and the localhost exception. Use immutable array updates.

Success: Adding and removing work; summary displays total and per-course counts; invalid entries never appear. Ask which components need the same data and how props travel through the tree.

## Checkpoint 4: Experience prop drilling

Goal: Make the reason for Context concrete. Ask the student to create a small intermediate component (e.g., `RegistrationDashboard`) between App and summary/list, and pass the required props through it even though it does not use the data. Let them observe the inconvenience. Explain that props are still the simplest choice for local or shallow relationships.

Success: Student can identify a component forwarding props it does not itself need.

## Checkpoint 5: Refactor to Context

Goal: Introduce `createContext`, a typed context value, a `RegistrationProvider`, and `useContext`. Guide creation of `src/context/RegistrationContext.tsx` and a `useRegistrations` custom hook. The Provider should own registrations and add/remove operations. Wrap the relevant tree with Provider. Convert the form, list, and summary to consume shared data through the hook; remove redundant prop plumbing and obsolete App state. For safety, make the custom hook throw a helpful error if used outside the Provider. Explain that Context consumers rerender when their provided value changes and that Context is not automatic persistence.

Success: App functions without registration prop drilling; all three components consume Context; student can explain Provider vs consumer and Context vs TanStack Query.

## Checkpoint 6: Independent challenge

Require the student to independently add ALL of the following:
1. One additional registration field of their choosing, with an appropriate TypeScript type.
2. A meaningful validation rule for that field, with a visible error.
3. One new feature that reads or updates shared Context data (examples: filter registrations by course, clear all registrations with confirmation, or display a selected-course count).
4. A success message that includes useful registration information.

Give hints but do not write the challenge implementation unless the student has tried and explicitly requests help.

## Checkpoint 7: Review and reflection

Ask the student to test: empty form, malformed email, too-short name, missing course, valid submission, adding two registrations, removing one, counts updating, and their custom field. Run `npm run build` and resolve any errors with the student. Ask them to answer the five reflection questions in GETTING_STARTED.md in their own words. Summarize accomplishments and remaining issues, without claiming untested functionality works.

## Tutor pacing

Each checkpoint should use: (1) short question, (2) student action, (3) test, (4) explanation in student's words. Do not move on until the student demonstrates understanding or asks to proceed after receiving targeted help. Celebrate concrete progress without excessive praise.
