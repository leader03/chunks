import Image from 'next/image'
import Start from '@/components/Home'

import { Search, Filter } from '@/components'
import { fuels, yearsOfProduction } from '@/constants'

export default function Home() {
  return (
    <main className=' overflow-hidden text-red-600'>
      <Start />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className='home__filters'>
          <Search />

          <div className='home__filter-container'>
            <Filter title='fuel' options={fuels} />
            <Filter title='year' options={yearsOfProduction} />
          </div>
        </div>
      </div>
    </main>
  )
}
