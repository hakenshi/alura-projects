import React from 'react'
import { Text } from '../Text'

interface HeaderProps{
  children: React.ReactNode
}

export default function Header ({children}: HeaderProps){
  return (
    <div>
      <Text>
        Header
      </Text>
      {children}
    </div>
  )
}
