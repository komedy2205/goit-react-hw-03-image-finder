import React, { Component } from "react";

class Searchbar extends Component {
    
    state = {
        imageName: '',
    }

    handleChangeName = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() });
    }

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageName.trim() === '') {
            return
        }
        this.props.searchSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    }

    render() {
        
            return (
            <header className="searchbar">
                <form className="form" onSubmit={this.handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleChangeName}
                        value={this.state.imageName}

                    />
                </form>
            </header>
        )
    }
};

export default Searchbar;