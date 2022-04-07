import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const EmployeeData = props => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Nome: {props.name || '-'}</Text>

        <Text style={styles.text}>Idade: {props.age || '-'}</Text>

        <Text style={styles.text}>Stack: {props.stack || '-'}</Text>
      </View>
    </View>
  );
};

export default EmployeeData;
