import React from 'react';
import { Card, Tag, Button } from 'antd';

function Information() {
  function preventDefault(e) {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  }

  return (
    <>
      <Card className="w-1/3 pb-4" title="Details" extra={<Button type="dashed" shape="circle" icon="edit" />}>
        <table className="w-full text-left table-fixed">
          <thead>
          </thead>
          <colgroup>
            <col className="w-1/3"></col>
            <col className="w-2/3"></col>
          </colgroup>
          <tbody className="align-baseline">
            <tr>
              <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Email:</td>
              <td className="p-4 border-b border-gray-300 break-words">example@sxample.com</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Phone:</td>
              <td className="p-4 border-b border-gray-300">24872990234</td>
            </tr>
            <tr>
              <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Address:</td>
              <td className="p-4 border-b border-gray-300">42 Wallaby Way, Sydney, 4051, sdfkjhdskjfh</td>
            </tr>
            <tr>
              <td className="p-4 whitespace-no-wrap">
                Tags:
                <br />
                <div className="text-blue-600">
                  + Add tag
                </div>
              </td>
              <td className="p-4 whitespace-pre">
                <Tag color="geekblue" closable onClose={preventDefault} key="bulk">
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