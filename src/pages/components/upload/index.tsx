import { Card, Col, Row, Space, Switch, Tabs, TabsProps, Typography } from 'antd';
import { useState } from 'react';

import { Iconify } from '@/components/icon';
import { Upload, UploadAvatar, UploadBox } from '@/components/upload';
import { fBytes } from '@/utils/format-number';

export default function UploadPage() {
  const [thumbnail, setThumbnail] = useState(false);
  const onChange = (checked: boolean) => {
    setThumbnail(checked);
  };

  const ThumbnailSwitch = <Switch size="small" checked={thumbnail} onChange={onChange} />;

  const helpText = (
    <Typography.Text type="secondary" style={{ fontSize: 12 }}>
      Allowed *.jpeg, *.jpg, *.png, *.gif
      <br /> max size of {fBytes(3145728)}
    </Typography.Text>
  );

  const boxPlaceHolder = (
    <div className="flex flex-col">
      <Iconify icon="eva:cloud-upload-fill" size={40} />
      <Typography.Text type="secondary">Upload File</Typography.Text>
    </div>
  );

  const UploadFileTab = (
    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
      <Card title="Upload Multi File" className="w-full" extra={ThumbnailSwitch}>
        <Upload thumbnail={thumbnail} name="multi" />
      </Card>
      <Card title="Upload Single File" extra={ThumbnailSwitch}>
        <Upload thumbnail={thumbnail} maxCount={1} name="single" />
      </Card>
    </Space>
  );
  const UploadAvatarTab = (
    <Card
      title="Upload Avatar"
      bodyStyle={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <UploadAvatar helperText={helpText} />
    </Card>
  );

  const UploadBoxTab = (
    <Row gutter={20}>
      <Col span={2}>
        <UploadBox />
      </Col>
      <Col span={16}>
        <UploadBox placeholder={boxPlaceHolder} />
      </Col>
    </Row>
  );

  const TABS: TabsProps['items'] = [
    { key: 'upload--file', label: 'Upload Single File', children: UploadFileTab },
    { key: 'upload-avatar', label: 'Upload Avatar', children: UploadAvatarTab },
    { key: 'upload-box', label: 'Upload Box', children: UploadBoxTab },
  ];

  return <Tabs items={TABS} />;
}
