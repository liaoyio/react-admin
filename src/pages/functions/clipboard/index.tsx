import { Card, Row, Col, Input, Tooltip, Typography } from 'antd';
import { ChangeEvent, useState } from 'react';

import { IconButton, Iconify } from '@/components/icon';
import { useCopyToClipboard } from '@/hooks/event/use-copy-to-clipboard';
import { faker } from '@faker-js/faker';

export default function ClipboardPage() {
  const { copyFn } = useCopyToClipboard();

  const [value, setValue] = useState('https://www.npmjs.com/package/');

  const textOnClick = faker.lorem.paragraphs({ min: 3, max: 5 });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const CopyButton = (
    <Tooltip title="Copy">
      <IconButton className="text-gray" onClick={() => copyFn(value)}>
        <Iconify icon="eva:copy-fill" size={20} />
      </IconButton>
    </Tooltip>
  );
  return (
    <Card>
      <Row gutter={12}>
        <Col span={12}>
          <Typography.Title level={5}>ON CHANGE</Typography.Title>
          <Input suffix={CopyButton} value={value} onChange={handleChange} />
        </Col>
        <Col span={12}>
          <Typography.Title level={5}>ON DOUBLE CLICK</Typography.Title>
          <Typography onDoubleClick={() => copyFn(textOnClick)}>{textOnClick}</Typography>
        </Col>
      </Row>
    </Card>
  );
}
