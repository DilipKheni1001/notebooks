const INIT_STATE = {
   notebooks : []
  };

  export default (state = INIT_STATE,action) => {
        switch (action.type) {
            case "ADD_NOTEBOOK":
                return {...state,notebooks:[...state.notebooks,action.payload]};

            case "UPDATE_NOTEBOOK":
                return {...state,notebooks:state.notebooks.map(book=>
                    book.id == action.payload.id ? {...book,name:action.payload.name,content:action.payload.content} : book
                )};
            
            case "DELETE_NOTEBOOK":
                return {...state,notebooks:state.notebooks.filter(book=> book.id !== action.payload.id)};
                
            default:
                return state;
        }
  } 