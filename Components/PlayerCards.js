import {StyleSheet, Text, View} from "react-native";

function PlayerCards(){
    return(
        <View style={[styles.cardContainer, styles.shadowProp]}>
            <Text>Image here</Text>
            <View style={styles.innerContainer}>
                <Text>Name: Jesus Salas </Text>
                <Text>Team: MIN </Text>
                <Text>Position: OH YA</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer:{
        flexDirection: "row",
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp:{
        shadowColor: "#ee5858",
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3
    },
    innerContainer:{
        padding: 5
    }
});

export default PlayerCards;
