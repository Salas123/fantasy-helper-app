import {View, TextInput, Text, StyleSheet, ScrollView} from "react-native";
import {useState} from "react";
import CustomButton from "../../Components/CustomButton";


function validateTeamConfig(teamConfig){
    return !(teamConfig[0] > 2 ||
        teamConfig[1] > 3 ||
        teamConfig[2] > 2 ||
        teamConfig[3] > 3 ||
        teamConfig[4] > 1 ||
        teamConfig[5] > 1 ||
        teamConfig[6] > 1 ||
        teamConfig[7] > 1 ||
        teamConfig[8] > 6);



}

async function updateTeam(key, value, team, setTeamHandler){
    const updatedTeam = {...team};
    updatedTeam[key] = value;
    setTeamHandler(updatedTeam);
    console.log(updatedTeam);
}
function makeTeamObj(teamConfig)
{
   // Index -- 0:QB 1:WR 2:RB 3:TE 4:FLEX 5:DEF 6:D 7:K 8:BEN
    const teamObj = {};

    //QB fields
    for(let i =1; i <= teamConfig[0]; i++){
        let key = "QB" + String(i);
        teamObj[key] = "";
    }
    //WR fields
    for(let i =1; i <= teamConfig[1]; i++){
        let key = "WR" + String(i);
        teamObj[key] = "";
    }
    //RB fields
    for(let i =1; i <= teamConfig[2]; i++){
        let key = "RB" + String(i);
        teamObj[key] = "";
    }
    //TE fields
    for(let i =1; i <= teamConfig[3]; i++){
        let key = "TE" + String(i);
        teamObj[key] = "";
    }
    //Flex fields
    for(let i =1; i <= teamConfig[4]; i++){
        let key = "Flex" + String(i);
        teamObj[key] = "";
    }
    //DEF fields
    for(let i =1; i <= teamConfig[5]; i++){
        let key = "DEF" + String(i);
        teamObj[key] = "";
    }
    //D fields
    for(let i =1; i <= teamConfig[6]; i++){
        let key = "D" + String(i);
        teamObj[key] = "";
    }
    //K fields
    for(let i =1; i <= teamConfig[7]; i++){
        let key = "K" + String(i);
        teamObj[key] = "";
    }
    //BEN fields
    for(let i =1; i <= teamConfig[8]; i++){
        let key = "BEN" + String(i);
        teamObj[key] = "";
    }

    return teamObj;

}


function createFields({...props}){

    let fields = [];

    //QB fields
    for(let i =1; i <= props.teamConfig[0]; i++) {
        let key = "QB" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Quarter back\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
                <View key={key+'-view'} style={props.styles.inputContainer}>
                    {textField}
                    {inputField}
                </View>
            );
    }

    //WR fields
    for(let i =1; i <= props.teamConfig[1]; i++){
        let key = "WR" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Wide receiver\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }

    // //RB fields
    for(let i =1; i <= props.teamConfig[2]; i++){
        let key = "RB" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Running back\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }

    // //TE fields
    for(let i =1; i <= props.teamConfig[3]; i++){
        let key = "TE" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Tight end\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }

    // //Flex fields
    for(let i =1; i <= props.teamConfig[4]; i++){
        let key = "Flex" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Flex player\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }
    //DEF fields
    for(let i =1; i <= props.teamConfig[5]; i++){
        let key = "DEF" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Defense team\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }
    //D fields
    for(let i =1; i <= props.teamConfig[6]; i++){
        let key = "D" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Defensive player\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }
    //K fields
    for(let i =1; i <= props.teamConfig[7]; i++){
        let key = "K" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Kicker\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }
    //BEN fields
    for(let i =1; i <= props.teamConfig[8]; i++){
        let key = "BEN" + String(i);
        const textField = (<Text key={key+"-text"}>Enter {key}:</Text>);
        const inputField = (
            <TextInput
                onChangeText={async (value) => await updateTeam(key, value, props.team, props.setTeam)}
                value={props.team[key]
                }
                key={key+"-input"}
                placeholder={'Bench player\'s name...'}
                style={props.styles.inputFieldStyle}
            />)

        fields.push(
            <View key={key+'-view'} style={props.styles.inputContainer}>
                {textField}
                {inputField}
            </View>
        );
    }

    return fields;
}

function AddPlayersToPreCreatePage({...props}){

    const [team, setTeam] = useState(() => makeTeamObj(props.config));
    const inputFields = createFields({teamConfig: props.config, team: team, setTeam: setTeam, styles: styles})

    return(
        <View>
            <View style={styles.pageContainer}>
                <ScrollView>
                    {inputFields}
                    <View style={styles.buttonContainer}>
                        <CustomButton buttonTitle={'Confirm'}/>
                        <CustomButton buttonTitle={'Cancel'} onPress={() => props.setFlag(false)}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    inputFieldStyle: {
        borderWidth: 2,
        borderRadius: 5,
        borderStyle: "solid",
        paddingVertical: 15,
        paddingHorizontal: 90,
        marginTop: 5,
        width: "100%"
    },
    inputContainer: {
        marginVertical: 5
    },
    pageContainer:{
        justifyContent: "center",
        alignItems: "center"
    },
    buttonContainer:{
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
})


export default AddPlayersToPreCreatePage;
