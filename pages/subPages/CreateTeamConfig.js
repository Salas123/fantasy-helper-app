import {FlatList, ScrollView, StyleSheet, Text, View} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import CustomButton from "../../Components/CustomButton";
import {useState} from "react";

function setQuantityAllowed(num){

    let quantityList = [];
    for(let i = 1; i <= num; i++){
        const obj = {label: String(i), value: i};
        quantityList.push(obj);
    }

    return quantityList;
}

function CreateTeamConfig({...props}) {
    const [itemQuantities] = useState( () => setQuantityAllowed(8));
    const [openProps, setOpenProps] = useState({
        qb : {qbOpen: false},
        rb: {rbOpen: false},
        wr: {wrOpen: false},
        te: {teOpen: false},
        flex: {flexOpen: false},
        def: {defOpen: false},
        d: {dOpen: false},
        k: {kOpen: false},
        ben: {benOpen: false}
    });
    const [qbNum, setQBNum] = useState(0);
    const [rbNum, setRBNum] = useState(0);
    const [wrNum, setWRNum] = useState(0);
    const [teNum, setTENum] = useState(0);
    const [flexNum, setFlexNum] = useState(0);
    const [defNum, setDefNum] = useState(0);
    const [dNum, setDNum] = useState(0);
    const [kNum, setKNum] = useState(0);
    const [benNum, setBenNum] = useState(0);


    return(
        <View style={styles.dropDownContainer}>
            <ScrollView style={{overflow: "visible"}}>
                <View style={{zIndex: 10}}>
                    <Text>Create Team Spec:</Text>
                    <Text>How many QBs?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setQBNum}
                                    value={qbNum}
                                    items={itemQuantities}
                                    open={openProps.qb.qbOpen}
                                    setOpen={() => setOpenProps({...openProps, qb: {qbOpen: !(openProps.qb.qbOpen)}})}/>
                </View>
                <View style={{zIndex: 9}}>
                    <Text>How many RBs?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setRBNum}
                                    value={rbNum}
                                    items={itemQuantities}
                                    open={openProps.rb.rbOpen}
                                    setOpen={() => setOpenProps({...openProps, rb: {rbOpen: !(openProps.rb.rbOpen)}})}/>
                </View>
                <View style={{zIndex: 8}}>
                    <Text>How many WRs?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setWRNum}
                                    value={wrNum}
                                    items={itemQuantities}
                                    open={openProps.wr.wrOpen}
                                    setOpen={() => setOpenProps({...openProps, wr: {wrOpen: !(openProps.wr.wrOpen)}})}/>
                </View>
                <View style={{zIndex: 7}}>
                    <Text>How many TEs?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setTENum}
                                    value={teNum}
                                    items={itemQuantities}
                                    open={openProps.te.teOpen} setOpen={() => setOpenProps({...openProps, te: {teOpen: !(openProps.te.teOpen)}})}/>
                </View>
                <View style={{zIndex: 6}}>
                    <Text>How many flex spots?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setFlexNum}
                                    value={flexNum}
                                    items={itemQuantities}
                                    open={openProps.flex.flexOpen}
                                    setOpen={() => setOpenProps({...openProps, flex: {flexOpen: !(openProps.flex.flexOpen)}})}/>
                </View>
                <View style={{zIndex: 5}}>
                    <Text>How many defense teams?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setDefNum}
                                    value={defNum}
                                    items={itemQuantities}
                                    open={openProps.def.defOpen} setOpen={() => setOpenProps({...openProps, def: {defOpen: !(openProps.def.defOpen)}})}/>
                </View>
                <View  style={{zIndex: 4}}>
                    <Text>How many defensive players?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setDNum}
                                    value={dNum}
                                    items={itemQuantities}
                                    open={openProps.d.dOpen}
                                    setOpen={() => setOpenProps({...openProps, d: {dOpen: !(openProps.d.dOpen)}})}/>
                </View>
                <View style={{zIndex: 3}}>
                    <Text>How many kickers?</Text>
                    <DropDownPicker listMode={'SCROLLVIEW'}
                                    setValue={setKNum}
                                    value={kNum}
                                    items={itemQuantities}
                                    open={openProps.k.kOpen}
                                    setOpen={() => setOpenProps({...openProps, k: {kOpen: !(openProps.k.kOpen)}})}/>
                </View>
                <View style={{zIndex: 2}}>
                    <Text>How many bench players?</Text>
                    <DropDownPicker dropDownDirection={'BOTTOM'}
                                    listMode={'SCROLLVIEW'}
                                    setValue={setBenNum}
                                    value={benNum}
                                    items={itemQuantities}
                                    open={openProps.ben.benOpen}
                                    setOpen={() => setOpenProps({...openProps, ben: {benOpen: !(openProps.ben.benOpen)}})}/>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton buttonTitle={'Create'}
                                  onPress={() => {
                                      props.setTeamConfig([qbNum, wrNum, rbNum, teNum, flexNum, defNum, dNum, kNum, benNum]);
                                      props.setFlag(true);
                                      console.log('button pressed');
                                  }}/>
                    <CustomButton buttonTitle={'Reset'} />
                    <CustomButton buttonTitle={'Cancel'}
                                  onPress={() => {
                                      props.setTeamConfig([]);
                                      props.setFlag(false);
                                  }}/>
                </View>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    buttonContainer :{
        zIndex: 1,
        marginVertical: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    dropDownContainer :{
        marginTop: 15,
        marginBottom: 70
    }
});

export default CreateTeamConfig;
