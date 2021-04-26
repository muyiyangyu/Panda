/**
 * Remind
 * @file
 * @module src/components/common/remind.tsx
 * @author yangxiang
 */

import React from "react";
import { StyleProp, TextStyle, Text } from "react-native";
import { observer } from "mobx-react";
import colors from "style/colors";
import { Iconfont } from "components/common/iconfont";

interface IRemindProps {
  size?: number;
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const remind = observer(
  (props: IRemindProps): JSX.Element => {
    return (
      <Iconfont
        style={props.style}
        size={props.size || 10}
        color={props.color || colors.red}
        name="star"
      />
    );
  }
);
