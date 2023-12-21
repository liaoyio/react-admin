import type { CSSProperties } from 'react';

import CyanBlur from '@/assets/images/background/cyan-blur.png';
import RedBlur from '@/assets/images/background/red-blur.png';

export const BG_STYLE: CSSProperties = {
  backdropFilter: 'blur(20px)',
  backgroundImage: `url("${CyanBlur}"), url("${RedBlur}")`,
  backgroundRepeat: 'no-repeat, no-repeat',
  backgroundPosition: 'right top, left bottom',
  backgroundSize: '50, 50%',
  transform: 'none',
  transition: 'transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
};
