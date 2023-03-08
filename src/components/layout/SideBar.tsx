import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from 'next/link';
// {dasborad icon from heroicons}
import { useRouter } from 'next/router';
import { useState } from 'react';

const navLinks: SidebarLink[] = [
  {
    title: 'Dashboard',
    path: '/',
    icon: 'xyz',
  },
  {
    title: 'Predict',
    path: 'predict',
    icon: 'xyz',
  },
  {
    title: 'Doctors near me',
    path: 'doctors',
    icon: 'xyz',
  },
  {
    title: 'Search Tablet',
    path: 'tablets',
    icon: 'xyz',
  },
  {
    title: 'Profile',
    path: 'profile',
    icon: 'xyz',
  },
  {
    title: 'Symptom Checker',
    path: 'symptom',
    icon: 'xyz',
  },
];
const SideBar = () => {
  const router = useRouter();
  const [selectedItem, setSelectedItem] = useState<string>(
    '/' + router.pathname.split('/')[0]
  );

  const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <>
      <div className='sm:bg-indigo-700 sm:w-80 flex flex-col'>
        <div className='flex mx-1'>

          <button onClick={toggleNavLinks} className='sm:hidden text-xl font-semibold'>
            <Bars3Icon className='h-6 w-6' />
          </button>
          <h1 className='text-3xl  font-bold sm:mx-10 mx-3 my-4 text-left'>
            <span className='sm:text-white '>Medi</span><span className='sm:text-red-300 text-red-500'>Plus</span>
          </h1>

        </div>

        <div className='hidden md:block overflow-y-auto mt-2 '>
          {navLinks.map((link) => (
            <div

              className={` hover:font-bold font-semibold flex space-x-3 px-3 py-2 cursor-pointer 
                       hover:bg-gray-100 hover:text-indigo-800  m-2
                       ${link.path === selectedItem ? 'text-indigo-700 bg-gray-100 ' : ''}
                       `}
            >
              <Link href={`/${link.path}`} className='flex'>
                <Bars3Icon className='h-6 w-6 text-gray-200 hover:text-indigo-700 mr-3' />
                <p className={`text-sm hover:text-indigo-700 text-gray-200 text-left `}>{link.title}</p>
              </Link>
            </div>

          ))}
        </div>

        {showNavLinks && (
          <div className='md:hidden overflow-y-auto transition-all max-h-full min-w-full duration-200 bg-slate-200 ease-in-out '>
            {navLinks.map((link) => (
              <div
                key={link.path}
                onClick={() => {
                  // handleLinkNavigation(link);
                  toggleNavLinks();
                }}
                className={`flex  space-x-3 px-3 py-2 cursor-pointer 
              ${link.path === selectedItem ? 'bg-purple-800 text-white' : 'bg-slate-200'}
              hover:bg-purple-800 hover:text-white m-2`}
              >
                <Link href={`/${link.path}`} className='text-sm text-left font-semibold'>
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SideBar;
