import React from "react";
import { Button, Header, Icon, Modal } from "semantic-ui-react";

function EditModal(props) {
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState();
    const hanldeClick = () => {
        props.handleEdit(text, props.data.key);
        setOpen(false);
    };
    return (
        <Modal
            closeIcon
            open={open}
            trigger={
                <span className="right icon-size">
                    <i className="edit icon "></i>
                </span>
            }
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
        >
            <Header icon="edit icon" content="Edit Todo" />
            <Modal.Content>
                <div style={{ marginBottom: "2%" }} className="ui fluid icon input ">
                    <input
                        type="text"
                        placeholder="Enter your Task"
                        onChange={(e) => {
                            setText({ text: e.target.value });
                        }}
                    />
                </div>
            </Modal.Content>
            <Modal.Actions>
                <Button color="red" onClick={() => setOpen(false)}>
                    <Icon name="remove" /> Cancel
        </Button>
                <Button color="green" onClick={() => hanldeClick()}>
                    <Icon name="checkmark" /> Update
        </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default EditModal;
