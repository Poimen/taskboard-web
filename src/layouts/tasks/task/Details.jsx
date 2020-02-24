import React from 'react';
import { Breadcrumb, Icon, Card, Avatar, Tag, Tabs } from 'antd';

const { TabPane } = Tabs;

function Details() {
  return (
    <>
      <div className="p-3 flex flex-row flex-auto mx-auto justify-between bg-white border-b-2 border-gray-300">
        <div>
          <Breadcrumb>
            <Breadcrumb.Item>
              <Icon className="text-blue-600 pr-2" style={{ fontSize: 18 }} type="bars"></Icon>
              <span className="text-xl text-blue-600">Tasks</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <span className="text-xl text-blue-600">25</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          {/* <span className="text-xs text-blue-600"><Icon type="left"></Icon> Back to Clients</span> */}
        </div>
      </div>
      <div className="mr-4 ml-4">
        <div className="flex justify-center">
          <Card className="mt-8 shadow flex flex-col flex-grow-0 w-3/4">
            <div className="flex justify-start">
              <div className="w-8/12">
                <div className="flex items-center">
                  <Avatar style={{ color: 'black' }}>RS</Avatar>
                  <div className="flex flex-col ml-2 text-xl text-gray-700 font-bold">
                    <span>Check some pricing</span>
                    <span className="text-gray-500 text-xs font-normal">Connected to Boing Boing Transport</span>
                  </div>
                </div>
              </div>
              <div className="w-4/12 flex flex-col flex-1 items-end justify-end">
                <span>
                  Tags
                </span>
                <span className="text-xs">
                  Created a moment ago (26 February 2020 at 2:30pm)
                </span>
                <span className="text-xs text-gray-500">
                  Created by Agent
                </span>
              </div>
            </div>
            <hr className="mt-2" />
            <div className="flex mt-2">
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
            <div className="mt-8">
              <Tabs defaultActiveKey="1" animated={false} tabPosition='top'>
                <TabPane tab="Comments" key="1">
                </TabPane>
                <TabPane tab="History" key="2">
                </TabPane>
              </Tabs>
            </div>
          </Card>
          <Card className="mt-8 shadow flex-grow-0 w-1/4 ml-2" title="Details">
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
                  <td className="p-4 border-b border-gray-300">42 Wallaby Way, Sydney, 4051, sdfkjhdskjfh</td>
                </tr>
                <tr>
                  <td className="p-4 whitespace-no-wrap">
                    Tags:
                    <br />
                  </td>
                  <td className="p-4 whitespace-pre">
                    <Tag color="geekblue" closable onClose={e => e.preventDefault()} key="bulk">
                      Bulk
                    </Tag>
                  </td>
                </tr>
              </tbody>
            </table>
          </Card>

        </div>
        <div className="flex justify-center">
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
        </div>
      </div>
    </>
  );
}

export default Details;
