import React  from "react";
import {View, Text } from 'react-native'

const CardHeader = (props) => {
    return(
        <View style={{ alignItems: 'flex-end', borderColor: 'blue', borderBottomWidth: 1, width: '100%'}}>
            <Text style={{ fontSize: 24, marginRight: '5%', justifyContent: 'center' , color: 'grey'}}>{props.price} €</Text>
        </View>
    )
} 
export default CardHeader