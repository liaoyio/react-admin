import { Button, theme } from 'antd';
import { SvgIcon } from '@/components/icon';
import { useFullscreen } from 'ahooks';

const { useToken } = theme;

export default function FullScreenButton() {
  const {
    token: { colorPrimary },
  } = useToken();
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
