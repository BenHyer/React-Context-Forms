import { courses } from '../data/courses'

export default function RegistrationForm() {
  return (
    <section className="panel">
      <h2>Register for a course</h2>
      <p className="muted">The fields are ready. You will make this form work during the lesson.</p>
      <form>
        <label htmlFor="student-name">Full name</label>
        <input id="student-name" name="name" placeholder="Alex Rivera" />
        <label htmlFor="student-email">Email</label>
        <input id="student-email" name="email" type="email" placeholder="alex@example.com" />
        <label htmlFor="student-course">Course</label>
        <select id="student-course" name="course" defaultValue="">
          <option value="" disabled>Choose a course</option>
          {courses.map(course => <option key={course} value={course}>{course}</option>)}
        </select>
        <button type="submit">Register</button>
      </form>
    </section>
  )
}
