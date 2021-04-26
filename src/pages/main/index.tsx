/**
 * Index
 * @file Main
 * @module pages/home/index
 * @author yangxiang
 */

import React, { Component, RefObject } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { IPageProps, NavigationProps } from "/types/props";
import { optionStore } from "stores/option";

export interface IIndexProps extends IPageProps {}

@observer
export class Main extends Component<IIndexProps> {
  onPressTheme = () => {
    optionStore.updateDarkTheme(!optionStore.darkTheme);
  };

  render() {
    const { styles } = obStyles;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPressTheme}>
          <Text>变化主题了Main</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const obStyles = observable({
  get styles() {
    return StyleSheet.create({
      container: {},
    });
  },
});
