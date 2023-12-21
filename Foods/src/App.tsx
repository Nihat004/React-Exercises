import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, ScrollView, View, Image, Text, StyleSheet } from 'react-native';
export const Stack = createStackNavigator()
const styles = StyleSheet.create({
  area: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    margin: 30,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topics: {
    marginTop: 10,
    marginLeft: 26,
  },
  topicsText: {
    fontSize: 32,
    color: 'black',
    fontWeight: 'bold'
  },
  topicsText2: {
    fontSize: 20,
    color: '#333333',
    fontWeight: '500',
  },
  image: {
    flexDirection: 'row',
    borderRadius: 24,
    marginTop: 20,
    justifyContent: 'center',
    marginLeft: 3,
  },

  icon: {
    flexDirection: 'row',
    margin: 10,
    marginLeft: 10,
    justifyContent: 'space-between',

  },

  Text1: {
    fontSize: 25,
    color: 'black',
    maginRight: 10,
    fontWeight: 'bold',
  },
  Text2: {
    fontSize: 25
  },
  Text: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 27,
    marginLeft: 18,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    display: "flex",
    marginHorizontal: 17,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 12
  },

  footerText: {
    marginLeft: 16
  },

  footerText1: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold'
  },

  footText2: {
    marginTop: 14,
    fontSize: 20,
    color: 'black',
    fontWeight: '600'
  },

  footicon: {
    backgroundColor: '#4E5156',
    borderRadius: 8,
    padding: 15,
    marginLeft: 118,
    marginBottom: 24,

  },

  footicon2: {
    flexDirection: 'row'
  }

})