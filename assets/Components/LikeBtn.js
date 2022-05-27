import {View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const LikeBtn = (props) => {
    return (
        <View style={{flexDirection: 'row', flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="heart" style={{color: 'red'}}></Icon>
        <Text style={{marginLeft: 8}}>{props.likes}</Text>
        </View>
    )
}

export default LikeBtn