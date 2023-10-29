import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigate } from '../../../../shared/hooks/use-navigate'
import { Path, StackNavigationProps } from '../../../../../App'

interface LinkProps{
    path: Path,
    title: string
}
export function Link({path, title}: LinkProps){

    const navigation = useNavigate()

    const handlerNavigation = () => {
        navigation.navigate(path)
    }
    return (
        <TouchableOpacity style={styles.container} onPress={handlerNavigation}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.arrow}/>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container:{
        paddingVertical: 16,
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: "#eafdee"
    },
    title: {
        fontSize: 16,
    },
    arrow:{
        width:20,
        height:20,
        borderRadius: 10,
        backgroundColor: "#eafdee"
        
    }
})