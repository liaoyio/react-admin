import { Outlet } from 'react-router-dom';

import Header from './header';
import Sidebar from './sidebar';

export default function BasicLayout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden border-r-[1px] border-dashed border-r-[#919eab33] lg:block">
        <Sidebar />
      </div>
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
