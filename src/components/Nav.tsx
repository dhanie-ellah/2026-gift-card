import { faMoon, faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { theme_toggle } from '../redux/Action'

const Nav = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state: any) => state.isDark);

  return (
    <nav>
        <div className=" flex items-center justify-between p-4 px-6">
          <div className=" flex gap-2 items-center">
            <FontAwesomeIcon icon={faSnowflake} />
            <p>New year wishes</p>
          </div>
          <button onClick={() => dispatch(theme_toggle())}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </button>
        </div>
        <hr
          className={`outline-none border-none w-full h-[0.5px] ${
            isDark ? "bg-border_light" : "bg-border_dark"
          }`}
        />
      </nav>
  )
}

export default Nav