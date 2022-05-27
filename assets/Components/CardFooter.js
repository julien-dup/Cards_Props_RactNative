import React  from "react";
import {View, Text } from 'react-native'
import LikeBtn from "./LikeBtn";


const CardFooter = (props) => {
    return(
        <View style={{ width: '100%', flexDirection: 'row', height: 50, alignItems: 'center', marginLeft: 8}}>
            <View style={{width: '50%'}}>
                <Text style={{color: 'grey', fontSize: 16}}>Taille {props.size}</Text>
            </View>
            <View style={{width: '50%', height: '100%'}}>
                <LikeBtn likes={props.likes}/>
            </View>
        </View>
    )
} 
export default CardFooter