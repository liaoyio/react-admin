import { memo } from 'react';
import ApexChart from 'react-apexcharts';

import { useThemeToken } from '@/theme/hooks';
import { useSettings } from '@/store/settingStore';

import { StyledApexChart } from './styles';

import type { Props as ApexChartProps } from 'react-apexcharts';

export default function Chart(props: ApexChartProps) {
  const { themeMode } = useSettings();
  const theme = useThemeToken();
  return (
    <StyledApexChart $thememode={themeMode} $theme={theme}>
      <ApexChart {...props} />
    </StyledApexChart>
  );
}
