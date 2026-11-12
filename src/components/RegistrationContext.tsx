import { createContext, ReactNode, useContext, useState } from 'react'
import { Registration } from '../data/courses'

type RegistrationContextValue = {
  registrations: Registration[]

  addRegistration: (input: Omit<Registration,'id'>) => void
  removeRegistration: ( id: string) => void
}

const RegistrationContext = createContext<RegistrationContextValue | undefined>(undefined)

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [registrations, setRegistrations] = useState<Registration[]>([])

  function addRegistration(input: Omit<Registration, 'id'>) {
    setRegistrations(prev => [...prev, { ...input, id: crypto.randomUUID() }])
  }

  function removeRegistration(id: string) {
    setRegistrations(prev => prev.filter(r => r.id !== id))
  }

  return (
    <RegistrationContext.Provider value={{ registrations, addRegistration, removeRegistration }}>
      {children}
    </RegistrationContext.Provider>
  )
}

export function useRegistrations() {
  const context = useContext(RegistrationContext)
  if (context === undefined) {
    throw new Error('useRegistrations must be used inside a RegistrationProvider')
  }
  return context
}

