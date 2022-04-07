import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EmployeeData from './components/EmployeeData/EmployeeData';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accenture - React Native</Text>
      <EmployeeData name="caio" age={25} stack="react native" />
      <EmployeeData name="lucas" age={12} />
      <EmployeeData name="caio" age={25} stack="react native" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // pega a altura e largura da screen inteira
    justifyContent: 'center', // alinha o elemento no centro horizontalmente
    alignItems: 'center', // alinha o elemento no centro verticalmente
    backgroundColor: '#7C42CE',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'lightgray',
  },
});

export default App;
