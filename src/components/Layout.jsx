import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { Children, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { NotificationsBar } from "./NotificationsBar";

export const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { role } = useAuth();
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="layout">
      {role === 'directivos' && (
        <>
          {sidebarOpen && <div className="overlay" onClick={closeSidebar} />}
          <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
            <Sidebar onNavigate={closeSidebar} />
          </div>
          <div className="main-content">
            <TopBar toggleSidebar={toggleSidebar} />
            <div className="content-and-sidenots">
              <div className="page-content">{children}</div>
              <NotificationsBar></NotificationsBar>
            </div>
          </div>
        </>
      )}
      {role === 'padres_familia' && (
        <>
          {sidebarOpen && <div className="overlay" onClick={closeSidebar} />}
          <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
            <Sidebar onNavigate={closeSidebar} />
          </div>
          <div className="main-content">
            <TopBar toggleSidebar={toggleSidebar} />
            <div className="page-content">{children}</div>
          </div>
        </>
      )}
    </div>
  );
};

