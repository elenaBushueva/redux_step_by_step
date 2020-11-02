import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Board from "./Board";
import {Container, Button} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {addCard, addColumn, getCards} from "./redux/action";


function App(props) {

    useEffect(() => {
        props.getCards()
    }, [])

    const addCardButtonHandler = () => {
        const newCard = {
            name: 'Petr',
            status: 'review',
            priority: 10
        }
        props.addCard(newCard)
    }

    const addColumnHandler = () => {
        const newColumn = {
            status: 'fixed',
            title: 'Fixed'
        }
        props.addColumn(newColumn)
    }


    return (
        <Container>
            <Button onClick={addCardButtonHandler}>Add card</Button>
            <Button onClick={addColumnHandler}>Add column</Button>
            <Board cards={props.cards} columns={props.columns}/>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    cards: state.cards,
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard: (card) => dispatch(addCard(card)),
    getCards: () => dispatch(getCards()),
    addColumn: (column) => dispatch(addColumn(column)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
