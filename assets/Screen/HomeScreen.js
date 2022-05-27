import React from "react";
import {ScrollView, View} from 'react-native'
import Card from "../Components/Card";





const HomeScreen = () => {
    return (
        
        

        
 <View style={{flex: 1}} >
            <ScrollView>
             
            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around'}}>
              
            <Card />
              
                    
                
             </View>
            </ScrollView>
            
       
            </View>

      
    )
}

export default HomeScreen