import { m } from 'framer-motion';
import { repeat } from 'ramda';
import { useMemo } from 'react';

import Cover3 from '@/assets/images/cover/cover_3.jpg';
import { getVariant } from '@/components/animate/variants';
import MotionContainer from '@/components/animate/motion-container';
import { useThemeToken } from '@/common/theme/hooks';

const TEXT = 'YiAdmin';

type Props = {
  isText: boolean;
  isMulti: boolean;
  variant: string;
};
export default function ContainerView({ isText, variant, isMulti }: Props) {
  const varients = useMemo(() => getVariant(variant), [variant]);
  const imgs = useMemo(() => (isMulti ? repeat(Cover3, 5) : [Cover3]), [isMulti]);
  const { colorBgLayout } = useThemeToken();

  return (
    <div
      key={variant}
      className="overflow-hidden rounded-lg p-20"
      style={{ backgroundColor: colorBgLayout }}
    >
      {isText ? (
        <MotionContainer className="flex h-80 items-center justify-center text-6xl font-bold">
          {TEXT.split('').map((letter, index) => (
            <m.div key={index} variants={varients} className="ml-1">
              {letter}
            </m.div>
          ))}
        </MotionContainer>
      ) : (
        <MotionContainer className="flex flex-col items-center gap-6">
          {imgs.map((img, index) => (
            <m.img
              key={index}
              src={img}
              style={{
                objectFit: 'cover',
                width: '480px',
                height: isMulti ? '72px' : '320px',
                margin: 'auto',
                borderRadius: '8px',
              }}
              variants={varients}
            />
          ))}
        </MotionContainer>
      )}
    </div>
  );
}
