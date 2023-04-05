import { ReactNode } from "react"
import { SideBar } from "../components"

interface Props {
  children: ReactNode
}

const DashLayout = ({ children }: Props) => {
  return (
    <div className='overflow-hidden'>
      <div className='min-h-screen sm:flex'>
        <SideBar />
        
        <main className='min-w-screen'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default DashLayout
