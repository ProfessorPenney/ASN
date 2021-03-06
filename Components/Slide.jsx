import { useEffect, useState } from 'react'
import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid'

import slideStyles from './slide.module.scss'

const Slide = ({ firstItem, apparel, position, loading = 'eager' }) => {
   const [item1, setItem1] = useState(0)
   const [item2, setItem2] = useState(0)
   const [item3, setItem3] = useState(0)

   useEffect(() => {
      getItems()
   }, [])

   const getItems = () => {
      let temp = firstItem
      while (temp >= apparel.length) temp -= apparel.length
      setItem1(temp)
      setItem2(++temp === apparel.length ? (temp = 0) : temp)
      setItem3(++temp === apparel.length ? 0 : temp)
   }

   return (
      <div
         className={slideStyles.slide}
         style={{ transform: `translateX(${150 * (firstItem / 3 - position)}%` }}>
         {[item1, item2, item3].map(i => (
            <Link key={uuidv4()} href='/apparel'>
               <a>
                  <img src={apparel[i].pic} alt={apparel[i].name} loading={loading} />
               </a>
            </Link>
         ))}
      </div>
   )
}

export default Slide
