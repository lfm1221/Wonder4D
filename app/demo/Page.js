import React, { Component } from 'react';
import {ScrollView,Image,Text,  View} from "react-native";
import Freedomen from 'react-native-freedomen'
import XgRequest from '../config/xgRequest';
//import view from './view';

export default class extends React.Component {
    static navigationOptions = {
        title: '资产运维任务统计',
    }

    constructor(props) {
        super(props)

        // 将需要动态更新的数据放入 state
        this.state = {
          maintenanceInfo: {},
        };
    }

    async getMaintenanceInfo() {

                try {
                  const url = 'http://whdt-0422.h.earth.cbim.ren/om/statistics-maintenance/api/maintenance?a=getTotalWithType';

                  const urlPar = {
//                    type: 'time',
//                    category: 'asset',
                    pid: 445,
                  };
                  const maintenanceInfo = await XgRequest.sendRequest(url,urlPar);

                  // 捕获错误，具体捕获过程需与写api的同学商量确定
                  if (maintenanceInfo.error_code) {
                    this.xgToast.show(maintenanceInfo.reason, 2000, 'error');
                  } else {
                    // 更新state，render函数自动重新渲染DOM中变化了的那部分
                    this.setState({ maintenanceInfo });
                  }
                } catch (e) {
                  console.log(e);
                }
    }

    render() {
        const tagStyle = (data, prop) => {
            let color = data.activity == prop ? '#191919' : '#999'
            let borderBottomColor = data.activity == prop ? '#2EBBC4' : '#ddd'
            return {
                color: color,
                borderBottomColor: borderBottomColor,
                borderBottomWidth: 2,
                padding: 15,
                paddingLR: 20
            }
        }

        this.getMaintenanceInfo();

        return (
            <View style={{flex: 1, backgroundColor: '#f5f5f5'}}>
                 <Text>
                       维修任务总数：{this.state.maintenanceInfo.Data ? this.state.maintenanceInfo.Data.maintenance : "暂无数据"}
                 </Text>
                 <Text>
                       巡检任务总数：{this.state.maintenanceInfo.Data ? this.state.maintenanceInfo.Data.patrol : "暂无数据"}
                 </Text>
                 <Text>
                       保养任务总数：{this.state.maintenanceInfo.Data ? this.state.maintenanceInfo.Data.maintain : "暂无数据"}
                 </Text>
            </View>
        );

    }

}