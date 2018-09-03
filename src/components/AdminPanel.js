import React from 'react';

class AdminPanel extends React.Component {


    render() {

        const adminCss = {
            padding: '10px'
        };

        return (<div className="adminPanel col-4" style={adminCss}>
            <form>
                <div className="form-group">
                    <input type="text" placeholder="Book name" id="bookNameInput" name="bookName" className="form-control"/>
                </div>
            </form>
        </div>
        );
    }
}

export default AdminPanel;