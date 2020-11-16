import React from "react";

import { Button, Header, Icon, Modal } from "semantic-ui-react";

function CleanModal(props) {
    const [open, setOpen] = React.useState(false);
    const clearList = () => {
        props.handleClearList();
        setOpen(false);
    };

    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={
                <div style={{ marginTop: "20px" }} className="ui buttons fluid">
                    <button
                        className="ui blue basic button "
                        onClick={this.handleClearList}
                    >
                        Clean List
          </button>
                </div>
            }
        >
            <Header icon>
                <Icon name="archive" />
        Delete All Todo List
      </Header>
            <Modal.Content>
                <p>
                    Your list is getting completely empty, would you like to delete all
                    todo list ?
        </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color="red" inverted onClick={() => setOpen(false)}>
                    <Icon name="remove" /> No
        </Button>
                <Button color="green" inverted onClick={() => clearList()}>
                    <Icon name="checkmark" /> Yes
        </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default CleanModal;
