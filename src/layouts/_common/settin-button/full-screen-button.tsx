import { Button } from 'antd';
import { SvgIcon } from '@/components/icon';
import { useFullscreen } from 'ahooks';
import { useThemeToken } from '@/theme/hooks';

/** 全屏切换按钮 */
export default function FullScreenButton() {
  const { colorPrimary } = useThemeToken();
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(document.body);

  return (
    <Button type="dashed" block size="large" onClick={() => toggleFullscreen()} className="w-full">
      <div className="flex items-center justify-center">
        {isFullscreen ? (
          <>
            <SvgIcon icon="ic-settings-exit-fullscreen" color={colorPrimary} className="!m-0" />
            <span className="ml-2">Exit FullScreen</span>
          </>
        ) : (
          <>
            <SvgIcon icon="ic-settings-fullscreen" className="!m-0" />
            <span className="ml-2 text-gray">FullScreen</span>
          </>
        )}
      </div>
    </Button>
  );
}
