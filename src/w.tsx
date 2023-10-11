/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
*/
import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, Linking } from "react-native";
import { useTheme } from '@react-navigation/native';
import DeviceInfo from 'react-native-device-info';
import s from './s';
const wrn = () => {
const {
colors
} = useTheme();
const ss = s(null, null, colors);
return /*#__PURE__*/React.createElement(Modal, {
animationType: "none",
transparent: true,
visible: true
}, /*#__PURE__*/React.createElement(View, {
style: [StyleSheet.absoluteFillObject, {
justifyContent: 'center',
alignItems: 'center'
}]
}, /*#__PURE__*/React.createElement(View, {
style: {
borderRadius: 10,
marginHorizontal: 15,
padding: 10,
backgroundColor: '#fae891'
}
}, /*#__PURE__*/React.createElement(Text, {
style: ss?.wrnWarning
}, `React Native UI DevKit\r\nWARNING`), /*#__PURE__*/React.createElement(Text, {
style: ss?.wrnText
}, `\r\nLicense not found for Bundle ID:\r\n` + DeviceInfo.getBundleId()), /*#__PURE__*/React.createElement(Text, {
style: ss?.wrnText
}, `\r\nGet it from,`), /*#__PURE__*/React.createElement(TouchableOpacity, {
onPress: () => {
Linking.openURL('https://reactnativeuidevkit.com');
}
}, /*#__PURE__*/React.createElement(Text, {
style: [ss?.itemText, ss?.wrnLink, ss?.small],
numberOfLines: 1,
allowFontScaling: true
}, "https://reactnativeuidevkit.com")), /*#__PURE__*/React.createElement(Text, {
style: ss?.wrnText
}, `\r\nFree use for those who distribute their apps outside of Google Play or App Store, follow the configuration steps in your app, there is no need to purchase a license, just use your bundle ID like: com.rn.ui.devkit`))));
};
export { wrn };