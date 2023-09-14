import { BestTypes } from "../../../Context/ContextTypes"

type PropTypes = {
  best: BestTypes
}

export default function BestScore({ best }: PropTypes) {
  return (
    <div className="max-w-xl w-[90%] mx-auto font-semibold text-2xl lg:flex-center">
      <div className="flex lg:flex-col gap-5">
        <span className="font-extrabold text-gray-dark">
          {" "}
          Your best results
        </span>
        <div className="flex lg:flex-col  gap-3 w-full">
          <span className="text-2xl font-bold text-gray-middle">
            {" "}
            Time: {best.time}
          </span>
          <span className="text-2xl font-bold text-gray-middle">
            Moves: {best.moves}
          </span>
        </div>
      </div>
    </div>
  )
}
