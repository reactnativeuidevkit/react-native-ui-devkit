/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
*/
import React, { useState, useImperativeHandle, forwardRef, Fragment, useRef, useEffect, createContext, useContext } from "react";
import { Animated, View, Text, Platform, LayoutAnimation, Dimensions, Appearance, PlatformColor } from "react-native";
import { MarginTop, MarginBottom, MarginHorizontal, PaddingTop, PaddingBottom, PaddingHorizontal, BorderRadius, TitleFontSize, MediumFontSize, DescriptionFontSize } from "./s";
import { type IRNUIDevKitProvider, type IList, type IItem, type IButton, type ISeparator } from "./types";
import { DarkTheme, DefaultTheme, useTheme } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { isTablet } from "react-native-device-info";
import { render, button, iconButton } from "./r";
import { Icon } from "./i";
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import s from "./s";
import h from "./h";
const IosOldVersion = () => {
return h.getIosOldVersion();
};
const AndroidOldVersion = () => {
return h.getAndroidOldVersion();
};
const RNUIDevKitContext = /*#__PURE__*/createContext({});
RNUIDevKitContext.displayName = 'RNUIDevKitProvider';
const RNUIDevKitProvider = (_ref:IRNUIDevKitProvider) => {
let {
children,
theme = 'auto',
backgroundColor = 'both'
} = _ref;
const defaultTheme = DefaultTheme.colors;
const darkTheme = DarkTheme.colors;
let colors = useTheme().colors;
if (colors.default == null) {
colors.default = {
...defaultTheme
};
}
if (colors.dark == null) {
colors.dark = {
...darkTheme
};
}
if ((Appearance.getColorScheme() == 'light' && theme == 'auto') || theme == 'light') {
if (backgroundColor == 'both') {
colors.background = Platform.OS == 'ios' ? !IosOldVersion() ? '#F2F1F6' : '#F0EFF5' : AndroidOldVersion() ? '#FAFAFA' : '#F3F3F3';
}
if (backgroundColor == 'android' && Platform.OS == 'android') {
colors.background = AndroidOldVersion() ? '#FAFAFA' : '#F3F3F3';
}
if (backgroundColor == 'ios' && Platform.OS == 'ios') {
colors.background = !IosOldVersion() ? '#F2F1F6' : '#F0EFF5';
}
if (backgroundColor == 'none' || backgroundColor == 'android' && Platform.OS == 'ios' || backgroundColor == 'ios' && Platform.OS == 'android') {
colors.background = colors.default?.background;
}
if (colors.default?.card) {
colors.card = colors.default?.card;
}
colors.text = '#000';
colors.primary = Platform.OS == 'ios' ? '#0079FE' : DefaultTheme.colors.primary;
colors.secondary = '#777777';
colors.tertiary = '#999999';
colors.button = '#e5e5e6';
colors.tabbar = {
color: '#F6F6F6',
line: '#BBBBBB'
};
colors.ios = {
headerBackground: '#F6F6F6',
item: '#FFFFFF',
underlay: '#e0e0e0',
line: PlatformColor('separator'),
selected: '#4DA1FF'
};
colors.android = {
headerBackground: '#F3F3F3',
item: '#FAFAFA',
underlay: '#FFFFFF',
line: '#e0e0e0',
selected: '#e0e0e0'
};
} else if ((Appearance.getColorScheme() == 'dark' && theme == 'auto') || theme == 'dark') {
if (backgroundColor == 'both') {
colors.background = Platform.OS == 'ios' ? '#000000' : AndroidOldVersion() ? '#171717' : '#010101';
}
if (backgroundColor == 'android' && Platform.OS == 'android') {
colors.background = AndroidOldVersion() ? '#171717' : '#010101';
}
if (backgroundColor == 'ios' && Platform.OS == 'ios') {
colors.background = '#000000';
}
if (backgroundColor == 'none' || backgroundColor == 'android' && Platform.OS == 'ios' || backgroundColor == 'ios' && Platform.OS == 'android') {
colors.background = colors.dark?.background;
}
if (colors.dark?.card) {
colors.card = colors.dark?.card;
}
colors.text = '#FFFFFF';
colors.primary = Platform.OS == 'ios' ? '#077CFD' : DarkTheme.colors.primary;
colors.secondary = Platform.OS == 'ios' ? '#888' : '#999';
colors.tertiary = '#666666';
colors.button = '#171717';
colors.tabbar = {
color: '#121212',
line: '#333333'
};
colors.ios = {
headerBackground: '#000000',
item: '#1c1c1e',
underlay: '#2C2C2E',
line: '#3F3F41',
selected: '#4DA1FF'
};
colors.android = {
headerBackground: '#010101',
item: '#171717',
underlay: '#222',
line: '#303030',
selected: '#303030'
};
}
return /*#__PURE__*/React.createElement(RNUIDevKitContext.Provider, {
value: {
theme,
backgroundColor
}
}, /*#__PURE__*/React.createElement(GestureHandlerRootView, {
style: {
flex: 1
}
}, children));
};
const ColorsContext = /*#__PURE__*/createContext(DefaultTheme);
ColorsContext.displayName = 'useColors';
const useColors = () => {
const context = useContext(ColorsContext);
const colors = {
background: context?.colors?.background,
border: context?.colors?.border,
card: context?.colors?.card,
notification: context?.colors?.notification,
primary: context?.colors?.primary,
text: context?.colors?.text,
secondary: context?.colors?.secondary,
tertiary: context?.colors?.tertiary,
button: context?.colors?.button,
tabbar: context?.colors?.tabbar,
ios: {
headerBackground: context.colors?.ios?.headerBackground,
item: context.colors?.ios?.item,
underlay: context.colors?.ios?.underlay,
line: context.colors?.ios?.line
},
android: {
headerBackground: context.colors?.android?.headerBackground,
item: context.colors?.android?.item,
underlay: context.colors?.android?.underlay,
line: context.colors?.android?.line
}
};
return colors;
};
const List = /*#__PURE__*/React.memo( /*#__PURE__*/forwardRef((_ref2:IList, ref) => {
let {
header,
data,
footer,
marginTop = true,
headerOnAndroid,
footerOnAndroid,
tabletIpadMenuType,
expanded,
separators = true
} = _ref2;
const {
width
} = Dimensions.get('screen');
if (ref != null) {}
if (tabletIpadMenuType && Platform.OS == 'android' && isTablet() && width < 768) {
tabletIpadMenuType = false;
}
const {
colors
} = useTheme();
const ss = s(tabletIpadMenuType, expanded, colors);
const [pressed, setPressed] = useState(null);
const [hidden] = useState(false);
const [motiStage] = useState(0);
const itemRef = useRef(null);
data = data?.filter && data?.filter(item => {
return item != null && item;
});
return data?.length > 0 && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(View, {
style: [ss?.groupMarginTop, (!marginTop || Platform.OS == 'android' && tabletIpadMenuType || AndroidOldVersion()) && {
paddingTop: 0
}]
}), header != null && header != undefined && header != '' && (Platform.OS == 'ios' || headerOnAndroid) && /*#__PURE__*/React.createElement(Text, {
style: [ss?.header, AndroidOldVersion() && {
marginTop: 8
}]
}, header), separators && /*#__PURE__*/React.createElement(View, {
style: [ss?.divider, {
top: 0
}]
}), data && data.map((item, i) => {
return item && i < 10 && (item.title || item.component) && render(itemRef, i, expanded, header, null, item, tabletIpadMenuType, pressed, setPressed, null, null, null, null, null, null, null, hidden, motiStage, colors, item.style, ss, data.length);
}), !AndroidOldVersion() && /*#__PURE__*/React.createElement(React.Fragment, null, separators && /*#__PURE__*/React.createElement(View, {
style: [ss?.divider, {
marginTop: 0
}]
}), footer != null && footer != undefined && footer != '' && (Platform.OS == 'ios' || footerOnAndroid) && /*#__PURE__*/React.createElement(Text, {
style: ss?.footer
}, footer)));
}));
const Item = /*#__PURE__*/React.memo( /*#__PURE__*/forwardRef((_ref3:IItem, ref) => {
let {
header,
data,
footer,
index,
count,
headerToTitle,
marginTop = true,
headerOnAndroid,
footerOnAndroid,
style,
tabletIpadMenuType,
expanded,
flex,
separators = true
} = _ref3;
const {
width
} = Dimensions.get('screen');
if (tabletIpadMenuType && Platform.OS == 'android' && isTablet() && width < 768) {
tabletIpadMenuType = false;
}
const {
colors
} = useTheme();
const ss = s(tabletIpadMenuType, expanded);
const [pressed, setPressed] = useState(null);
const [checkedItem, setCheckedItem] = useState();
const [checkedValue, setCheckedValue] = useState(false);
const [leftHaptic, setLeftHaptic] = useState(null);
const [rightHaptic, setRightHaptic] = useState(null);
const [hidden, setHidden] = useState(null);
const [motiStage, setMotiStage] = useState(0);
const itemRef = useRef(null);
const hideItem = (func, side) => {
side == 'left' && openLeftActions();
side == 'right' && openRightActions();
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
setMotiStage(1);
setTimeout(() => {
setMotiStage(2);
}, 300);
setHidden(side);
setTimeout(() => {
setMotiStage(0);
}, 400);
setTimeout(() => {
func && func();
}, 600);
};
const openLeftActions = () => {
itemRef?.current?.openLeft && itemRef?.current?.openLeft();
};
const openRightActions = () => {
itemRef?.current?.openRight && itemRef?.current?.openRight();
};
const closeActions = () => {
itemRef?.current?.close && itemRef?.current?.close();
};
const setChecked = checked => {
setCheckedValue(checked);
data.checked = checked;
};
const showChecked = checked => {
setChecked(false);
setCheckedItem(checked);
};
useImperativeHandle(ref, () => ({
hideItem,
closeActions,
openLeftActions,
openRightActions,
setChecked,
showChecked
}));
useEffect(() => {
const options = {
enableVibrateFallback: false,
ignoreAndroidSystemSettings: true
};
(leftHaptic != null || rightHaptic != null) && ReactNativeHapticFeedback.trigger("impactHeavy", options);
}, [leftHaptic, rightHaptic]);
if (headerOnAndroid && headerToTitle) {
headerToTitle = null;
}
let itemsCount = count ? count : 1;
return data && (data.title || data.component) && /*#__PURE__*/React.createElement(View, {
style: flex && {
flex: 1
}
}, /*#__PURE__*/React.createElement(View, {
style: [(index == null || index == 0) && ss?.groupMarginTop, (!marginTop || Platform.OS == 'android' && tabletIpadMenuType || AndroidOldVersion()) && {
paddingTop: 0
}, {
zIndex: 0
}]
}), header != null && header != undefined && header != '' && (Platform.OS == 'ios' || headerOnAndroid) && (index == null || index == 0) && /*#__PURE__*/React.createElement(Text, {
style: [ss?.header, AndroidOldVersion() && {
marginTop: 8
}]
}, header), (index == null || index == 0) && separators && /*#__PURE__*/React.createElement(View, {
style: [ss?.divider, {
top: 0
}]
}), render(itemRef, index || 0, expanded, header, headerToTitle, data, tabletIpadMenuType, pressed, setPressed, checkedItem, checkedValue, setCheckedValue, leftHaptic, setLeftHaptic, rightHaptic, setRightHaptic, hidden, motiStage, colors, style, ss, itemsCount), !AndroidOldVersion() && /*#__PURE__*/React.createElement(View, null, (index == null || index + 1 == count) && separators && /*#__PURE__*/React.createElement(View, {
style: [ss?.divider, {
marginTop: 0
}]
}), footer != null && footer != undefined && footer != '' && (Platform.OS == 'ios' || footerOnAndroid) && (index == null || index + 1 == count) && /*#__PURE__*/React.createElement(Text, {
style: ss?.footer
}, footer)));
}));
const Button = /*#__PURE__*/React.memo((_ref4:IButton) => {
let {
header,
data,
footer,
dashed,
transparent,
icon,
left,
right,
link,
small,
gray,
blue,
destructive,
style,
marginTop = true,
headerOnAndroid,
footerOnAndroid
} = _ref4;
const {
colors
} = useTheme();
const ss = s();
const [pressed, setPressed] = useState(null);
return data && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(Animated.View, {
style: [ss?.groupMarginTop, (!marginTop || icon) && {
paddingTop: 0
}, {
zIndex: 0
}]
}), header != null && header != undefined && header != '' && !icon && (Platform.OS == 'ios' || headerOnAndroid) && /*#__PURE__*/React.createElement(Text, {
style: [ss?.headerButton, AndroidOldVersion() && {
marginTop: 8
}]
}, header), /*#__PURE__*/React.createElement(Animated.View, {
style: style
}, !icon && button(0, data, dashed, transparent, link, small, gray, blue, destructive, pressed, setPressed, colors, ss), icon && iconButton(0, data, left, right, small, pressed, setPressed, colors, ss)), footer != null && footer != undefined && footer != '' && !icon && (Platform.OS == 'ios' || footerOnAndroid) && /*#__PURE__*/React.createElement(Text, {
style: ss?.footerButton
}, footer));
});
const Divider = /*#__PURE__*/React.memo(() => {
const ss = s();
return /*#__PURE__*/React.createElement(View, {
style: ss?.dividerView
});
});
const Separator = /*#__PURE__*/React.memo((_ref5:ISeparator) => {
let {
props,
start,
end,
expanded,
tabletIpadMenuType
} = _ref5;
const colors = useTheme().colors;
const ss = s(tabletIpadMenuType, expanded);
return !AndroidOldVersion() && /*#__PURE__*/React.createElement(View, {
style: ss?.separatorRoot
}, /*#__PURE__*/React.createElement(View, {
style: [ss?.separatorView, {
marginLeft: start ? start : 0,
marginRight: end ? end : 0,
backgroundColor: props?.highlighted ? 'transparent' : Platform.OS == 'ios' ? colors.ios ? colors.ios.line : colors.border : colors.android ? colors.android.line : colors.border
}]
}));
});
export { RNUIDevKitProvider, useColors, List, Item, Button, MarginTop, MarginBottom, MarginHorizontal, PaddingTop, PaddingBottom, PaddingHorizontal, BorderRadius, Divider, Separator, Icon, TitleFontSize, MediumFontSize, DescriptionFontSize, IosOldVersion, AndroidOldVersion };