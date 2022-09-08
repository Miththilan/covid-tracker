export const authMiddleware = store => next => async action => {
    next(action)
}