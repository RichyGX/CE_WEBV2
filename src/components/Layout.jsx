import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { Children, useState } from "react";

export const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="layout">
      {sidebarOpen && <div className="overlay" onClick={closeSidebar} />}

      <div className={`sidebar-container ${sidebarOpen ? "open" : ""}`}>
        <Sidebar onNavigate={closeSidebar} />
      </div>

      <div className="main-content">
        <TopBar toggleSidebar={toggleSidebar} />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
};
