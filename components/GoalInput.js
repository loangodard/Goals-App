import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Modal } from 'react-native'

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const clearInput = () => {
        setEnteredGoal('')
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Objectif' style={styles.inputGoal} onChangeText={goalInputHandler} value={enteredGoal} />
                <View style={styles.buttonArea}>
                    <Button color='red' title='Annuler' onPress={props.hideInputGoal} />
                    <Button style={styles.addGoalButton} title='Ajouter' onPress={() => props.onAddGoal(enteredGoal, clearInput)} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column'
    },
    inputGoal: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    buttonArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'45%'
    },
    addGoalButton:{
        backgroundColor:'green'
    }
})

export default GoalInput