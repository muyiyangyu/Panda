/**
 * Modal
 * @file
 * @module src/components/common/modal.tsx
 * @author yangxiang
 */

import React, { Component, ReactNode } from "react";
import {
  Animated,
  Modal,
  SafeAreaView,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { IChildrenProps } from "types/props";
import { reaction, observable, action, computed } from "mobx";
import { observer } from "mobx-react";
import { StyleSheet } from "../styleSheet";
import mixins, { getHeaderButtonStyle } from "style/mixins";
import sizes from "style/sizes";
import colors from "style/colors";
import { Iconfont } from "components/common/iconfont";

export interface IModalProps extends IChildrenProps {
  visible: boolean;
  onClose?: () => void;
  title?: string;
  extra?: ReactNode | string;
  top?: number;
  opacity?: number;
}

@observer
export class BetterModal extends Component<IModalProps> {
  constructor(props: IModalProps) {
    super(props);
    //监听弹窗动画
    reaction(
      () => this.props.visible,
      (visible) => {},
      { fireImmediately: true }
    );
  }

  @observable private modalVisible: boolean = false;
  @observable.ref private maskOpacity = new Animated.Value(0);

  @action
  private updateVisible(visible: boolean) {
    this.modalVisible = visible;
  }

  @computed
  private get propOpacity(): number {
    return this.props.opacity || 0.8;
  }

  private updateMaskVisible = (visible: boolean, callback?: () => void) => {
    Animated.timing(this.maskOpacity, {
      useNativeDriver: false,
      toValue: visible ? this.propOpacity : 0,
      duration: 88
    }).start(callback);
  };

  private handleVisibleChange(visible: boolean) {
    if (visible) {
      this.updateVisible(true);
    } else {
      this.updateMaskVisible(false, () => {
        this.updateVisible(false);
      });
    }
  }

  render() {
    const { props } = this;
    const topHeaderHeight = props.top || 0;

    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        hardwareAccelerated={true}
        visible={this.modalVisible}
        onShow={() => this.updateMaskVisible(true)}>
        <Animated.View
          style={[styles.background, { opacity: this.maskOpacity }]}
        />
        <SafeAreaView style={styles.full}>
          <View
            style={[
              styles.full,
              styles.container,
              { marginTop: topHeaderHeight }
            ]}>
            <View style={styles.header}>
              <TouchableWithoutFeedback
                accessibilityLabel="关闭弹窗"
                onPress={props.onClose}>
                <Iconfont
                  name="cancel"
                  color={colors.textLink}
                  {...getHeaderButtonStyle()}
                />
              </TouchableWithoutFeedback>
              <Text style={styles.title}>{props.title}</Text>
              {props.extra && <View style={styles.extra}>{props.extra}</View>}
            </View>
            <View style={styles.full}>{props.children}</View>
          </View>
        </SafeAreaView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  full: {
    flex: 1
  },
  container: {
    backgroundColor: colors.cardBackground
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colors.grey
  },
  header: {
    ...mixins.rowCenter,
    justifyContent: "space-between",
    height: sizes.gap * 2,
    paddingHorizontal: 2,
    borderColor: colors.border,
    borderBottomWidth: sizes.borderWidth
  },
  title: {},
  extra: {}
});
