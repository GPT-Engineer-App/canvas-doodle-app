import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex flex-col min-h-screen p-6 overflow-hidden items-center justify-start bg-gray-100">
      <header className="w-full p-4 bg-blue-500 text-white flex items-center justify-between">
        <h1>Drawing App</h1>
        <img src="/path/to/new/icon.png" alt="Logo" className="h-8 w-8" />
      </header>
      <Outlet />
    </main>
  );
};

export default Layout;