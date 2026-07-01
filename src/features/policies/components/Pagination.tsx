import {usePolicies} from '../hooks/usePolicies';
export function Pagination(){
 const {page,totalPages,setPage}=usePolicies();
 return <div>{Array.from({length:totalPages},(_,i)=><button key={i} onClick={()=>setPage(i+1)}>{i+1}</button>)}</div>
}
