import react from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

const ResultsDetail = ({result}) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: result.image_url}}/>
        <Text style={styles.title}>{result.name}</Text>
        <Text> {result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
    

}

const styles = StyleSheet.create({
    
    container:{
        marginLeft: 15
    },
    image: {
        width:250,
        height: 120,
        borderRadius:4,
        marginBottom: 5
    },
    title: {
        fontWeight: "bold",


    }

})

export default ResultsDetail