import React,{createContext,useContext,useEffect,useMemo,useState} from 'react';
import {fetchPoliciesForUser} from '../api/policies.api';
import {POLICIES_PAGE_SIZE} from '../constants/policies.constants';

export const PoliciesContext=createContext(null);

export function PoliciesProvider({children}){
 const [policies,setPolicies]=useState([]);
 const [loading,setLoading]=useState(true);
 const [page,setPage]=useState(1);
 useEffect(()=>{fetchPoliciesForUser().then(d=>{setPolicies(d);setLoading(false);});},[]);
 const active=useMemo(()=>policies.filter(p=>p.status==='Active'),[policies]);
 const visible=useMemo(()=>{const s=(page-1)*POLICIES_PAGE_SIZE;return active.slice(s,s+POLICIES_PAGE_SIZE);},[active,page]);
 const totalPages=Math.ceil(active.length/POLICIES_PAGE_SIZE);
 return <PoliciesContext.Provider value={{loading,page,totalPages,visible,setPage}}>{children}</PoliciesContext.Provider>
}
