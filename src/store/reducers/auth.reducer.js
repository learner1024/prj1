import ACTION_TYPES from '../actionTypes';

const initialAuthState = {
    authenticatedUser: null
};

export default (authState = initialAuthState, action) => {
    switch(action.type) {
        case ACTION_TYPES.AUTHENTICATE:
            return {
                authenticatedUser: {
                    id: action.payload.userId,
                    name: action.payload.userName
                }
            }
    }
}