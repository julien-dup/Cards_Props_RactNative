import React  from "react";
import {View, Image , Text} from 'react-native'

const CardBody = (props) => {
    return(
        <View>
            <View style={{ width: '100%', borderBottomWidth: 1, borderColor: 'blue'}}>
                <Image source={props.photo} style={{height: 200, width: '100%', resizeMode: 'contain' }} />
            </View>
            <View style={{ height: 250, padding: 8}}>
                <Text style={{fontWeight: 'bold', marginTop: 8}}>{props.title}</Text> 
                <Text style={{marginTop: 8}}>{props.desc}</Text>
            </View>
        </View>
    )
} 
export default CardBody