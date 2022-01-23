import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export function Botao() {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'green',
        padding: 10,
        width: 80,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
        }}
      >
        Botão
      </Text>
    </TouchableOpacity>
  );
}
