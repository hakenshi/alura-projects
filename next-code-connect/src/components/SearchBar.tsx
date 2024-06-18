import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function SearchBar() {
  return (
    <form className='flex w-full gap-3 pb-5' action={'/'}>
      <div className='bg-cinza-500 p-2 gap-3 flex items-center flex-grow rounded text-cinza-200'>
          <FontAwesomeIcon className='p-1' icon={faSearch} /> 
          <input name='q' className='w-full h-full bg-transparent outline-none caret-cinza-200' type="text" placeholder='Insira o que você deseja buscar'/>
      </div>
      <button className='bg-verde-0 text-verde-2 px-4 py-3 rounded-lg'>Buscar</button>
    </form>
  )
}
