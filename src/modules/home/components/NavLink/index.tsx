import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Link} from '../Link'
import { Path, StackNavigationProps } from '../../../../../App'


interface ILink{
    path: Path,
    title: string
}
const links: ILink[] = [
    {
        path: 'details',
        title: 'Details'
    }
]
export function NavLink() {
  return (
    <View style={styles.container}>
    <Text style={styles.subtitle}>Animations</Text>
      {links.map(link=><Link key={link.path} title={link.title} path={link.path }/>)}
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderRadius: 10,
        gap: 8,
        paddingVertical: 16
    },
    subtitle:{
        fontSize: 24,
       
    }
})