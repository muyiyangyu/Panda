/**
 * Index
 * @file 主页（文章列表）
 * @module pages/home/index
 * @author Surmon <https://github.com/surmon-china>
 */

import React, { Component, useRef } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { IPageProps } from "/types/props";
import { optionStore } from "stores/option";
import colors from "style/colors";
import sizes from "style/sizes";
import { LANGUAGES } from "constants/language";
import { Loading } from "components/common/loading";
import Header from "components/layout/Header/header";
import HeaderTitle from "components/layout/Header/HeaderTitle";

export interface IIndexProps extends IPageProps {}

@observer
export class Home extends Component<IIndexProps> {
  constructor(props: IIndexProps) {
    super(props);
    this.state = { fadeAnim: new Animated.Value(0) };
  }

  onPressTheme = (): void => {
    optionStore.updateDarkTheme(!optionStore.darkTheme);
  };

  onPressToLogin = (): void => {};

  onPressUpdateLanguage = (): void => {
    optionStore.updateLanguage(
      optionStore.language === LANGUAGES.ZH ? LANGUAGES.EN : LANGUAGES.ZH
    );
  };

  render(): JSX.Element {
    const { styles } = obStyles;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Loading visible />
          <TouchableOpacity
            style={styles.toLogin}
            onPress={this.onPressToLogin}>
            <Text>登录</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.toLogin} onPress={this.onPressTheme}>
            <Text>主题</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const obStyles = observable({
  get styles() {
    return StyleSheet.create({
      toLogin: {
        marginTop: 40,
        height: 30,
        backgroundColor: "red"
      },
      container: {
        flex: 1,
        paddingTop: sizes.gap,
        backgroundColor: colors.background,
        borderWidth: 1,
        borderColor: colors.red
      },
      fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
      },
      fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
      },
      buttonRow: {
        flexDirection: "row",
        marginVertical: 16
      },
      box: {
        backgroundColor: "#61dafb",
        width: 80,
        height: 80,
        borderRadius: 4
      }
    });
  }
});
