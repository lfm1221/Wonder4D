import React from 'react'
import { View,Text,Linking,StyleSheet,TouchableWithoutFeedback,Button,SafeAreaView,Navigator } from 'react-native'
import Freedomen from 'react-native-freedomen'
import Maintenance from './Maintenance.js';

export default class example extends React.Component {
    constructor(props){
      super(props);
    }

	open=()=>{
//		let url = 'http://demo.cbim.ren/om';
//        Linking.openURL(url)
        this.props.navigation.push('Maintenance')
	}

    render() {
        const styles = StyleSheet.create({
          container: {
            flex: 1,
            marginHorizontal: 16,
          },
          title: {
            textAlign: 'center',
            marginVertical: 8,
          },
          fixToText: {
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
          separator: {
            marginVertical: 8,
            borderBottomColor: '#737373',
            borderBottomWidth: StyleSheet.hairlineWidth,
          },
        });

         return (
            <SafeAreaView style={styles.container}>
              <View>
                <Button
                  title="维修管理"
                  onPress={this.open}
                />
              </View>

            </SafeAreaView>
         );
    }
}

