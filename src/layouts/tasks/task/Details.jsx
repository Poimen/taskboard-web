import React from 'react';
import { Breadcrumb, Icon, Switch, Avatar, Tag, Tabs, Empty, Button, Badge, Input } from 'antd';
import './Details.css';

const { TabPane } = Tabs;

function Details() {
  return (
    <>
      <div className="mr-4 ml-4">
        <div className="p-4 flex flex-row flex-auto mx-auto justify-between bg-white border-b-2 border-gray-300">
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Icon className="text-blue-600 pr-2" style={{ fontSize: 14 }} type="bars"></Icon>
                <span className="text-base text-blue-600">Tasks</span>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <span className="text-base text-blue-600">25</span>
              </Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
      { /* TODO: Sort out hieght hack */}
      <div className="ml-8 h-screen">
        <div className="flex justify-center h-screen">
          <div className="mt-8 mr-8 flex flex-col w-3/4 ">
            <div className="flex justify-start ">
              <div className="w-8/12">
                <div className="flex items-center">
                  <Avatar shape="square" size={55} style={{ color: 'grey' }}>AS</Avatar>
                  <div className="flex flex-col ml-2 text-2xl text-gray-800 font-medium">
                    <span>Check some pricing</span>
                    <span className="text-gray-500 text-xs font-normal">Connected to Boing Boing Transport</span>
                  </div>
                </div>
              </div>
              <div className="w-4/12 flex flex-col items-end justify-center">
                <span className="text-xs text-gray-500">
                  Created a moment ago (26 February 2020 at 2:30pm)
                </span>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="mt-4">
              <div>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, in! Dignissimos ipsam eligendi nemo totam asperiores dolorum, tempore quo fuga delectus facere saepe iste soluta officia velit nostrum, obcaecati quasi?
                Obcaecati placeat officiis alias ut voluptate iste expedita ad magni doloremque quae? Suscipit asperiores nostrum tempore vero, eligendi tempora porro sed dolorum! Ab dolor, aut eveniet quaerat veniam commodi excepturi?
                Reprehenderit expedita soluta eaque quisquam rerum dicta recusandae at aliquid odit nulla harum molestias sit magnam praesentium saepe illo nesciunt, similique iure placeat officia, maxime quis sint. Nihil, illo adipisci.
                Delectus reprehenderit cumque, aperiam, iure quis quod blanditiis et nobis dolor repellendus quia minus quae dolores aspernatur omnis modi. Dolorem officiis corporis eius repellat consectetur ad, animi doloribus blanditiis quaerat?
                Ducimus vitae, distinctio adipisci doloribus soluta aperiam praesentium fuga magnam saepe repellendus, inventore autem corrupti necessitatibus hic officia maxime expedita nihil dicta sed iste possimus magni maiores. Molestiae, tenetur? Odit.
                Adipisci nam esse corrupti architecto enim non cum, doloribus dolores, nesciunt voluptatibus voluptatum, illum voluptates. Cumque ab illum veritatis voluptas distinctio, doloremque fuga sed ex nisi non pariatur quibusdam fugiat.
                Excepturi voluptates officia velit, quaerat similique eligendi quibusdam, culpa pariatur iure, assumenda ex fuga repellendus maxime exercitationem molestiae aspernatur? Quidem beatae hic sunt eius voluptatibus doloribus tempora amet numquam laudantium?
                Tempora consequuntur modi deserunt, tempore iusto aliquam nesciunt veritatis incidunt accusamus illum cupiditate adipisci consequatur commodi? Dignissimos ipsum nesciunt ipsa at autem corporis odit numquam, itaque repellat tempore totam officia.
                Autem esse eveniet maiores ex illo! Eveniet eaque distinctio accusamus soluta dicta ipsum. Magnam quaerat delectus accusamus architecto animi eaque, totam in ea minima aut repellendus numquam, obcaecati sit eveniet?
              </div>
              <div className="flex mt-10 justify-end">
                <Button.Group>
                  <Button>Assign</Button>
                  <Button>Suspend</Button>
                  <Button>Do Something else</Button>
                </Button.Group>
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultActiveKey="1" animated={false} tabPosition='top'>
                <TabPane tab="Comments" key="1">
                  <div className="mt-8 mb-8">
                    <Empty description="No comments yet..." />
                  </div>
                  <div className="mt-16 mb-8">
                    <div className="flex items-center justify-start">
                      <div className="mr-4">
                        <Avatar size={55} style={{ color: 'grey' }}>AG</Avatar>
                      </div>
                      <div className="w-full">
                        {/* TODO : Switch out with reac-quill */}
                        <Input placeholder="Add comment..." onClick={() => console.log('clicked')}></Input>
                      </div>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="History" key="2">
                  <div className="mt-8 mb-8">
                    <Empty description="No history here..." />
                  </div>
                </TabPane>
                <TabPane tab="Workflow" key="3">
                  <div className="mt-8 mb-8">
                    <Empty description="No workflow here..." />
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </div>
          <div className="pl-8 w-1/4 ml-2 bg-task-sidebar border-l-2">
            <table className="w-full text-left table-fixed">
              <thead>
              </thead>
              <colgroup>
                <col className="w-1/2"></col>
                <col className="w-1/2"></col>
              </colgroup>
              <tbody className="align-baseline">
                <tr>
                  <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Assinged to:</td>
                  <td className="p-4 border-b border-gray-300 break-words">Auguste Gusteau</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Reported by:</td>
                  <td className="p-4 border-b border-gray-300 break-words">Abominable Snowman</td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Status:</td>
                  <td className="p-4 border-b border-gray-300 break-words">
                    <Badge status="success" text="Assigned" />
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Priority:</td>
                  <td className="p-4 border-b border-gray-300 break-words">
                    <Tag color="red" key="urgent">
                      Urgent
                    </Tag>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Company:</td>
                  <td className="p-4 border-b border-gray-300 break-words">Boing Boing Transport</td>
                </tr>
                <tr>
                  <td className="p-4 whitespace-no-wrap border-b border-gray-300">
                    Tags:
                    <br />
                  </td>
                  <td className="p-4 whitespace-pre border-b border-gray-300">
                    <Tag color="geekblue" closable onClose={e => e.preventDefault()} key="bulk">
                      Bulk
                    </Tag>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-b border-gray-300 whitespace-no-wrap">Notifications:</td>
                  <td className="p-4 border-b border-gray-300 break-words">
                    <Switch defaultChecked checkedChildren={<Icon type="check" />} unCheckedChildren={<Icon type="close" />} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <div className="w-3/4">
            <Card className="mt-8 shadow">
              Task Activity
              s
              dfsdfdsfds
              sdfsdfsdfd
              sdfsdfsdfddsf

              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aspernatur eligendi iste odio. Consequatur quae non ducimus autem praesentium, repellat soluta a numquam debitis repudiandae, dicta, repellendus nam maxime obcaecati!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aspernatur eligendi iste odio. Consequatur quae non ducimus autem praesentium, repellat soluta a numquam debitis repudiandae, dicta, repellendus nam maxime obcaecati!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae aspernatur eligendi iste odio. Consequatur quae non ducimus autem praesentium, repellat soluta a numquam debitis repudiandae, dicta, repellendus nam maxime obcaecati!
            </Card>
          </div>
          <div className="flex flex-col w-1/4 ml-2">
            <div>
              <Card className="mt-8 shadow">
                Actions
              </Card>
            </div>
            <div>
              <Card className="mt-2 shadow">
                Subtasks
              </Card>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Details;
