import {Button, StyleSheet, Text, View} from 'react-native';
import TitleComponent from "../Components/TitleComponent";
import DropDownPicker from "react-native-dropdown-picker";
import {useState} from "react";
function EditTeamPage({navigation}){
    const [editDropDownOpen, setEditDropDownOpen] = useState(false);
    const [teams] = useState([{label: 'team1', value: 'team1'}]);
    const [teamToEdit, setTeamToEdit] = useState(null);

    return(
        <View style={styles.container}>
            <Text>Select Team To Edit: </Text>
            <DropDownPicker setValue={setTeamToEdit}
                            value={teamToEdit}
                            items={teams}
                            open={editDropDownOpen}
                            setOpen={setEditDropDownOpen}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
});

export default EditTeamPage;
