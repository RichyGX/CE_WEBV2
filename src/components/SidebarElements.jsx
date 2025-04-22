import { NavLink } from "react-router-dom";



const SidebarElements = ({ iconName, TitleName, navName }) => {
  return (
    <NavLink to={navName}
      className={({ isActive }) =>
        `sideBarElement ${isActive ? 'active' : ''}`
      }
    >
       
        <span className="material-symbols-rounded">{iconName}</span>
        <p > {TitleName} </p>
    </NavLink>
  )
}

export default SidebarElements