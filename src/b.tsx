/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
*/
import React from "react";
import { View, Text } from "react-native";
import { useTheme } from "@react-navigation/native";
import { type IBadge } from "./types";
import s from "./s";
export const Badge = /*#__PURE__*/React.memo((_ref:IBadge) => {
let {
value,
color
} = _ref;
const {
colors
} = useTheme();
const ss = s(null, null, colors);
let badge = /*#__PURE__*/React.createElement(View, null);
if (value) {
badge = /*#__PURE__*/React.createElement(View, {
style: [ss.badge, {
backgroundColor: color?.badge ? color?.badge : colors.primary
}]
}, /*#__PURE__*/React.createElement(Text, {
style: [ss.badgeText, {
color: color?.text ? color?.text : '#fff'
}],
lineBreakMode: 'tail',
numberOfLines: 1
}, value));
}
return badge;
});