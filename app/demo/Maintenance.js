import React,{ Component }  from 'react'
import { View,WebView } from 'react-native'
//import { WebView } from 'react-native-webview'
import Freedomen from 'react-native-freedomen'

export default class MyWeb extends React.Component {

    render() {
        let userID = '742'
        let mobile = '13177806722'
        let appid = 'wxac1342406e8cafca'
        let noncestr = 'K7LxwH9GY9bg1pI0'
        let timestamp = '1592892822'
        let signature = '3e3649d559d7f386e28ec781626c07ccee118733'
        let approvedMain = 'true'
        let approvedMainRec = 'true'
        let approvedMaintask = 'true'
        let approvedMainBackLog = 'true'
        let host = 'http://whdt-0422.h.earth.cbim.ren/wechat/270/maintenance/index'

        let url = host + '?' + userID + '&' + mobile + '&' + appid + '&' + noncestr + '&' + timestamp + '&' + signature + '&'
        + approvedMain + '&' + approvedMainRec + '&' + approvedMaintask + '&' + approvedMainBackLog

//        let url = 'http://whdt-0422.h.earth.cbim.ren/wechat/270/maintenance/index?userID=742&mobile=13177806722&projectID=270&appid=wxac1342406e8cafca&noncestr=K7LxwH9GY9bg1pI0&timestamp=1592892822&signature=3e3649d559d7f386e28ec781626c07ccee118733&approvedMain=true&approvedMainRec=true&approvedMaintask=true&approvedMainBackLog=true';

        return (
          <WebView
            source={{uri: url}}
            style={{marginTop: 20}}
          />
        );
      }

}

