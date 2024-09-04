import { View, Text, Pressable, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

type Props = {
  nombre: string;
  audio: string;
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
    height: 100,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'darkblue',
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
  const [sound, setSound] = useState<Audio.Sound | null>(null); // Estado para almacenar el sonido

  // Función para cargar el sonido
  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      { uri: props.audio }
    );
    setSound(sound);
  }

  // Cargar el sonido al montar el componente
  useEffect(() => {
    loadSound();
    return () => {
      // Liberar el recurso de sonido al desmontar el componente
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  // Función para reproducir el sonido
  const playSound = async () => {
    if (sound) {
      await sound.replayAsync(); // Reproducir el sonido desde el principio
    }
  };

  // Función para detener el sonido
  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync(); // Detener el sonido
    }
  };

  return (
    <>
      <Pressable
        onPressIn={() => {
          setIsPressed(true);
          playSound(); 
        }}
        onPressOut={() => {
          setIsPressed(false);
          stopSound(); 
        }}
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
