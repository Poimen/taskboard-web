import React from 'react';
import { Avatar, Icon, Button, Tabs, Tag, Card } from 'antd';
import Office from '@svg/Office';

const { TabPane } = Tabs;

function Details() {
  const callback = () => { };

  return (
    <>
      <div className="mx-4">
        <div className="pt-3 pb-2 flex flex-row flex-auto mx-auto justify-between bg-white- border-b-2- border-gray-300">
          <div>
            <div className="flex items-center justify-between">
              <Avatar shape="square" size={55} style={{ color: 'grey' }} icon={<Icon component={Office} className="font-base" />}></Avatar>
              <div className="flex flex-col ml-2 text-2xl text-gray-800 font-medium">
                <div>
                  <span className="text-xl text-blue-600">Company</span>
                  <span className="mx-3 text-base text-gray-500">/</span>
                  <span className="text-xl text-blue-600">Boing Boing Transport</span>
                </div>
                <span className="text-gray-500 text-xs font-normal ml-1">Transport company</span>
              </div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <Button.Group>
              <Button><Icon type="left" /></Button>
              <Button><Icon type="right" /></Button>
            </Button.Group>
          </div>
        </div>
      </div>
      <div className="mx-4">
        {/* <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar size={64} className="">BB</Avatar>
            </div>
            <div className="pl-4">
              <div className="text-black text-2xl">
                Boing Boing Transport
              </div>
              <div className="text-gray-600 text-xs">
              </div>
            </div>
          </div>
        </div> */}
        {/* <hr /> */}
        <div className="">
          <div>
            <Tabs defaultActiveKey="1" animated={false} tabPosition='top' onChange={callback}>
              <TabPane tab="Information" key="1">
                <div className="mt-4 h-full flex justify-center">
                  <div className="mr-5 flex flex-row w-7/12">
                    <Card className="w-1/2 pb-4 flex-grow-0" title="Details" extra={<Button type="dashed" shape="circle" icon="edit" />}>
                      <table className="w-full text-left table-fixed">
                        <thead>
                        </thead>
                        <colgroup>
                          <col className="w-1/3"></col>
                          <col className="w-2/3"></col>
                        </colgroup>
                        <tbody className="align-baseline">
                          <tr>
                            <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Position:</td>
                            <td className="p-4 border-b border-gray-300 break-words">Senior Manager</td>
                          </tr>
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
                            <td className="p-4 border-b border-gray-300">42 Wallaby Way, Sydney, 4051</td>
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
                              <Tag color="geekblue" key="bulk">
                                Bulk
                              </Tag>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card>
                    <Card className="w-1/2 pb-4 ml-4 flex-grow-0" title="Appointments" extra={<Button type="dashed" shape="circle" icon="plus" />}>
                      <table className="w-full text-left table-fixed">
                        <thead>
                        </thead>
                        <colgroup>
                          <col className="w-1/4"></col>
                          <col className="w-3/4"></col>
                        </colgroup>
                        <tbody className="align-baseline">
                          <tr>
                            <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Meeting:</td>
                            <td className="p-4 border-b border-gray-300 break-words">
                              <div className="flex justify-between">
                                <span>
                                  12pm on 23 February 2020
                                  <br></br>
                                  <span className="text-xs text-gray-500">
                                    Reminder @ 11:55am 23/02/2020
                                  </span>
                                </span>
                                <span className="ml-1 flex flex-row justify-end items-center">
                                  <Button className="mr-2" icon="edit" />
                                  <Button className="mr-2" icon="check-circle"></Button>
                                  <Button className="mr-2" icon="delete"></Button>
                                </span>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </Card>
                  </div>
                  <div className="w-5/12">
                    <Card className="pb-4 flex-grow-0" title="Activity">
                      <Tabs type="card">
                        <TabPane tab="Timeline" key="1"></TabPane>
                        <TabPane tab="New Task" key="2"></TabPane>
                        <TabPane tab="New Contact" key="3"></TabPane>
                      </Tabs>
                    </Card>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="Notes" key="2">
              </TabPane>
              <TabPane tab="Contacts" key="3">
              </TabPane>
              <TabPane tab="Tickets" key="4">
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
