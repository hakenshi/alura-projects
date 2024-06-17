import React from 'react'
import { Text } from '../Text'

interface FeedProps {
    children: React.ReactNode
}

export default function Content({children}: FeedProps) {
  return (
    <div>
      <Text>
        Feed
      </Text>
        {children}
    </div>
  )
}
