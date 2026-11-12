import { Registration } from "../data/courses"
import { useRegistrations } from "./RegistrationContext"
import { useState } from "react"
import { courses, Course } from "../data/courses"

// type RegistrationListProps = {
//   registrations: Registration[]
//   onRemove: (id: string) => void
// }

export default function RegistrationList() {
  const { registrations, removeRegistration } = useRegistrations()
  const [filter, setFilter] = useState<Course | "All">("All")

  const visible = filter === "All"
    ? registrations
    : registrations.filter(r => r.course === filter)

  return (
    <section className="panel">
      <h2>Registrations</h2>

      <label htmlFor="course-filter">Filter by course</label>
      <select id="course-filter" value={filter} onChange={e => setFilter(e.target.value as Course | "All")}>
        <option value="All">All courses</option>
        {courses.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      {visible.length === 0 ? (
        <p className="muted">No registrations to show.</p>
      ) : (
        <ul>
          {visible.map(r => (
            <li key={r.id}>
              <strong>{r.name}</strong> ({r.email}) — {r.course}, {r.year}{" "}
              <button type="button" onClick={() => removeRegistration(r.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
