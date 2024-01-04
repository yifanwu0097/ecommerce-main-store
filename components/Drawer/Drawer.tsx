'use client';
import React, { MouseEventHandler, useState } from 'react';
import { Button, Drawer as AntDrawer, Checkbox, CollapseProps } from 'antd';
import { Collapse } from 'antd';
import { Slider } from 'antd';

import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { SliderMarks } from 'antd/es/slider';

interface DrawerProps {
  showDrawer: MouseEventHandler<HTMLElement>;
  open: boolean;
  onClose: () => void;
}
const onCheckChange = (checkedValues: CheckboxValueType[]) => {
  console.log('checked = ', checkedValues);
};


const marks: SliderMarks = {
  0: {
    style: {
      color: '#000',
    },
    label: <p>0 VNĐ</p>,
  },
  100: {
    style: {
      color: '#000',
    },
    label: <p>50.000.000 VNĐ</p>,
  },
};

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Availability',
    children: (
      <div>
        <Checkbox.Group style={{ width: '100%' }} onChange={onCheckChange}>
          <div className='flex flex-col gap-4'>
            <Checkbox value='In-stock'>In Stock (20)</Checkbox>
            <Checkbox value='Out-stock'>Out of Stock (33)</Checkbox>
          </div>
        </Checkbox.Group>
      </div>
    ),
  },
  {
    key: '2',
    label: 'Price',
    children: (
      <div className='pr-10'>
        <Slider max={100} step={10} onChange={(value) => console.log(value)} min={0} marks={marks} range defaultValue={[0, 100]} />
      </div>
    ),
  },
];

export const Drawer: React.FC<DrawerProps> = ({
  showDrawer,
  open,
  onClose,
}) => {
  return (
    <>
      <AntDrawer
        title='Filter'
        placement={'left'}
        width={500}
        onClose={onClose}
        open={open}
        // extra={
        //   <Space>
        //     <Button onClick={onClose}>X</Button>
        //     <PanelRightCloseIcon/>
        //   </Space>
        // }
      >
        <Collapse defaultActiveKey={['1']} ghost items={items} />
      </AntDrawer>
    </>
  );
};
