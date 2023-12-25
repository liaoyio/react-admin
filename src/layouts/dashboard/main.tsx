import { Content } from 'antd/es/layout/layout';
import { Outlet } from 'react-router-dom';
import { forwardRef } from 'react';
import { useSettings } from '@/store/settingStore';
import { ThemeLayout } from '#/enum';

const Main = forwardRef<HTMLDivElement>((_, ref) => {
  const { themeStretch, themeLayout } = useSettings();
  return (
    <Content
      ref={ref}
      className={`overflow-auto p-2 ${themeLayout === ThemeLayout.Horizontal ? '' : 'pt-20'}`}
    >
      <div className={`mx-auto h-full w-full sm:px-2 ${themeStretch ? '' : 'xl:max-w-screen-xl'}`}>
        <Outlet />
      </div>
    </Content>
  );
});

export default Main;
