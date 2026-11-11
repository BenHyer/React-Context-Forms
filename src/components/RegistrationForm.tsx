import { FormEvent, useState } from "react";
import { courses, Course } from "../data/courses";

type FormErrors = {
  name?: string;
  email?: string;
  course?: string;
};

export default function RegistrationForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found = validate(); // 1. run validation, keep the result
    setErrors(found); // 2. store it so the JSX can show it

    if (Object.keys(found).length > 0) {
      // 3. any errors?
      setSuccess("");
      return; //    stop: don't log, don't clear
    }

    console.log({ name, email, course }); // 4. valid! (temporary success action)
    setSuccess(`Thanks ${name} , ${course}`); // 5. a message, e.g. include the name and course
    setName(""); // 6. clear all three fields
    setEmail("");
    setCourse("");
  }

  function validate(): FormErrors {
    const next: FormErrors = {};

    if (name.trim().length < 2) {
      next.name = "Full name must be at least 2 characters.";
    }
    if (!email.trim()) {
      next.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(email.trim())) {
      next.email = "bad email";
    }
    if (!course) {
      next.course = "A course must be selected";
    }
    return next;
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState<Course | "">("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState("");

  return (
    <section className="panel">
      <h2>Register for a course</h2>
      <p className="muted">
        The fields are ready. You will make this form work during the lesson.
      </p>
      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="student-name">Full name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="student-name"
          name="name"
          placeholder="Alex Rivera"
        />
        {errors.name && <p className="error">{errors.name}</p>}

        <label htmlFor="student-email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="student-email"
          name="email"
          type="email"
          placeholder="alex@example.com"
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="student-course">Course</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value as Course | "")}
          id="student-course"
          name="course"
        >
          <option value="" disabled>
            Choose a course
          </option>
          {courses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {errors.course && <p className="error">{errors.course}</p>}

        <button type="submit">Register</button>
        {success && <p className="success">{success}</p>}
      </form>
    </section>
  );
}
