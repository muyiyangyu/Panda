/**
 * Loading
 * @file 全局Loading届面
 * @module src/components/common/loading.tsx
 * @author yangxiang
 */

import React, { useEffect, useRef } from "react";
import { observer } from "mobx-react";
import { ActivityIndicator, Animated, View } from "react-native";
import { StyleSheet, Text } from "components";
import { useFocusEffect } from "@react-navigation/native";

interface ILoadingProps {
  visible: boolean;
}

export const Loading = observer((props: ILoadingProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true
    }).start();
  };

  useFocusEffect(() => {
    fadeIn();
    return fadeOut;
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.fadingContainer,
          {
            opacity: fadeAnim // Bind opacity to animated value
          }
        ]}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.fadingText}>加载中...</Text>
      </Animated.View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  fadingContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    backgroundColor: "black"
  },
  fadingText: {
    textAlign: "center",
    color: "white",
    marginTop: 10
  }
});
