

const initialState = {
    book: {
        name: "",
        author: "",
        description: "",
        price: "",
        onStock: true,
        image: "",
    }
};

const adminPanelReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            console.log("Unknow action" + action.type);
            return state;
    }
};

export default adminPanelReducer;