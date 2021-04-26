/**
 * Index
 * @file 登录
 * @module pages/home/index
 * @author yang xiang
 */

import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { StyleSheet } from "/components/styleSheet";
import { IPageProps } from "/types/props";
import { userStore } from "stores/user";
import { SafeAreaView } from "react-native-safe-area-context";

export interface IIndexProps extends IPageProps {}

@observer
export class Login extends Component<IIndexProps> {
  onPressTheme = (): void => {
    userStore.updateIsSignIn(true);
  };

  render(): JSX.Element {
    const { styles } = obStyles;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.onPressTheme}>
            <Text>去首页</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const obStyles = observable({
  get styles() {
    return StyleSheet.create({
      container: {}
    });
  }
});
