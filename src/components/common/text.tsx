/**
 * Text
 * @file 公共文本控件，解决了默认颜色和样式的问题
 * @module app/components/common/text
 */

import React from "react";
import { Text as RNText, TextProps, TextStyle } from "react-native";
import { observer } from "mobx-react";
import { IChildrenProps } from "/types/props";
import colors from "/style/colors";
import fonts from "/style/fonts";

export const Text = observer(
  (props: TextProps & IChildrenProps): JSX.Element => {
    return (
      <RNText
        {...props}
        style={[
          {
            color: colors.textDefault,
            fontFamily: fonts.fontFamily,
          },
          props.style,
        ]}>
        {props.children}
      </RNText>
    );
  }
);
