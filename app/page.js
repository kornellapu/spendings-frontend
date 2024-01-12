import Image from 'next/image'
import AddSpendingForm from './(components)/form-add-spending'
import Spendings from './(components)/spendings'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
        <AddSpendingForm/>
        <Spendings/>
    </main>
  )
}
