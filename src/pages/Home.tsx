import React, { useState } from 'react';

import { Alert, SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [theme, setTheme] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleChangeTheme() {
    setTheme(!theme);
  }

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return null;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }

      return task
    })

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ))
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme ? '#10101E' : '#fff',
      }}
    >
      <Header theme={theme} onUserAction={handleChangeTheme} />

      <TodoInput theme={theme} addTask={handleAddTask} />

      <MyTasksList 
        theme={theme}
        tasks={tasks} 
        onPress={handleMarkTaskAsDone} 
        onLongPress={handleRemoveTask} 
      />
    </SafeAreaView>
  )
}