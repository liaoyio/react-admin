import { useTranslation } from 'react-i18next';
import { AppLocalePicker } from '@/components/app';

import LoginForm from './LoginForm';
import MobileForm from './MobileForm';
import QrCodeFrom from './QrCodeForm';
import RegisterForm from './RegisterForm';
import ResetForm from './ResetForm';
import { Navigate } from 'react-router-dom';
import { LoginStateProvider } from '@/context/LoginStateProvider';
import { useUserToken } from '@/store/userStore';

import DashboardImg from '@/assets/images/background/dashboard.png';
import Overlay2 from '@/assets/images/background/overlay_2.jpg';

function Login() {
  const { t } = useTranslation();
  const token = useUserToken();

  // 判断用户是否有权限
  if (token.accessToken) {
    // 如果有授权，则跳转到首页
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <main className="relative flex min-h-screen flex-row">
      <div
        className="hidden grow flex-col items-center justify-center gap-[80px] bg-center bg-no-repeat xl:flex"
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.88), rgba(255, 255, 255, 0.88)) center center / cover no-repeat,url(${Overlay2})`,
        }}
      >
        <h3 className="text-2xl font-bold leading-normal lg:text-3xl xl:text-4xl">
          {t('sys.login.signInPrimaryTitle')}
        </h3>
        <img className="max-w-[720px]" src={DashboardImg} alt="dashboard-img" />
        <div className="flex flex-row gap-[16px] text-2xl">{t('sys.login.signInSecondTitle')}</div>
      </div>

      <div className="mx-auto flex w-full !min-w-[400px] max-w-[480px] flex-col px-[16px] py-[120px] lg:px-[64px] lg:py-[240px]">
        <LoginStateProvider>
          <LoginForm />
          <MobileForm />
          <QrCodeFrom />
          <RegisterForm />
          <ResetForm />
        </LoginStateProvider>
      </div>
      <div className="absolute right-0 top-0">
        <AppLocalePicker />
      </div>
    </main>
  );
}
export default Login;
