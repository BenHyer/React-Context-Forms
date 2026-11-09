import RegistrationForm from './components/RegistrationForm'
import RegistrationList from './components/RegistrationList'
import RegistrationSummary from './components/RegistrationSummary'

export default function App() {
  return (
    <main className="container">
      <header><span className="eyebrow">React learning lab</span><h1>Course Registration</h1><p>Build a form, validate it, then share registration data across components.</p></header>
      <div className="layout"><RegistrationForm /><div className="stack"><RegistrationSummary /><RegistrationList /></div></div>
    </main>
  )
}
