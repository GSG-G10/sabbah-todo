import { Collapse, Button, Modal } from "antd";
import { useState } from "react";

const { Panel } = Collapse;

const Card = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { tasks, setTasks } = props;
  const [eleToRemove, setEleToRemove] = useState(null);
  const handleDelete = (e) => {
    const box =
      e.target.parentElement.parentElement.parentElement.parentElement;
    setEleToRemove(box);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    if (tasks) {
      const filtered = tasks.filter((ele) => ele.id !== eleToRemove.id);
      setTasks(filtered);
    }
    eleToRemove.parentElement.removeChild(eleToRemove);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  if (tasks.length) {
    return (
      <Collapse>
        {tasks.map((ele, i) => {
          return (
            <Panel header={ele.title} key={i} id={ele.id}>
              <p>{ele.description}</p>
              <p> Ends at: {ele.date} </p>
              <Button onClick={handleDelete} danger>
                {" "}
                Delete{" "}
              </Button>
              <Modal
                title="Warning !"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
              >
                <p>Are you sure you want to delete this task ?</p>
              </Modal>
            </Panel>
          );
        })}
      </Collapse>
    );
  } else {
    return <Panel header="Add new task to show it here" />;
  }
};
export default Card;
