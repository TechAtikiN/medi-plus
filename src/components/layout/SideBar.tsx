import { Bars3Icon } from '@heroicons/react/24/solid'

import { useRouter } from "next/router"
import { useState } from 'react'
const navLinks: SidebarLink[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: 'xyz'
  },
  {
    title: 'Predict',
    path: 'predict',
    icon: 'xyz'
  },
  {
    title: 'Doctors near me',
    path: 'doctors',
    icon: 'xyz'
  },
  {
    title: 'Search Tablet',
    path: 'tablets',
    icon: 'xyz'
  },
  {
    title: 'Profile',
    path: 'profile',
    icon: 'xyz'
  },
  {
    title: 'Symptom Checker',
    path: 'symptom',
    icon: 'xyz'
  },

]
const SideBar = () => {
  const router = useRouter()
  const [selectedItem, setSelectedItem] = useState<string>('/' + router.pathname.split('/')[0])

  const handleLinkNavigation = (link: SidebarLink) => {
    setSelectedItem(link.path)
    router.push(link.path)
  }

  return (
    <nav>
      <h1 className='text-3xl text-purple-800 font-bold mx-10 my-5 text-center'>MediPlus</h1>

      <div>
        {navLinks.map(link => (
          <div onClick={() => handleLinkNavigation(link)}
            className=
            {`flex space-x-3 px-3 py-2 hover:cursor-pointer 
            ${link.path === selectedItem ? 'bg-purple-800' : 'bg-white'}
             hover:bg-purple-800 hover:text-white bg-white m-4 rounded-lg`}
          >
            <Bars3Icon className='h-6 w-6' />
            <button className='text-xl font-semibold'>{link.title}</button>
          </div>
        ))}
      </div>

    </nav>
  )
}

export default SideBar
