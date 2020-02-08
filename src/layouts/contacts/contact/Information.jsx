import React from 'react';
import { Card, Tag, Button } from 'antd';

function Information() {
  return (
    <>
      <Card className="w-1/3" title="Details" extra={<Button type="dashed" shape="circle" icon="edit" />}>
        <table class="w-full text-left table-collapse">
          <thead>
            <colgroup>
              <col className="w-1/2"></col>
              <col className="w-1/2"></col>
            </colgroup>
          </thead>
          <tbody class="align-baseline">
            <tr>
              <td class="p-4 border-b border-gray-300 whitespace-no-wrap">Email:</td>
              <td class="p-4 border-b border-gray-300 whitespace-pre">example@sxample.com</td>
            </tr>
            <tr>
              <td class="p-4 border-b border-gray-300 whitespace-no-wrap">Phone:</td>
              <td class="p-4 border-b border-gray-300 whitespace-pre">24872990234</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Tags:</td>
              <td className="p-4 border-b border-gray-300 whitespace-pre">
                <Tag color="geekblue" key="bulk">
                  Bulk
                </Tag>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </>
  );
}

export default Information;
