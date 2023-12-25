import { Icon, type IconProps } from '@iconify/react';
import styled from 'styled-components';

interface Props extends IconProps {
  size?: IconProps['width'];
}

export default function Iconify({ icon, size = '1em', ...other }: Props) {
  return (
    <StyledIconify className="anticon">
      <Icon icon={icon} width={size} height={size} {...other} className="m-auto" />
    </StyledIconify>
  );
}

const StyledIconify = styled.span`
  vertical-align: middle;
  svg {
    display: inline-block;
  }
`;
