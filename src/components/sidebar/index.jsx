import React from "react";
import { BarChart2, Users, Activity, PieChart } from "lucide-react";

const Sidebar = () => {
   const logout = () => {
     localStorage.removeItem("token");
     navigate("/");
   };
  return (
    <aside className="h-screen w-64 bg-white shadow-xl border-r px-6 py-8 fixed top-0 left-0 h-[100vh] flex flex-col">
      <nav className="flex flex-col gap-4">
        <a
          href="#"
          className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <BarChart2 className="w-5 h-5 text-indigo-600" />
          <span className="font-medium">Statistikalar</span>

          
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <Users className="w-5 h-5 text-green-600" />
          <span className="font-medium">Users Stats</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <Activity className="w-5 h-5 text-red-500" />
          <span className="font-medium">Activity</span>
        </a>

        <a
          href="#"
          className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <PieChart className="w-5 h-5 text-yellow-500" />
          <span className="font-medium">Reports</span>
        </a>
        <button
          className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-3 rounded-lg transition"
          onClick={logout}
        >
          Chiqish
        </button>
      </nav>

      <div className="mt-auto pt-6 border-t">
        <p className="text-sm text-gray-500">© 2025 Dashboard</p>
      </div>
    </aside>
  );
};

export default Sidebar;
