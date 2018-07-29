export default {
    authenticate: (u, p) => {
        return {
            type: ACTION_TYPES.AUTHENTICATE,
            payload: { u, p }
        }
    }
};