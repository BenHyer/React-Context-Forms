import { FormEvent, useState } from "react";
import { courses, Course, Registration, years, Year } from "../data/courses";
import { useRegistrations } from "./RegistrationContext";


  type FormErrors = {
    name?: string;
    email?: string;
    course?: string;
    year?: string;
  };

// type AddRegistrationProps =
//   {
//     onRegister: (input: Omit<Registration, 'id'>) => void
//   }

export default function RegistrationForm() {

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const found = validate(); // 1. run validation, keep the result
    setErrors(found); // 2. store it so the JSX can show it

    if (Object.keys(found).length > 0 || course === "" || year === "") {
      // 3. any errors?
      setSuccess("");
      return; //    stop: don't log, don't clear
    }

    addRegistration({ name: name.trim(), email: email.trim(), course, year });
    setSuccess(`Thanks ${name.trim()}! ${email.trim()} is registered for ${course} as a ${year}.`);
    setName("");
    setEmail("");
    setCourse("");
    setYear("");
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
    if (!year) {
      next.year = "Please select your year.";
    }
    return next;
  }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [course, setCourse] = useState<Course | "">("");
    const [errors, setErrors] = useState<FormErrors>({});
    const [success, setSuccess] = useState("");
    const { addRegistration } = useRegistrations();
    const [year, setYear] = useState<Year | "">("");

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

          <select
            value={year}
            onChange={(e) => setYear(e.target.value as Year | "")}
            id="student-year"
            name="year"
          >
            <option value="" disabled>Choose your year</option>
            {years.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
          {errors.year && <p className="error">{errors.year}</p>}


          <button type="submit">Register</button>
          {success && <p className="success">{success}</p>}
        </form>
      </section>
    );
  }
