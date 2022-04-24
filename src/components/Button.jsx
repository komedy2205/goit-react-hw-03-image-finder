import React, { Component } from "react";

class Button extends Component {
    state = {
        page: 1,
    };

    handleClick = event => {
    event.preventDefault();

    this.props.onCLick(this.state.page);
    };
    
    render() {
        return (
            <form>
                <button type="submit" onClick={this.handleClick}>
                    Load more
                </button>
            </form>
                       
        )
    };
}
export default Button;