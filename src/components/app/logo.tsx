import { NavLink } from 'react-router-dom';

import LogoSvg from '@/assets/icons/ic-logo.svg';

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <NavLink to="/">
      <img src={LogoSvg} alt="logo" className={className} />
    </NavLink>
  );
}
