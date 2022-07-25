import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/default-monochrome-black.svg'

const navigation = [
  { name: 'OUR MISSION', href: '/ourMission' },
  { name: 'MEET YOUR TRAINER', href: '/meetYourTrainer' },
  { name: 'JOIN', href: '/join' },

]

export default function Nav() {
  return (
    <header className="bg-yellow-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-black lg:border-none">
          <div className="flex items-center">
            <Link to="/">
              <span className="sr-only">Hyper Exertion</span>
              <img
                className="h-10 w-auto"
                src={logo}
                alt=""
              />
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <>
                  <Link key={link.name} to={link.href} className="text-base font-medium text-black hover:text-black/50">
                    {link.name}
                  </Link>
                  <span>|</span>
                </>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4 text-center">
            <a
              href="#"
              className="inline-block bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 "
            >
              Sign in
            </a>
          </div>
        </div>
        <div className="py-4 flex justify-center items-center space-x-6 lg:hidden">
          {navigation.map((link) => (
              <Link key={link.name} to={link.href} className="text-base font-medium text-black hover:text-black/50">
                {link.name}
              </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
