import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { Botao } from './src/components/Botao';
import { Task } from './src/components/Task';

export default function App() {
  let nome = 'leduxDev';

  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    // SafeAreaView utilizado para o conteudo ficar na área visivel do dispositivo
    <SafeAreaView style={styles.container}>
      <Text style={{ color: '#1C0B19', fontWeight: 'bold', marginTop: 10 }}>
        <Text style={{ fontWeight: 'bold', color: '#4EA699', fontSize: 18 }}>
          ToDoList,{' '}
        </Text>
        by:.{nome}
      </Text>
      {/* Criação do Input para adicionar a task e o botão de adicionar */}
      <View style={styles.addTask}>
        <KeyboardAvoidingView
          style={styles.addTask}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <TextInput
            style={styles.input}
            placeholder="Sua tarefa"
            value={task}
            onChangeText={(text) => setTask(text)}
          />

          <TouchableOpacity
            style={styles.addButton}
            onPress={() => {
              handleAddTask();
            }}
          >
            <Text
              style={{ color: '#424C55', fontSize: 20, fontWeight: 'bold' }}
            >
              +
            </Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>

      <View style={styles.items}>
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          );
        })}
      </View>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#F5EDF0',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    height: 40,
    width: 260,
    margin: 12,
    borderRadius: 15,
    padding: 10,
  },
  addButton: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    backgroundColor: '#F5EDF0',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  addTask: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  items: {},
});
