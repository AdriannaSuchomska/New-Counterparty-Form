import React from "react";


export class InputComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: `component-input-${this.props.label}`
        }
    }

    render() {

        const { label, state, setState, type = "text" } = this.props;


        return (
            <label className="Add-label" htmlFor={this.state.id}>
                {label}:
                <input
                    id={this.state.id}
                    type={type}
                    value={state}
                    placeholder={label}
                    onChange={e => setState(e.target.value)}
                />
            </label>
        );
    }
}