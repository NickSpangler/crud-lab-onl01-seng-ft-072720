import cuid from 'cuid';

export default function manageReviews(state = [], action) {
    switch(action.type) {
        case 'ADD_REVIEW':
            console.log(action.restaurantId, action.text)
            return state.concat({text: action.text, id: cuid(), restuarantId: action.restaurantId})
        case 'DELETE_REVIEW':
            return state.filter(r => r.id !== action.id)
        default:
            return state;
    }
}
