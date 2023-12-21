import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState<string>('');

  const handlePress = (value: string) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const handleClear = () => {
    setDisplay('');
  };

  const handleCalculate = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{display}</Text>
      <View style={[styles.row, styles.rowBlue]}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text>3</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.rowBlue]}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text>6</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.rowRed]}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text>9</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.rowRed]}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <Text>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text>-</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.rowGreen]}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text>*</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text>/</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleCalculate}>
          <Text>=</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.rowGreen]}>
        <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:"gray",
    alignItems: 'center'
  },
  display: {
    fontSize: 30,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    padding: 20,
    margin: 5,
    flex: 1,
  },
  rowBlue:{
    backgroundColor:"blue"
  },
  rowRed:{
    backgroundColor:"red"
  },
  rowGreen:{
    backgroundColor:"green"
  }
});

export default Calculator;
