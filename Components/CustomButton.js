import {StyleSheet, Pressable, Text} from "react-native";

const CustomButton = ({...props}) =>{
    return(
        <Pressable style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.textProp}>{props.buttonTitle}</Text>
        </Pressable>
    );

}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: "#7c51a3",
        paddingVertical: 12,
        paddingHorizontal: 28,
        borderRadius: 4,
        marginHorizontal: 3
    },
    textProp:{
        color: "#ffffff"
    }
});

export default CustomButton;
