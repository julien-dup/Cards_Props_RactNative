import React  from "react";
import {View} from 'react-native'

import PRODUITS from "../json/data"

import CardBody from "../Components/CardBody";

import CardHeader from '../Components/CardHeader'
import CardFooter from "./CardFooter";

const Card = () => {
    return(
      
PRODUITS.map((l,k) => (
                      
    <View style={{width: 170 ,  marginTop: 25, marginBottom: 5, borderWidth: 1, borderColor: 'blue'}} key={k}>
        
        <CardHeader price={l.price} />
        <CardBody photo={l.photo} desc={l.desc} title={l.title}/>
        <CardFooter size={l.size} likes={l.likes}/>
    </View>
))
    )
} 
export default Card
