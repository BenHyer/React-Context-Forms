import { courses, Registration } from "../data/courses"
import { useRegistrations } from "./RegistrationContext"

type RegistrationSummaryProps = { registrations: Registration[] }


export default function RegistrationSummary() {
  const { registrations } = useRegistrations()
  return (
    <section className="panel">
      <h2>Summary</h2>
      <p>Total: {registrations.length}</p>
      <ul>
        {courses.map(course => (
          <li key={course}>
            {course} : {registrations.filter(r => r.course === course).length}
          </li>
        ))}
      </ul>
      <p className="muted">You will calculate the total and registrations per course here.</p>
    </section>
  )
}
