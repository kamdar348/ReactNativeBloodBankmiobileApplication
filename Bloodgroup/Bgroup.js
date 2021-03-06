import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet,View,Text,FlatList } from "react-native";
import { color } from 'react-native-reanimated';


function Bgroup(props) {
    return(
        <View style={style.container} >
            <View style={style.head}>
                <Text style={style.hedtxt}>DETAILS</Text>
            </View>
            <Text   style={style.para}>(B) blood group people give the blood 
                (B) blood group patients and (AB) Blood Group patients
            </Text>
           
            <Text style={style.para}>(B) Blood group patients takes the blood (O) Bloood group People and (AB) Blood group People</Text>
            <View style={style.btnContainer}>
               <TouchableOpacity style={style.btn} onPress={()=>props.navigation.navigate('Blooddonor')}>
                   <Text>Back</Text>
               </TouchableOpacity>
            </View>
        </View>
        
        
    )
}
const style = StyleSheet.create({
   container:{
       flex:1,
       alignItems:'center',
       justifyContent:'center',
       backgroundColor:'darkred'
   },
   head:{
       flex:0.3,
       alignContent:'center',
       justifyContent:'center'
   },
   hedtxt:{
       fontSize:50,
       color:'red'
   },
   para:{
       alignSelf:'center',
       alignItems:'center',
       textAlign:'center',
       fontSize:30,
       color:'#ffff',
       margin:10
   },
    
 btnContainer:{
     alignItems:'flex-end',
     justifyContent:'flex-end'
 },
btn:{
    backgroundColor: "#ffff",
        color:'red',
        padding:7, 
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        width:'30%',
        margin: 10,
        borderRadius:100,
        height:50,
        textAlign:'center',
        flexDirection:'row',
        justifyContent:'space-between',
}
})
export default Bgroup;