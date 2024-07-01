import { Outlet } from "react-router-dom";
import { Brush } from "lucide-react";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <Brush className="h-6 w-6" />
          <span className="text-xl font-bold">Creative Canvas</span>
        </div>
      </header>
      <main className="flex-grow p-8 flex flex-col items-start justify-start bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;