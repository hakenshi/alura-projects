import React, { HTMLAttributes } from "react"

interface TextProps {
    tag?: 'p' | 'li' | 'h1' | string
    children?: React.ReactNode
}

export const Text: React.FC<TextProps & HTMLAttributes<HTMLElement>> = ({tag: Tag = "p", children, ...rest}) => {

  return (
    <Tag {...rest}>
        {children}
    </Tag>
  )
}
