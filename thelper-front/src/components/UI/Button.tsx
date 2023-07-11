import { MouseEvent } from 'react'

interface Props {
    title: string
    onClick: (e: MouseEvent) => void
}

const Button = ({ title, onClick }: Props) => {
  return (
    <button onClick={(e: MouseEvent) => onClick(e)}>{title}</button>
  )
}

export default Button;