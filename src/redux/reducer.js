const initialState = {
    cards: [
        {
            _id: 1,
            name: 'Elena',
            status: 'todo',
            priority: 1
        }, {
            _id: 2,
            name: 'Irina',
            status: 'progress',
            priority: 1
        }, {
            _id: 3,
            name: 'Nico',
            status: 'review',
            priority: 1
        }, {
            _id: 4,
            name: 'Thiago',
            status: 'done',
            priority: 2
        }
    ],
    columns: [
        {
            status: 'todo',
            _id: 1
        }, {
            status: 'progress',
            _id: 2
        }, {
            status: 'review',
            _id: 3
        }, {
            status: 'done',
            _id: 4
        },
    ]
}

const kanban = (state
                    = initialState, action) => {
    switch (action.type) {

        case 'GET_CARDS':
            return {
                ...state,
                cards: action.payload
            }

        case 'GET_COLUMNS':
            return {
                ...state,
                columns: action.payload
            }

        case 'ADD_CARD' :
            return {
                ...state,
                cards: [...state.cards, {
                    _id: Math.random(),
                    name: 'Toreador',
                    status: 'done',
                    priority: 1
                }]
            }

        case 'DELETE_CARD' :
            const newCards = state.cards.filter(el => el._id !== action.payload)
            return {
                ...state,
                cards: newCards
            }

        case 'STATUS_CHANGE':
            const newList = state.cards.map(el => {
                if (el._id === action.payload.cardId) {
                    const colStatuses = state.columns.map(el => el.status);
                    if (action.payload.direction === 'right')
                        return {...el, status: colStatuses[colStatuses.indexOf(el.status) + 1]}
                    if (action.payload.direction === 'left')
                        return {...el, status: colStatuses[colStatuses.indexOf(el.status) - 1]}
                } else {
                    return el
                }
            })
            return {
                ...state, cards: newList
            }

        default:
            return state
    }
}
export default kanban;












































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































