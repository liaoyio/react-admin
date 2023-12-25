import { Icon, type IconProps } from '@iconify/react';
import styled from 'styled-components';

interface Props extends IconProps {
  size: IconProps['width'];
}

export default function Iconify({ icon, size = '1em', ...other }: Props) {
  return (
    <StyledIconify>
      <Icon icon={icon} width={size} height={size} {...other} />
    </StyledIconify>
  );
}

const StyledIconify = styled.span`
  svg {
    display: inline-block;
  }
`;
