import { Button, Text, TouchableOpacity, View} from "react-native";
import { styles } from "./styles";

function CardButtonRed(props){

    return(
            <TouchableOpacity style={styles.cardButton} onPress={props.eventHandle}>
                <Text style={styles.title}>{props.title}</Text>
            </TouchableOpacity>
    )
}

export default CardButtonRed;