import { ReactNode } from "react"

type PropTypes = {
  left: ReactNode
  right: ReactNode
}

export default function DisplayStat({ left, right }: PropTypes) {
  return (
    <div className="w-full flex justify-between p-4 bg-gray rounded-xl font-semibold">
      <span className="text-gray-middle">{left}</span>
      <span className="font-extrabold text-2xl text-gray-dark">{right}</span>
    </div>
  )
}
