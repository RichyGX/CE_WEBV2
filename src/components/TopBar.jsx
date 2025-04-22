export const TopBar = ({ toggleSidebar }) => {
    return (
        <div className="topbar">
            <div className="topbar_leftside">
                <button className="hamburger" onClick={toggleSidebar}>
                    <span className="material-symbols-rounded">menu</span>
                </button>
            </div>

            <div className="topbar_rightside">
                <span className="material-symbols-rounded">notifications</span>
                <p> Nombre Usuario</p>
            </div>
        </div>
    );
};
