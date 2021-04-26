/**
 * Common header
 * @file 全局公共头部组件
 * @module app/components/layout/header
 * @author Surmon <https://github.com/surmon-china>
 */

import React from "react";
import {
  StyleSheet,
  TextProps,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { Text } from "components/common/text";
import { LANGUAGE_KEYS } from "constants/language";
import colors from "style/colors";
import fonts from "style/fonts";
import i18n from "stores/i18n";
import { IS_IOS } from "config";

interface I18nTitleProps extends TextProps {
  size?: number;
  color?: string;
  i18nKey?: LANGUAGE_KEYS;
}

export const AutoI18nTitle = observer(
  (props: I18nTitleProps): JSX.Element => {
    const { i18nKey, style } = props;
    const styles = [
      {
        color: props.color,
        fontSize: props.size
      },
      style
    ];
    return <Text style={styles}>{i18nKey && i18n.t(i18nKey)}</Text>;
  }
);

interface IHeaderTitleProps extends I18nTitleProps {
  title?: string;
  onDoubleClick?(): void;
}

export const CustomHeaderTitle = observer(
  (props: IHeaderTitleProps): JSX.Element => {
    const { title, i18nKey, style, onDoubleClick, ...i18nProps } = props;
    const styles = [style, headerStyles.styles.title];

    const handleClick = () => {
      onDoubleClick && onDoubleClick();
    };
    return i18nKey ? (
      <AutoI18nTitle {...i18nProps} style={styles} i18nKey={i18nKey} />
    ) : (
      <Text style={styles}>{title}</Text>
    );
  }
);

export const headerStyles = observable({
  get styles() {
    return StyleSheet.create({
      title: {
        ...fonts.h3,
        // fontSize: IS_IOS ? 21 : fonts.h3.fontSize,
        fontWeight: "bold",
        color: colors.cardBackground
      }
    });
  }
});
