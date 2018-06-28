/*
 * 修改个人详细信息
 */
import React, {PureComponent} from "react";
import {StyleSheet, View, TextInput, Image} from "react-native";

type Props = {
    id: String,
    info: Object,
}

type State = {

}

export default class ModifyInfoItem extends PureComponent<Props, State> {
    render() {
        let {id, info} = this.props;

        return(
            <View style={styles.container}>
                <TextInput underlineColorAndroid="transparent" editable={false} style={styles.title}>{info.title}</TextInput>
                <View style={styles.content}>
                    <TextInput underlineColorAndroid="transparent" maxLength={16} keyboardType={'default'} secureTextEntry={info.title.indexOf('密码')>-1?true:false} style={styles.inputText}>{info.detail}</TextInput>
                    <Image source={require('../../img/mine/cancel.png')} style={styles.cancelIcon}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#bbb',
        width: 320,
        marginHorizontal: 20,
        marginVertical: 12,
    },
    title: {
        alignItems: 'center',
        paddingVertical: 0,
        height: 35,
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderLeftWidth: 1,
        borderLeftColor: '#bbb',
        height: 35,
    },
    inputText: {
        paddingVertical: 0,
    },
    cancelIcon: {
        opacity: 0.4,
        width: 15,
        height: 15,
        color: '#fff',
        marginRight: 10,
    }
})