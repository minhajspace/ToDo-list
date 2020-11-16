import React from "react";
import { Checkbox } from "semantic-ui-react";
import EditModal from "./Editmodal";
import "../App.css";
import CleanModal from "./Cleanmodal";
class InputTodo extends React.Component {
    state = {
        list: [],
        text: ""
    };

    onInputChange = (e) => {
        e.preventDefault();
        this.setState({
            text: e.target.value
        });
    };

    handleSave = (e) => {
        if (this.state.text.trim() !== "") {
            const item = {
                key: new Date(),
                text: this.state.text.trim(),
                isCompleted: false,
                edit: false
            };
            this.setState({
                list: [...this.state.list, item],
                text: ""
            });
        }
    };

    handleDelete = (key) => {
        const filterList = this.state.list.filter((items) => items.key !== key);
        this.setState({ list: filterList });
    };

    handleEdit = (input, key) => {
        const newTodo = this.state.list.map((value) => {
            if (key === value.key) {
                value.text = input.text;
            }
            return value;
        });
        this.setState({ list: newTodo });
        return newTodo;
    };
    handleClearList = () => {
        this.setState({ list: [] });
    };
    handleComplete = (key) => {
        const newTodo = this.state.list.map((item) => {
            if (item.key === key) {
                item.isCompleted = !item.isCompleted;
            }
            return item;
        });
        this.setState({ list: newTodo });
        return newTodo;
    };
    
    render() {
        return (
            <div className="ui segment">
                <div style={{ marginBottom: "2%" }} className="ui fluid icon input ">
                    <input
                        type="text"
                        placeholder="Enter your Task"
                        onChange={this.onInputChange}
                        value={this.state.text}
                    />
                </div>
                <div className="ui buttons fluid">
                    <button className="ui blue basic button " onClick={this.handleSave}>
                        <i className="save icon"></i>
                    </button>
                </div>
                {
                    <div className={this.state.list.length === 0 ? "" : "ui segment "}>
                        {this.state.list.map((value) => (
                            <div
                                key={value.key}
                                className={
                                    value.isCompleted ? "ui segment green" : "ui segment"
                                }
                            >
                                <div>
                                    {value.text}
                                    <span className=" right ">
                                        <Checkbox
                                            className="checkbox"
                                            onChange={() => this.handleComplete(value.key)}
                                            checked={value.isCompleted}
                                        />
                                    </span>
                                    <span
                                        className="right icon-size"
                                        onClick={() => this.handleDelete(value.key)}
                                    >
                                        <i className="trash icon"></i>
                                    </span>
                                    <EditModal
                                        key={value.key}
                                        handleEdit={this.handleEdit}
                                        data={value}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                }
                {this.state.list.length >= 2 && (
                    <CleanModal handleClearList={this.handleClearList} />
                )}
            </div>
        );
    }
}

export default InputTodo;
