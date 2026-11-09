export const courses = ['Web Development', 'Database Fundamentals', 'UX Design', 'Software Engineering'] as const
export type Course = (typeof courses)[number]

export type Registration = {
  id: string
  name: string
  email: string
  course: Course
}
