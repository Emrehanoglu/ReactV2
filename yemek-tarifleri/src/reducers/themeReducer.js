const themeReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_COLOR":
            return {...state, color: action.payload}
            /* ...state ile state bilgisi içerisindeki tüm bilgileri al 
            color:action.payload ile de mevcuttaki color bilgisini ez, yani güncelle*/
        case "CHANGE_MODE":
            return {...state, mode: action.payload}
        default:
            return state
    }
}

export default themeReducer