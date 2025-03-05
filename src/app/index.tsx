import { DefaultTheme } from "@react-navigation/native"
import { View , Text, StyleSheet} from "react-native"

export default function Index(){
    return (
        <div>
            <View style={styles.container}>
                <Text  style= {styles.tittle}>
                Olá garoto de programa</Text>
            <a style= {styleClean.tittle}>Teste subtitulo</a>
            <h1>Bah</h1>
            </View>
        <Text style={styleClean.design}>
            MANO
        </Text>
            

        </div>
       
            
    )    
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        justifyContent: "center"
    },
    tittle: {
        color: "red",
        fontSize: 24,
        fontWeight: "bold",
    },
    

})
const styleClean = StyleSheet.create({
    tittle: {
        color: "grey",
        fontSize: 30,
        //fontWeight: "",
    },
    design:{
        flex: 10,
        padding : 40,
        justifyContent : "center"
    }
})
