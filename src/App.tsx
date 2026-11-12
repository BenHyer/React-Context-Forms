import RegistrationForm from './components/RegistrationForm'
import RegistrationDashboard from './components/RegistrationDashboard'
import { RegistrationProvider } from './components/RegistrationContext'
import { useState } from 'react'
import { Registration } from './data/courses'



export default function App() {
  const [registrations, setRegistrations] = useState<Registration[]>([])

  function addRegistration(input: Omit<Registration, 'id'>) {
    const newRegistration: Registration = { ...input, id: crypto.randomUUID() }
    setRegistrations(prev => [...prev, newRegistration])

  }

  function removeRegistration(id: string) {
    setRegistrations(prev => prev.filter(registration => registration.id !== id))
  }

  return (
    <RegistrationProvider>
    <main className="container">
      <header><span className="eyebrow">React learning lab</span><h1>Course Registration</h1><p>Build a form, validate it, then share registration data across components.</p></header>
       <div className="layout"><RegistrationForm /><RegistrationDashboard /></div> 
    </main>
    </RegistrationProvider>
  )
}
