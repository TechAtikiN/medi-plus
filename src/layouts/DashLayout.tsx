import { ReactNode } from "react"
import { Navbar, SideBar } from "../components"

interface Props {
  children: ReactNode
}
const DashLayout = ({ children }: Props) => {
  return (
    <div className='grid grid-cols-12'>
      <div className='min-h-screen h-full col-span-2 bg-indigo-400'>
        <SideBar />
      </div>

      <div className='min-h-screen h-full col-span-10 bg-white'>
        <Navbar />
        <main className='max-w-[90rem] mx-auto'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashLayout
