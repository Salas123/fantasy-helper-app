import {StyleSheet,Text, View, Button} from 'react-native';
import TitleComponent from "../Components/TitleComponent";
import DropDownPicker from "react-native-dropdown-picker";
import {useState} from "react";

function HomePage({navigation}){

    const [teamValue, setTeamValue] = useState(null);
    const [teamDropDownOpen, setTeamDropDownOpen] = useState(false);
    const [teams] = useState([{label: 'favTeam', value: 'myFavTeam'}]);

    return(
        <View style={styles.pageContainer}>
            <View style={styles.titleContainer}>
                <TitleComponent/>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.teamText}>
                    Team:
                </Text>
                <DropDownPicker setValue={setTeamValue} value={teamValue} items={teams} open={teamDropDownOpen} setOpen={setTeamDropDownOpen}/>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "15%"
    },
    pageContainer: {
    },
    contentContainer: {
        height: "85%",
        paddingLeft: 5,
        paddingRight: 5
    },
    teamText:{
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default HomePage;
