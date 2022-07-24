import logo from '../assets/default-monochrome-black.svg'

const navigation = [
  { name: 'OUR MISSION', href: '#' },
  { name: 'MEET YOUR TRAINER', href: '#' },
  { name: 'JOIN', href: '#' },

]

export default function Nav() {
  return (
    <header className="bg-yellow-300 sticky top-0 left-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-black lg:border-none">
          <div className="flex items-center">
            <a href="#">
              <span className="sr-only">Workflow</span>
              <img
                className="h-10 w-auto"
                src={logo}
                alt=""
              />
            </a>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-black/50">
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="ml-10 space-x-4">
            <a
              href="#"
              className="inline-block bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75 text-center"
            >
              Sign in
            </a>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-black hover:text-black/50">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}