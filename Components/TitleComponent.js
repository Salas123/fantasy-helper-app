import React from "react";
import {StyleSheet, Text, View} from "react-native";

const TitleComponent = () => {
  return(
      <View>
          <Text style={style.headerText}>Fantasy Helper App</Text>
      </View>
  );
}

const style = StyleSheet.create({
   headerText: {
       fontSize: 40,
       color: '#f93943',
       fontStyle: 'italic',
       textShadowColor: '#83858C',
       textShadowOffset: {width: 1, height: 1}
   }
});

export default TitleComponent;
