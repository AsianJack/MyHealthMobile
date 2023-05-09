import { View, Image, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';




const CustomDrawer = (props) => {
    return (

        <DrawerContentScrollView {...props} style={{ backgroundColor: '#ADD4D0' }}>

            <View style={{alignSelf:'center', marginTop:50}}>
                <Text style={{fontSize:28, color:"#419ED7"}}> Olá Jurandir! </Text>
            </View>

            <View style={{marginTop:20}}>
                <View style={{backgroundColor:"#419ED7", width:"80%", height:2, alignSelf:'center', marginBottom:40}}  />
            </View>

            <DrawerItemList {...props} />
            <View>
                <DrawerItem label="Sair"
                    labelStyle={{fontSize:22, color:"#419ED7"}}
                    onPress={() => { props.navigation.popToTop() }}
                    icon={() => <Image source={require('../../assets/img/logout-green.png')} style={{ width: 30, height: 30 }} />} />
            </View>


        </DrawerContentScrollView>

    )
}
// drawerStyle: {
//     backgroundColor: '#ADD4D0', // Define a cor do background
//     flex: 1, // Define a altura do drawer para preencher a tela
//   },
export default CustomDrawer;