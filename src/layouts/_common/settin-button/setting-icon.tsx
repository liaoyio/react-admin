import { IconButton, SvgIcon } from '@/components/icon';
import { m } from 'framer-motion';
import { varHover } from '@/components/animate/variants/action';

type Props = {
  onClick: () => void;
  drawerOpen: boolean;
};

/** 带循环旋转动画的设置图标 */
export default function SettingIcon({ onClick, drawerOpen }: Props) {
  return (
    <div className="flex items-center justify-center">
      <m.div
        animate={{
          rotate: [0, drawerOpen ? 0 : 360],
        }}
        transition={{
          duration: 12,
          ease: 'linear',
          repeat: Infinity,
        }}
        whileTap="tap"
        whileHover="hover"
        variants={varHover(1.05)}
        onClick={() => onClick()}
      >
        <IconButton className="h-10 w-10">
          <SvgIcon icon="ic-setting" size="24" />
        </IconButton>
      </m.div>
    </div>
  );
}
