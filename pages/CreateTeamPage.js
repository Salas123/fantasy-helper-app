import {StyleSheet, View} from "react-native";
import {useState} from "react";
import AddPlayersToPreCreatePage from "./subPages/AddPlayersToPreCreatePage";
import CreateTeamConfig from "./subPages/CreateTeamConfig";

function CreateTeamPage() {
    const [flag, setFlag] = useState(false);
    const [teamConfig, setTeamConfig] = useState([]);

    return(
        <View>
            {flag ? null: <CreateTeamConfig setTeamConfig={setTeamConfig} setFlag={setFlag}/>}
            {flag ? <AddPlayersToPreCreatePage config={teamConfig} setFlag={setFlag}/>: null}
        </View>
    )
}


const styles = StyleSheet.create({
    scrollView: {
        marginHorizontal: 15
    }
})


export default CreateTeamPage;
