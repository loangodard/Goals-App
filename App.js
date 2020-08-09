import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Text, ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
import { hide } from 'expo/build/launch/SplashScreen';

export default function App() {
  
  const [courseGoals,setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addGoalHandler = (goalTitle,clearInput) => {
    const prevGoals = [...courseGoals]
    const id = new Date().getTime().toString()
    prevGoals.push({key: id, goal: goalTitle})
    setCourseGoals(prevGoals)
    clearInput()
    setIsAddMode(false)
  }

  const deleteGoalHandler = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.key !== goalId)
    })
  }

  const hideInputGoal = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
    <Button title='Ajouter un nouvel objectif' onPress={() => setIsAddMode(true)}/>
      <GoalInput visible = {isAddMode} onAddGoal={addGoalHandler} hideInputGoal={hideInputGoal}/>
      <FlatList data = {courseGoals} renderItem={itemData => <GoalItem id={itemData.item.key} onDelete={deleteGoalHandler} goal={itemData.item.goal}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
})