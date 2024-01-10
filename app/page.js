import Image from 'next/image'
import AddSpendingForm from './AddSpendingForm'



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <AddSpendingForm/>
    </main>
  )
}
