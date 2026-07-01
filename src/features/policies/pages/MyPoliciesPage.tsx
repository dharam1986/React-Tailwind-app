import {PoliciesProvider} from '../context/PoliciesProvider';
import {PolicyList} from '../components/PolicyList';
import {Pagination} from '../components/Pagination';
export function MyPoliciesPage(){
 return <PoliciesProvider><PolicyList/><Pagination/></PoliciesProvider>
}
