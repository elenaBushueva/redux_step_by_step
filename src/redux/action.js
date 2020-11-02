import axios from "axios";

export function getCards() {
    return (dispatch) => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card/')
            .then(res => {
               dispatch({
                   type: 'GET_CARDS',
                   payload: res.data
               })
            })
            .catch()
    }
}

export function addCard (card){
    return (dispatch)=> {
        axios.post('https://nazarov-kanban-server.herokuapp.com/card/', card)
            .then(res => {
                dispatch(getCards())
            })
            .catch()
    }
}

export function deleteCard (cardId){
    return (dispatch) => {
        axios.delete('https://nazarov-kanban-server.herokuapp.com/card/' + cardId)
            .then(res => {
                dispatch(getCards())
            })
            .catch()
    }
}

export function updateCard (cardId, updatedCard) {
    return (dispatch) => {
        axios.patch('https://nazarov-kanban-server.herokuapp.com/card/', + cardId, updatedCard)
            .then(res => {
                dispatch(getCards())
            })
            .catch()
    }
}

export function addColumn(newColumn) {
    return (dispatch)=> {
        axios.post('https://nazarov-kanban-server.herokuapp.com/column/', newColumn)
            .then(res => {
                dispatch(getCards())
            })
            .catch()
    }
}

