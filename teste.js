import React, { useState } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('Olá Mundo!');

  const mudarMensagem = () => {
    setMensagem('Você clicou no botão!');
  };

  return (
    <View style={styles.container}>
      <Text style ={styles.texto}>{mensagem}</Text>
      <Button title="Clique aqui" onPress={mudarMensagem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
  },
});
