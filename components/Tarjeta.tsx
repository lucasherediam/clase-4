import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

type Props = {
  nombre: string;
};

const Tarjeta = (props: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  const changeValue = () => {
    setIsPressed(!isPressed)
  }
  return (
    <>
      <Pressable
        onPress={changeValue}
        style={isPressed ? styles.onPressStyles : styles.unpressedStyles}
      >
        <Text style={isPressed ? styles.textOnPressStyles : styles.textStyles}>
          {props.nombre}
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  onPressStyles: {
    backgroundColor: 'yellow',
    height: 100,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  unpressedStyles: {
    backgroundColor: 'darkblue',
    height: 100,
    width: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  textStyles: {
    textAlign: 'center',
    color: 'white', 
  },
  textOnPressStyles: {
    textAlign: 'center',
    color: 'darkblue',
  },
});

export default Tarjeta;
