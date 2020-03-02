import API from '../apiHttpRequest/api'

const SET_USER_DATA = 'SET-USER-DATA';

export const setUserDataCA = (data) => ({type: SET_USER_DATA, data});
export const authMe = () => {
    return (dispatch) => {
        API.getAuthMe().then((resp) => {
            if (resp.resultCode === 0) {
                dispatch(setUserDataCA(resp.data));
            }
        })
    }

};

export const loginMe = (logData) => {
    return (dispatch) => {
        API.setAuthMe(logData).then((resp) => {
            console.log(resp);
            if (resp.resultCode === 0) {
                /* dispatch(setUserDataCA(resp.data));*/
                API.getAuthMe().then((resp) => {
                    if (resp.resultCode === 0) {
                        dispatch(setUserDataCA(resp.data));
                    }
                });
            }
        })
    }
};

const initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
};

export default authReducer;