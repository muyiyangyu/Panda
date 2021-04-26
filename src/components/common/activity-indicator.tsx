/* eslint-disable react-native/no-inline-styles */
/**
 * AutoActivityIndicator
 * @file 加载指示器控件
 * @module app/components/common/activity-indicator
 */

import React from "react";
import {
  ActivityIndicator,
  TextStyle,
  ViewStyle,
  View,
  ColorValue
} from "react-native";
import { observer } from "mobx-react";
import { Text } from "./text";
import colors from "/style/colors";
import fonts from "/style/fonts";
import mixins from "/style/mixins";

export interface IAutoActivityIndicatorProps {
  size?: number | "small" | "large";
  color?: ColorValue;
  style?: ViewStyle;
  text?: string;
  textStyle?: TextStyle;
}

export const AutoActivityIndicator = observer(
  (props: IAutoActivityIndicatorProps): JSX.Element => {
    const getIndicator = (style?: ViewStyle | null) => (
      <ActivityIndicator
        animating={true}
        style={style}
        size={props.size || "large"}
        color={props.color || "white"}
      />
    );

    if (props.text) {
      return (
        <View style={[{ ...mixins.colCenter }, props.style]}>
          {getIndicator(null)}
          <Text
            style={[
              {
                ...fonts.small,
                marginTop: 5,
                color: colors.textSecondary
              },
              props.textStyle
            ]}>
            {props.text}
          </Text>
        </View>
      );
    }

    return getIndicator(props.style);
  }
);
