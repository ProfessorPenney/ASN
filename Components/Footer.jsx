import Link from 'next/link'

import Arrow2 from './DoubleArrow'
import Arrow1 from './SingleArow'

const Footer = () => {
   return (
      <footer>
         <p>
            Copyright &#169; {new Date().getFullYear()} <span>Arsenal Sports Nutrition</span> - All
            Rights Reserved
         </p>
         <div>
            <h3>
               Navigation &nbsp;
               <Arrow2 /> &nbsp;
            </h3>
            <nav>
               <Link href='/'>
                  <a>
                     <li>
                        Home &nbsp;
                        <Arrow1 />
                     </li>
                  </a>
               </Link>
               <Link href='/about'>
                  <a>
                     <li>
                        About &nbsp;
                        <Arrow1 />
                     </li>
                  </a>
               </Link>
               <Link href='/products'>
                  <a>
                     <li>
                        Products &nbsp;
                        <Arrow1 />
                     </li>
                  </a>
               </Link>
               <Link href='/apparel'>
                  <a>
                     <li>
                        Apparel &nbsp;
                        <Arrow1 />
                     </li>
                  </a>
               </Link>
               <Link href='/contact'>
                  <a>
                     <li>
                        Contact &nbsp;
                        <Arrow1 />
                     </li>
                  </a>
               </Link>
            </nav>
         </div>
      </footer>
   )
}

export default Footer
