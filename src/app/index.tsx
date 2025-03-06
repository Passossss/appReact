import { DefaultTheme } from "@react-navigation/native"
import { View , Text, StyleSheet, Alert, Button, TouchableOpacity} from "react-native"

export default function Index(){
    function Msg() {
        window.alert("Bem vindo, Gustavo!")
        return Alert.alert("Bem vindo, Gustavo!")

        //<Button style={} tittle="Exibir Mensagem" onPress={Msg} />
    }
    return (

            <div>
            <View style={styles.container}>
                <Text  style= {styles.tittle}>
                Olá garoto de programa
                </Text>
            <a style= {styles.outhertittle}>Teste subtitulo</a>
            <h1>Bah</h1>
           
            <Button title="Exibir Mensagem" onPress={Msg} />

            <TouchableOpacity style={styles.button} onPress={Msg}>
            <Text style={styles.buttonText}>Saiba mais</Text>
            </TouchableOpacity>
            
        <Text style={styles.container}>
            MANO
        </Text>

        </View>
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
        color: "#453467",
        fontSize: 24,
        fontWeight: "bold",
    },
    outhertittle: {
        color: "grey",
        fontSize: 30,
        //fontWeight: "",
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 5,
        marginTop: 20,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
      },

})
