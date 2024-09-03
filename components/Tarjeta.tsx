import { View, Text, Button, Pressable } from 'react-native'
import React, { useState } from 'react'

type Props = {
    nombre: string;
  }

const Tarjeta = (props: Props) => {

    // const [nombre, setContador] = useState(0)
    return (
        <>
            <Pressable>
                <Text>{props.nombre}</Text>
            </Pressable>
        </>
    )
}

export default Tarjeta