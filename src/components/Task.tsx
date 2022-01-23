import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function Task(props) {
  return (
    <View style={styles.task}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.texto}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10,
    borderRadius: 10,
    width: 340,
    height: 50,
    padding: 10,
    backgroundColor: '#E6E8E6',
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  texto: {
    color: '#080708',
    fontWeight: 'bold',
    maxWidth: '80%',
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.4,
    backgroundColor: '#4EA699',
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#4EA699',
    borderWidth: 2,
    borderRadius: 5,
  },
});
