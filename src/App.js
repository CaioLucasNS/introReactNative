import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import EmployeeData from './components/EmployeeData/EmployeeData';
// import employeesList from './utils/mock.json';

const App = () => {
  // const renderEmployees = () =>
  //   employeesList.data.map(employee => {
  //     return (
  //       <EmployeeData
  //         key={employee.id}
  //         name={employee.name}
  //         age={employee.age}
  //         stack={employee.stack}
  //       />
  //     );
  //   });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Accenture - React Native</Text>
      {/* {renderEmployees()} */}
      <EmployeeData name="Caio" age={26} stack="React Native" />
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
