import { Registration } from '../data/courses'
import RegistrationList from './RegistrationList'
import RegistrationSummary from './RegistrationSummary'



// type RegistrationDashboardProps = {
//     registrations: Registration[]
//     onRemove: (id: string) => void
// }


export default function RegistrationDashboard() {
    return (
        <div>
            <RegistrationSummary />
            <RegistrationList />
        </div>
    )
}