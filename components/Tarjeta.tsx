import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';

type Props = {
  nombre: string;
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

const Tarjeta = (props: Props) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <>
      <Pressable
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        style={isPressed ? styles.onPressStyles : styles.unpressedStyles}
      >
        <Text style={isPressed ? styles.textOnPressStyles : styles.textStyles}>
          {props.nombre}
        </Text>
      </Pressable>
    </>
  );
};

export default Tarjeta;
