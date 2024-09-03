import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import React, { useState } from 'react'

type Props = {
    nombre: string;
  }

const styles = StyleSheet.create({
    onPressStyles: {
        backgroundColor: 'blue'
    },
    unpressedStyles: {
        height: 100,
        width: 300,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'blue',
    },
    textStyles : {
        textAlign: 'center'
    }
})

const Tarjeta = (props: Props) => {

    // const [nombre, setContador] = useState(0)
    return (
        <>
            <Pressable style={styles.unpressedStyles}>
                <Text style={styles.textStyles}>{props.nombre}</Text>
            </Pressable>
        </>
    )
}

export default Tarjeta