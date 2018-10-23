import React from 'react';


class BookForm extends React.Component {

    constructor() {
        super();

    }


    render() {
        return (
                <div className="adminPanel col-xs-4">
                    <form onSubmit={this.props.addNewBook}>
                        <div className="form-group">
                            <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
                                   onChange={this.props.handleChange} value={this.props.book.name} />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Book author" id="author" name="author" className="form-control"
                                   onChange={this.props.handleChange} value={this.props.book.author} />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Book description" id="description" name="description" className="form-control"
                                      onChange={this.props.handleChange} value={this.props.book.description} />
                        </div>
                        <div className="form-group" style={{marginLeft: "20px"}}>
                            <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
                                   onChange={this.props.handleChange} value={this.props.book.onStock} />
                            <label htmlFor="onStock" className="form-check-label">On stock</label>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
                                   onChange={this.props.handleChange} value={this.props.book.image} />
                        </div>
                        <button type="submit" className="btn btn-primary">Add</button>
                    </form>
                </div>

        )
    }


}

export default BookForm;


