import React from 'react';

class AdminPanel extends React.Component {


    render() {



        return (<div className="adminPanel col-4">
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Book name" id="bookName" name="bookName" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Book author" id="bookAuthor" name="bookAuthor" className="form-control"/>
                </div>
                <div className="form-group">
                    <textarea placeholder="Book description" id="bookDescription" name="bookDescription" className="form-control"/>
                </div>
                <div className="form-group">
                    <input type="checkbox" id="bookStock" name="bookStock" className="form-check-input"/>
                    <label htlmFor="bookStock" className="form-check-label"> On Stock</label>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Book image" id="bookImage" name="bookImage" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary" >Add</button>
            </form>
        </div>
        );
    }
}

export default AdminPanel;