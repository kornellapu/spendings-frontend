'use client'

import AddSpendingForm from './(components)/form-add-spending'
import Spendings from './(components)/spendings'

import { postNewSpending, getAllSpendings } from "./(data-access)/data-access-layer";
import { useState, useEffect } from 'react';

export default function Home() {
  const [spendings, setSpendings] = useState([]);

  useEffect( ()=>{
    refresSpendingsData();
  }, []);

  const refresSpendingsData = () => {
    getAllSpendings().then( data => setSpendings(data) );
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <AddSpendingForm postFunctionCallback={postNewSpending} 
          refreshSpendingsCallback={refresSpendingsData}
        />
        <Spendings spendings={spendings}/>
    </main>
  )
}
