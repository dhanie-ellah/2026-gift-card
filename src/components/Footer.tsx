import { useSelector } from 'react-redux'

const Footer = () => {
    const isDark = useSelector((state: any) => state.isDark);

  return (
    <footer>
        <hr
          className={`outline-none border-none w-full h-[0.5px] ${
            isDark ? "bg-border_light" : "bg-border_dark"
          }`} />
        <p className=" text-center  p-4 px-6">&copy; 2026 New Year Wishes. Spread the love</p>
      </footer>
  )
}

export default Footer