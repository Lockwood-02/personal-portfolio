import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from "js-cookie"

function Header() {

    const [theme, setTheme] = useState(() => {
        // Check for a "theme" cookie
        const cookieTheme = Cookies.get("theme");
    
        // If the cookie exists and is "dark", return "dark", otherwise return "light"
        return cookieTheme === "dark" ? "dark" : "light";
      });
    
      function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
    
        // Update the state variable to reflect the new theme preference
        setTheme(newTheme);
    
        // Set a "theme" cookie with the new theme preference
        Cookies.set("theme", newTheme);
      }
    
      useEffect(() => {
          if (theme === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }, [theme])

        const sun = (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
              />
            </svg>
          )
        
          const moon = (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='white'
              className='w-6 h-6 fill-current text-[#2c2c2c]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
              />
            </svg>
          )

				// const btn = document.querySelector("button.mobile-menu-button");
				// const menu = document.querySelector(".mobile-menu");

				// btn.addEventListener("click", () => {
				// 	menu.classList.toggle("hidden");
				// });

    return (

    <>    
    <section className='pt-12'> 
        <div>
            <a href='/' className='hidden md:flex text-xl font-bold dark:text-stone-300'>
                <span>Isaac Lockwood</span>
            </a>

            {/* Mobile Menu */}
            <div className="md:hidden flex justify-center items-center">
            <a href='/' className='flex md:hidden justify-center text-xl font-bold dark:text-stone-300'>
                <span>Isaac Lockwood</span>
            </a>
            </div>

            <div class="md:hidden flex mobile-menu justify-center">
            <ul class="">
              <Link to="/" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-amber-500 mr-4">
                <span className='inline-block'>Home</span>
              </Link>
              <Link to="/about" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-emerald-400 mr-4">
                <span className='inline-block'>About</span>
              </Link>
              <Link to="/projects" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-fuchsia-500 mr-4">
                <span className='inline-block'>Projects</span>
              </Link>
              <Link to="/contact" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-lime-500 mr-4">
                <span className='inline-block'>Contact</span>
              </Link>
              <a href='https://github.com/Lockwood-02' target="_blank" rel="noreferrer" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-red-400 hover:fill-white">
                <span>GitHub</span>
              </a>
            </ul>
          </div>

            <nav className="hidden md:flex items-center justify-between mt-4 mb-4">
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div>
                        <Link to="/" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-amber-500 mr-12">
                            <span className='inline-block'>Home</span>
                        </Link>
                        <Link to="/about" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-emerald-400 mr-12">
                            <span className='inline-block'>About</span>
                        </Link>
                        <Link to="/projects" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-fuchsia-500 mr-12">
                            <span className='inline-block'>Projects</span>
                        </Link>
                        <Link to="/contact" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-lime-500 mr-12">
                            <span className='inline-block'>Contact</span>
                        </Link>
                        <a href='https://github.com/Lockwood-02' target="_blank" rel="noreferrer" className="inline-block mt-4 lg:inline-block lg:mt-0 text-gray-500 dark:text-gray-400 hover:text-stone-800 hover:border-b-2 hover:-mb-2 dark:hover:text-white dark:hover:border-b-2 dark:hover:-mb-2 border-red-400 mr-12 hover:fill-white">
                            <span>GitHub</span>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='inline-block h-4 w-4 fill-gray-400 ml-1 '>
                                <g data-name="Layer 2">
                                    <g data-name="external-link">
                                        <rect width="24" height="24" opacity="0"></rect>
                                        <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z"></path>
                                        <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z"></path>
                                    </g>
                                </g>
                            </svg> */}
                        </a>
                    </div>
                </div>
                <button className='hidden md:flex items-center justify-center border rounded h-10 w-10 border-[#2c2c2c] dark:border-gray-400' onClick={toggleTheme}>
                    {/* <img className='flex h-7 w-7' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAYlJREFUWEftmDFuwkAQRe0rRIECWpSWs+QE1ClzDgpKak6QU0TQ0kZROigSixMggbD9LXms4a/HcZhFoVnh3WX/vBnPzpAmHT+jh+R07Sf2hyTtckSnzZeD3QqUwnafiwLUz2s+ZB+jfJzO9jWAbYmaCboXKONKE5y9z2tLQTSUpJlgdAI1wSw2GclfIxidQAhGbFpJ9kYweoEwQOZLGZM3I+hGYFdX907wbgR+bY65Lc/L73xELLoh+C+QFaUsYd+MoCZMppn4Bcp6jlUZzKWh6QXrKMFoBKLqGE+K3sJKMjT2WhP0L3Bd2jQoujSQhKUaUdZEybeWkcN8dZNULvEucLsq+tnHp3o/myhEYWlVMeNB2R9r5MwE3QqUeUsVioUl0SofBhILJdeIwWgFajdGI0bLhegxtH24MTAv6z+5r1EP4m2Gi90JlK7Gdya4LTGWV9UYjEagJCJvireXoQat9hwxFkqMxqB2qnuBjKhmmLUaojHI/Mf+m7a61OxiJriv+T/ri60GnAG1B7A4DYusaQAAAABJRU5ErkJggg==" alt="Theme" /> */}
                    {theme === 'dark' ? sun : moon}
                </button>
            </nav>
        </div>
    </section>
    </>
    )
}

export default Header;