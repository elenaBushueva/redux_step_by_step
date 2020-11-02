import React from 'react';
import {connect} from 'react-redux';
import {Card, CardBody, CardTitle, CardSubtitle, CardFooter, Button} from "reactstrap";
import {deleteCard, updateCard} from "./redux/action";

function CardItem(props) {

    const {card, columns} = props;
    const {name, status, priority, _id} = card;

    const updateButtonHandler = ()=> {
        props.updateCard(_id, {
            status: 'todo',
            name: 'vas'
        })
    }

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{status}</CardSubtitle>
                {priority}
            </CardBody>
            <CardFooter>
                <Button onClick={()=>props.statusChange(_id, 'left')}>left</Button>
                <Button onClick={updateButtonHandler}>Update</Button>
                <Button onClick={()=>props.statusChange(_id, 'right')}>right</Button>
                <Button onClick={()=>props.deleteCard(_id)}>Delete</Button>
            </CardFooter>
        </Card>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(deleteCard(cardId)),
    statusChange: (cardId, direction) => dispatch({type: 'STATUS_CHANGE', payload: {cardId, direction}}),
    updateCard: (cardId, updatedCard) => dispatch (updateCard(cardId, updatedCard))
})



export default connect(mapStateToProps, mapDispatchToProps)(CardItem);
