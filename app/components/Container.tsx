
interface Props{
    children: React.ReactNode
    className?: string
}

export default function Container({children, className}: Props){
  return (
    <div className="max-w-[900px] mx-auto w-[90%]">{children}</div>
  )
}
