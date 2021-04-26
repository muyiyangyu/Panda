/**
 * Auth
 * @file 跳转页面设定
 * @module src/pages/common/auth.tsx
 * @author yangxiang
 */

import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Text, StyleSheet } from "components";
import { observer } from "mobx-react";
import { userStore } from "stores/user";

const Auth = observer(() => {
  useEffect(() => {});

  return userStore.isShowLoading ? (
    <View style={styles.container}>
      <View style={styles.loadingView}>
        <ActivityIndicator size="large" color="white" />
        <Text style={styles.loadingText}>加载中...</Text>
      </View>
    </View>
  ) : null;
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0)"
  },
  loadingView: {
    backgroundColor: "#111",
    width: 120,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  loadingText: {
    color: "white",
    marginTop: 10
  }
});

export default Auth;
