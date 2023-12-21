import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import Content from './content';
import Header from './header';
import Sidebar from './sidebar';
import { Progress } from '@/components/app';

export default function BasicLayout() {
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
    return () => setIsLoading(true);
  }, [pathname]);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <div>
      <Progress isAnimating={isLoading} />
      <div className="flex h-screen overflow-hidden">
        <div className="hidden border-r-[1px] border-dashed border-r-[#919eab33] lg:block">
          <Sidebar />
        </div>
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          <Header />
          <Content>
            <Outlet />
          </Content>
        </div>
      </div>
    </div>
  );
}
