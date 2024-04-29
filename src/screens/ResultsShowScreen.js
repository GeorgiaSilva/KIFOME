import react, {useState, useEffect} from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import yelp from "../api/yelp";
import { FontAwesome } from '@expo/vector-icons';
const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null)
    const id = navigation.getParam('id')
   
    const getResult = async (id) => {
        
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(()=> {
        getResult(id)

    },[])
  
    if(!result){
        return null
    }
    return <SafeAreaView>
        <View style={styles.container}>

            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Search')}>
            <FontAwesome name="chevron-left" style={styles.icon} />
            </TouchableOpacity>
            <Image style={styles.image} source={{uri: result.image_url}}/>
        </View>
        
        
        <Text style={styles.title}>{result.name}</Text>
        <View style={{flexDirection:'row', justifyContent: 'center'}}> 
            <View style={styles.rating}>
                <FontAwesome name="star" size={18} color='#FFCF26'/>
                <Text>{result.rating}</Text>
            </View>
            {result.hours[0].is_open_now ? <Text>Aberto</Text> : <Text>Fechado</Text>}
        </View>
            
            
        
        <Text>{result.display_phone}</Text>
        <Text>{result.location.address1}</Text>

        <FlatList
        horizontal
            data={result.photos}
            keyExtractor= {(photo) => photo}
            renderItem={({item}) => {
                return <Image style={styles.images} source={{uri: item}}/>

            }}
        />
        
    
    </SafeAreaView>
}

const styles = StyleSheet.create({
    images:{
        height:200,
        width: 300
    },
    image:{
      
        height: 250,
        width: 400,
      
 
    },
    title:{
        fontSize: 25,
        alignSelf: 'center',
        fontWeight: 'bold',
        color:'#2C7D09'
    },
    button:{
        marginLeft: 5 ,
        width:50,
        height:50,
        backgroundColor: '#E1F8D9',
        zIndex: 2,
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    icon:{
        fontSize: 30,
        color:'#2C7D09'
    },
    rating:{
        width: 60,
        flexDirection:'row', 
        justifyContent: 'center',
        backgroundColor: '#E1F8D9',
        padding: 5,
        borderRadius:10
    }
    
})

export default ResultsShowScreen

ResultsShowScreen.navigationOptions = () => {
    return {
        headerShown:false,
        
    } 

}