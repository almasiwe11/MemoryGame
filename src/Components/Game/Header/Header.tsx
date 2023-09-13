import Logo from "../../Logo"

export default function Header() {
  return (
    <div className="flex justify-between wrapper">
      <Logo />
      <div className="flex gap-3">
        <div className="button bg-yellow text-white font-semibold p-2 px-4 rounded-full">
          Restart
        </div>
        <div className="button bg-gray text-gray-dark font-semibold p-2 px-4 rounded-full">
          New Game
        </div>
      </div>
    </div>
  )
}
