import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App()
const card_cidade = (nome, uf) => {
    return (
        <View style={styles.card}>
                <Text style={styles.cidade}>{nome}</Text> 
                <> - </>
                 <Text style={styles.uf}>{uf} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between', 
        backgroundColor: '#f087cd'
    },
    cidade:{
        fontSize: 18,
        color: '#d92b8b',
        fontWeight: '600'
    },
    uf: {
        fontSize: 18, 
        color: '#99115c', 
        fontWeight: '900'
    }
});