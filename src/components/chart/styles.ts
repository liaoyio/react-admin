import { GlobalToken } from 'antd';
import styled from 'styled-components';

import { ThemeMode } from '#/enum';

export const StyledApexChart = styled.div<{ thememode: ThemeMode; theme: GlobalToken }>`
  .apexcharts-canvas {
    /* tooltip */
    .apexcharts-tooltip {
      color: ${(props) => props.theme.colorText};
      border-radius: 10px;
      backdrop-filter: blur(6px);
      background-color: ${(props) =>
        props.thememode === ThemeMode.Light ? 'rgba(255, 255, 255, 0.8)' : 'rgba(22, 28, 36, 0.8)'};
      box-shadow: ${(props) =>
        props.thememode === ThemeMode.Light
          ? `rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px`
          : `rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;`};
      .apexcharts-tooltip-title {
        text-align: center;
        font-weight: bold;
        background-color: rgba(145, 158, 171, 0.08);
      }
    }

    /* tooltip X */
    .apexcharts-xaxistooltip {
      color: ${(props) => props.theme.colorText};
      border-radius: 10px;
      backdrop-filter: blur(6px);
      border-color: transparent;
      box-shadow: ${(props) =>
        props.thememode === ThemeMode.Light
          ? `rgba(145, 158, 171, 0.24) 0px 0px 2px 0px, rgba(145, 158, 171, 0.24) -20px 20px 40px -4px`
          : `rgba(0, 0, 0, 0.24) 0px 0px 2px 0px, rgba(0, 0, 0, 0.24) -20px 20px 40px -4px;`};
      background-color: ${(props) =>
        props.thememode === ThemeMode.Light ? 'rgba(255, 255, 255, 0.8)' : 'rgba(22, 28, 36, 0.8)'};
      &::before {
        border-bottom-color: rgba(145, 158, 171, 0.24);
      }
      &::after {
        border-bottom-color: rgba(255, 255, 255, 0.8);
      }
    }

    /* LEGEND */
    .apexcharts-legend {
      padding: 0;
      .apexcharts-legend-series {
        display: inline-flex !important;
        align-items: ecnter;
      }
      .apexcharts-legend-text {
        line-height: 18px;
        text-transform: capitalize;
      }
    }
  }
`;
