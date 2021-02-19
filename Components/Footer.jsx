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
               <Link href='/Home'>
                  <li>
                     Home &nbsp;
                     <Arrow1 />
                  </li>
               </Link>
               <Link href='/About'>
                  <li>
                     About &nbsp;
                     <Arrow1 />
                  </li>
               </Link>
               <Link href='/Products'>
                  <li>
                     Products &nbsp;
                     <Arrow1 />
                  </li>
               </Link>
               <Link href='/Apparel'>
                  <li>
                     Apparel &nbsp;
                     <Arrow1 />
                  </li>
               </Link>
               <Link href='/Contact'>
                  <li>
                     Contact &nbsp;
                     <Arrow1 />
                  </li>
               </Link>
            </nav>
         </div>
      </footer>
   )
}

export default Footer
