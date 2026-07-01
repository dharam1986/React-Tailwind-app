import {usePolicies} from '../hooks/usePolicies';
export function PolicyList(){
 const {visible}=usePolicies();
 return <div>{visible.map(p=><div key={p.policyNumber}>{p.policyNumber}</div>)}</div>
}
