import { Modal, Button, Icon } from 'antd';
import React from 'react';


class ModalPhoto extends React.Component {
  state = {
    modal1Visible: false,
    modal2Visible: false,
  };

  setModal1Visible(modal1Visible) {
    this.setState({ modal1Visible });
  }

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={() => this.setModal1Visible(true)}>
          Display a modal dialog at 20px to Top
        </Button>
        <Modal
          width = "1500px"
          title="20px to Top"
          style={{ top: 60 }}
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          onCancel={() => this.setModal1Visible(false)}
        >
          
          <div class = "container-fluid">
            
          </div>
          


        </Modal>
    
      </div>
    );
  }
}

export default ModalPhoto;