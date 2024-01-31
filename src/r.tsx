/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
*/
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { Fragment } from "react";
import { ActivityIndicator, Animated, View, Text, Switch, TouchableOpacity, Platform, StyleSheet, TouchableNativeFeedback, LayoutAnimation, Dimensions } from "react-native";
import { backgroundColor } from './s';
import { useTheme } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { MotiView } from "moti";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Icon } from "./i";
import h from "./h";
import { isTablet } from "react-native-device-info";
import { Button } from "./index";
import { Badge } from "./b";
let swipeableTimeout;
export const render = (itemRef, i, expanded, header, headerToTitle, item, tabletIpadMenuType, pressed, setPressed, checkedItem, checkedValue, setCheckedValue, leftHaptic, setLeftHaptic, rightHaptic, setRightHaptic, hidden, motiStage, colors, style, styles, count) => {
if (item?.checkbox != null || item?.radio != null) {
item.delay = false;
}
if (item?.radio != null && Platform.OS == 'android') {
item.checkbox = item?.radio;
}
if (item) {
const renderLeftActions = (progress, drag) => {
const width = item.swipeable?.left?.length > 1 ? item.swipeable?.left?.length * 74 : 74;
if (drag == null) {}
return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(View, {
style: [StyleSheet.absoluteFillObject, {
backgroundColor: item.swipeable?.left[0]?.backgroundColor ?? colors?.tertiary
}]
}), item.swipeable?.left?.length > 2 && /*#__PURE__*/React.createElement(View, {
style: [StyleSheet.absoluteFillObject, {
backgroundColor: item.swipeable?.left[1]?.backgroundColor ?? colors?.tertiary,
left: Dimensions.get('screen').width / 3
}]
}), /*#__PURE__*/React.createElement(Animated.View, {
style: [styles?.leftAction, {
width
}]
}, item.swipeable?.left?.map((action, index) => {
const trans = progress.interpolate({
inputRange: [0, 1],
outputRange: [-74 * (leftHaptic ? item.swipeable?.left?.length : index + 1), 0]
});
index == 0 && trans.addListener(_ref => {
let {
value
} = _ref;
if (value >= (item.swipeable?.left?.length == 1 ? 40 : 20)) {
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
setLeftHaptic(true);
} else {
leftHaptic && setLeftHaptic(false);
}
});
return index <= 2 && /*#__PURE__*/React.createElement(Animated.View, {
key: index,
style: {
transform: [{
translateX: trans
}],
zIndex: 3 - index,
width: leftHaptic && index == 0 ? '100%' : 74,
position: 'absolute',
left: index * 74,
top: 0,
bottom: 0
}
}, /*#__PURE__*/React.createElement(RectButton, {
style: [styles?.faj, {
backgroundColor: action.backgroundColor ?? colors?.tertiary
}],
onPress: () => {
action.closeOnPress && itemRef?.current?.close();
action?.onPress && action.onPress();
}
}, /*#__PURE__*/React.createElement(View, {
style: [styles?.fj, styles?.alignSelf_fe]
}, /*#__PURE__*/React.createElement(Animated.View, {
style: styles?.renderIconAction
}, action.icon && /*#__PURE__*/React.createElement(Icon, {
name: action.icon.name,
type: action.icon.type,
color: action.icon.color ?? colors?.text,
size: action.icon.size
}), action.label && /*#__PURE__*/React.createElement(Text, {
style: [{
fontSize: 15,
fontWeight: "500",
color: action.color ?? colors?.text
}],
numberOfLines: 1,
allowFontScaling: true
}, action.label)))));
})));
};
const renderRightActions = (progress, drag) => {
const width = item.swipeable?.right?.length > 1 ? item.swipeable?.right?.length * 74 : 74;
if (drag == null) {}
return /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(View, {
style: [StyleSheet.absoluteFillObject, {
backgroundColor: item.swipeable?.right[0]?.backgroundColor ?? colors?.tertiary
}]
}), item.swipeable?.right?.length > 2 && /*#__PURE__*/React.createElement(View, {
style: [StyleSheet.absoluteFillObject, {
backgroundColor: item.swipeable?.right[1]?.backgroundColor ?? colors?.tertiary,
left: Dimensions.get('screen').width / 3
}]
}), /*#__PURE__*/React.createElement(Animated.View, {
style: [styles?.rightAction, {
width
}]
}, item.swipeable?.right?.map((action, index) => {
const trans = progress.interpolate({
inputRange: [0, 1],
outputRange: [74 * (rightHaptic ? item.swipeable?.right?.length : index + 1), 0]
});
index == 0 && trans.addListener(_ref2 => {
let {
value
} = _ref2;
if (value <= (item.swipeable?.right?.length == 1 ? -40 : -20)) {
LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
setRightHaptic(true);
} else {
rightHaptic && setRightHaptic(false);
}
});
return index <= 2 && /*#__PURE__*/React.createElement(Animated.View, {
key: index,
style: {
transform: [{
translateX: trans
}],
zIndex: 3 - index,
width: rightHaptic && index == 0 ? '100%' : 74,
position: 'absolute',
left: index * 74,
top: 0,
bottom: 0
}
}, /*#__PURE__*/React.createElement(RectButton, {
style: [styles?.faj, {
backgroundColor: action.backgroundColor ?? colors?.tertiary
}],
onPress: () => {
action.closeOnPress && itemRef?.current?.close();
action?.onPress && action.onPress();
}
}, /*#__PURE__*/React.createElement(View, {
style: [styles?.fj, styles?.alignSelf_fs]
}, /*#__PURE__*/React.createElement(Animated.View, {
style: styles?.renderIconAction
}, action.icon && /*#__PURE__*/React.createElement(Icon, {
name: action.icon.name,
type: action.icon.type,
color: action.icon.color ?? colors?.text,
size: action.icon.size
}), action.label && /*#__PURE__*/React.createElement(Text, {
style: [{
fontSize: 15,
fontWeight: "500",
color: action.color ?? colors?.text
}],
numberOfLines: 1,
allowFontScaling: true
}, action.label)))));
})));
};
const _content = () => {
return /*#__PURE__*/React.createElement(View, {
style: [styles?.item, style?.flex && {
flex: style.flex
}, style?.marginLeft && {
marginLeft: style.marginLeft
}, (style?.backgroundColor || Platform.OS == 'android' && checkedValue) && {
backgroundColor: Platform.OS == 'android' && checkedValue ? '#00000015' : style.backgroundColor
}, i == pressed && !checkedItem && {
backgroundColor: Platform.OS == 'ios' ? tabletIpadMenuType && (isTablet() || Platform.isPad) ? colors?.ios?.selected : colors?.ios?.underlay : 'transparent'
}, item.padding == false && {
paddingHorizontal: 0,
paddingVertical: 0
}, tabletIpadMenuType && isTablet() && item.selected && {
backgroundColor: Platform.OS == 'ios' ? colors?.ios?.selected : colors?.android?.selected
}]
}, checkedItem && Platform.OS == 'ios' && /*#__PURE__*/React.createElement(Icon, {
name: checkedValue || item.data?.checked ? 'checkmark-circle' : 'circle',
type: checkedValue || item.data?.checked ? 'ionicons' : 'feather',
color: checkedValue || item.data?.checked ? colors?.primary : colors?.tertiary,
size: checkedValue || item.data?.checked ? 27 : 24,
style: {
width: 24,
marginLeft: expanded ? 0 : 2,
marginRight: expanded ? 16 : 14
}
}), checkedItem && Platform.OS == 'android' && item.icon?.checked == null && /*#__PURE__*/React.createElement(View, {
style: [styles?.checkedItemAndroidRoot, {
backgroundColor: checkedValue ? colors?.primary : colors?.tertiary,
opacity: checkedValue && !item.disabled ? 1 : 0.5
}]
}, checkedValue && /*#__PURE__*/React.createElement(Icon, {
name: "checkmark-outline",
type: 'ionicons',
size: 24,
color: "#fff"
})), item.radio != null && item.checkbox == null && item.collapsible == null && item.switch == null && Platform.OS == 'ios' && /*#__PURE__*/React.createElement(View, {
style: [styles?.itemLeftIcon, styles?.itemRadioIosdRoot, backgroundColor('transparent'), item.disabled && {
opacity: 0.5
}]
}, (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(Fragment, null, item.radio && /*#__PURE__*/React.createElement(Icon, {
name: "check",
type: 'entypo',
color: colors?.primary,
size: 21
})), item?.loading && /*#__PURE__*/React.createElement(ActivityIndicator, {
color: colors?.secondary
})), item.checkbox != null && item.collapsible == null && item.switch == null && Platform.OS == 'android' && /*#__PURE__*/React.createElement(View, {
style: [styles?.itemLeftIcon, backgroundColor('transparent'), item.disabled && {
opacity: 0.5
}]
}, (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(Fragment, null, item.checkbox && /*#__PURE__*/React.createElement(View, {
style: styles?.itemCheckAndroidRoot
}, /*#__PURE__*/React.createElement(View, {
style: styles?.itemCheckAndroidBall
})), !item.checkbox && /*#__PURE__*/React.createElement(View, {
style: styles?.itemCheckAndroidCircle
})), item?.loading && /*#__PURE__*/React.createElement(ActivityIndicator, {
color: colors?.secondary
})), (item.icon && Platform.OS == 'ios' || item.icon && !item.checkbox == true && Platform.OS == 'android') && /*#__PURE__*/React.createElement(View, {
style: [!item.icon.component && styles?.itemLeftIcon, item.icon.backgroundColor && backgroundColor(item.icon.backgroundColor), Platform.OS == 'android' && item.disabled && {
opacity: 0.5
}]
}, Platform.OS == 'ios' && item.icon?.onPress && /*#__PURE__*/React.createElement(RectButton, {
activeOpacity: 1,
underlayColor: 'transparent',
onPress: () => {
item.icon?.onPress && item.icon?.onPress();
},
style: styles?.onPressIconIos
}, Icon({
name: item.icon.name,
type: item.icon.type,
color: item.icon.color,
size: item.icon.size
})), (Platform.OS == 'android' || !item.icon?.onPress) && /*#__PURE__*/React.createElement(View, {
style: h.getAndroidIconScale() && {
transform: [{
scale: 1.3
}]
}
}, item.icon.name && /*#__PURE__*/React.createElement(Icon, {
name: item.icon.name,
type: item.icon.type,
color: item.icon.color,
size: item.icon.size,
backgroundColor: item.icon.backgroundColor,
native: true
}), Platform.OS == 'ios' && item.icon.component && item.icon.component, Platform.OS == 'android' && item.icon.component && item.icon.component, Platform.OS == 'android' && checkedItem && checkedValue && item.icon.checked && item.icon.checked)), /*#__PURE__*/React.createElement(View, {
style: [styles?.ff, item.disabled && {
opacity: 0.5
}]
}, item?.title && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(View, {
style: {
flex: 1
}
}, /*#__PURE__*/React.createElement(Text, {
style: [styles?.itemText, item.color?.title && {
color: item.color.title
}, Platform.OS == 'ios' && tabletIpadMenuType && (isTablet() || Platform.isPad) && (item.selected || i == pressed && !checkedItem) && {
color: '#fff'
}],
numberOfLines: 1,
allowFontScaling: true
}, item.title && (Platform.OS == 'ios' ? item.title : headerToTitle ? header : item.title ?? '')), Platform.OS == 'ios' && item?.subdescription && /*#__PURE__*/React.createElement(Text, _extends({
style: [styles?.footer, {
marginTop: -10,
marginHorizontal: 0,
marginBottom: 10,
minHeight: 18
}]
}, item?.numberOfLines?.subdescription && {
numberOfLines: item?.numberOfLines?.subdescription
}), item?.subdescription), Platform.OS == 'android' && item?.description && /*#__PURE__*/React.createElement(Text, _extends({
style: [styles?.itemDescription, item.color?.description && {
color: item.color.description
}, {
marginTop: -13,
textAlign: 'left'
}]
}, item?.numberOfLines?.description && {
numberOfLines: item?.numberOfLines?.description
}), item.description ?? '')), Platform.OS == 'ios' && item.description != '' && item.description && item.subdescription == null && /*#__PURE__*/React.createElement(View, {
style: {
flex: 1,
zIndex: 1
}
}, /*#__PURE__*/React.createElement(Text, {
style: styles?.itemDescription,
numberOfLines: 1
}, item?.description))), item.component && /*#__PURE__*/React.createElement(View, {
style: [styles?.fj, {
minHeight: Platform.OS == 'ios' ? 44 : 48
}]
}, item.component)), /*#__PURE__*/React.createElement(View, {
style: [{
flexDirection: 'row',
alignItems: 'center'
}, item.disabled && {
opacity: 0.5
}]
}, item.badge && /*#__PURE__*/React.createElement(Badge, {
value: item.badge.value,
color: {
badge: item.badge.color?.badge ? item.badge.color.badge : colors?.primary,
text: item.badge.color?.text ? item.badge.color.text : '#fff'
}
}), item.checkbox != null && item.checkbox && item.collapsible == null && item.switch == null && (item.action?.iOS == null || item.action?.iOS == false) && item.radio == null && (item?.loading == null || item?.loading == false) && Platform.OS == 'ios' && /*#__PURE__*/React.createElement(Icon, {
name: "check",
type: 'entypo',
color: colors?.primary,
size: 21,
style: {
marginLeft: 10
}
}), item.success && item.success.visible && item.checkbox == null && (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(Icon, {
name: "checkcircle",
type: 'antdesign',
color: item.success.color ? item.success.color : '#39CA61',
size: 19,
style: {
marginLeft: 10
}
}), item.alert && item.alert.visible && item.checkbox == null && (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(Icon, {
name: "alert",
type: 'foundation',
color: item.alert.color ? item.alert.color : '#EABB00',
size: 22,
style: {
marginLeft: 10
}
}), item.switch && item.checkbox == null && item.radio == null && item.collapsible == null && /*#__PURE__*/React.createElement(View, {
style: {
height: 29,
justifyContent: 'center',
marginLeft: 10,
zIndex: 2
}
}, (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(Switch, {
value: item?.switch?.value,
disabled: item.switch?.disabled,
onValueChange: value => {
item?.switch?.onValueChange && item?.switch?.onValueChange(value);
}
})), item.swipeable?.left?.length == null && item.swipeable?.right?.length == null && item.collapsible != null && (item.action?.iOS == null || item.action?.iOS == false) && (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(Icon, {
name: item.collapsible ? 'chevron-up' : 'chevron-down',
type: 'material-community',
color: colors?.secondary,
size: 25,
style: {
marginLeft: 10,
marginRight: -5
}
})), (Platform.OS == 'android' || item.action?.iOS) && item.action && item.action.icon && (item.action.onPress || item.action.onLongPress) && /*#__PURE__*/React.createElement(Fragment, null, (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(View, {
style: {
width: expanded ? Platform.OS == 'ios' ? 36 : 45 : 31
}
}, item.action.icon.name && /*#__PURE__*/React.createElement(Button, _extends({
icon: true
}, expanded && {
left: true
}, {
data: {
icon: {
name: item.action.icon.name,
type: item.action.icon.type,
color: item.action.icon.color || colors?.text,
size: item.action.icon.size
},
onPress: () => {
item.action.onPress && item.action.onPress();
},
onLongPress: () => {
item.action.onLongPress && item.action.onLongPress();
},
swipeable: Platform.OS == 'ios' && (item.swipeable?.left?.length >= 1 || item.swipeable?.right?.length >= 1 || item.swipeable?.iOS)
},
style: [Platform.OS == 'ios' && {
marginRight: -16
}]
})), item.action.icon.component && item.action.icon.component)), item.cleaner && item.cleaner.visible && item.cleaner.onPress && /*#__PURE__*/React.createElement(Fragment, null, (item?.loading == null || item?.loading == false) && /*#__PURE__*/React.createElement(Button, {
icon: true,
data: {
icon: {
name: Platform.OS == 'ios' ? 'close-circle' : 'close',
type: 'ionicons',
color: colors?.tertiary,
size: Platform.OS == 'ios' ? 21 : 23
},
onPress: () => {
item.cleaner.onPress && item.cleaner.onPress();
},
swipeable: Platform.OS == 'ios' && (item.swipeable?.left?.length >= 1 || item.swipeable?.right?.length >= 1 || item.swipeable?.iOS)
},
style: {
marginRight: Platform.OS == 'ios' ? -16 : -12
}
})), (item?.loading && Platform.OS == 'ios' && item.radio == null || item?.loading && (item.checkbox == null || item.collapsible != null || item.switch) && Platform.OS == 'android') && /*#__PURE__*/React.createElement(ActivityIndicator, {
color: colors?.secondary,
style: {
marginLeft: 13,
marginRight: -2,
marginVertical: 12
}
}), item.swipeable?.left?.length == null && item.swipeable?.right?.length == null && item.collapsible == null && item.checkbox == null && item.radio == null && !item.switch && !item.collapsible && !checkedItem && item.chevron != false && (item?.loading == null || item?.loading == false) && (item.action?.iOS == null || item.action?.iOS == false) && (item.onPress || item.onLongPress) && /*#__PURE__*/React.createElement(View, {
style: styles?.chevron
}, /*#__PURE__*/React.createElement(Icon, {
name: "chevron-right",
type: 'material-community',
color: colors?.secondary,
size: 25
})), (item.disabled || item.loading) && /*#__PURE__*/React.createElement(View, {
style: [{
backgroundColor: 'transparent'
}, StyleSheet.absoluteFillObject]
}));
};
return /*#__PURE__*/React.createElement(Fragment, {
key: i
}, (Platform.OS == 'ios' || !tabletIpadMenuType) && !item.separators && !h.getAndroidOldVersion() && !hidden && i > 0 && !item.separator?.data && (item.icon && (item.icon.name || item.icon.component) || item.checkbox != null && Platform.OS == 'android' || item.radio != null && Platform.OS == 'ios') && /*#__PURE__*/React.createElement(View, {
style: [styles?.dividerWithIcon, Platform.OS == 'ios' && item.radio != null && {
...styles?.dividerWithRadioIosIcon
}, item.separator && item.separator?.start && {
marginLeft: item.separator?.start
}, pressed == i - 1 && {
backgroundColor: 'transparent'
}]
}), (item.radio == null && Platform.OS == 'ios' || Platform.OS == 'android') && (Platform.OS == 'ios' || !tabletIpadMenuType) && !item.separators && !h.getAndroidOldVersion() && !hidden && i > 0 && !item.separator?.data && (item.icon == null && Platform.OS == 'ios' || item.icon == null && item.checkbox == null && Platform.OS == 'android') && /*#__PURE__*/React.createElement(View, {
style: [styles?.dividerWithoutIcon, item.separator && item.separator?.start && {
marginLeft: item.separator?.start
}, pressed == i - 1 && {
backgroundColor: 'transparent'
}]
}), /*#__PURE__*/React.createElement(View, {
style: [styles?.root, style, count > 1 && i >= 1 && styles?.noBorderTopRadius, count != i + 1 && styles?.noBorderBottomRadius, i == pressed && !checkedItem && {
zIndex: 9
}, Platform.OS == 'android' && item.disabled && {
opacity: 0.5
}, item.padding == false && {
paddingHorizontal: 0,
paddingVertical: 0
}]
}, !hidden && Platform.OS == 'ios' && (item.swipeable?.left?.length >= 1 || item.swipeable?.right?.length >= 1 || item.swipeable?.iOS) && /*#__PURE__*/React.createElement(Swipeable, _extends({
ref: itemRef,
enabled: !item?.loading && !item.swipeable?.disabled && !item.swipeable?.iOS,
friction: 1,
leftThreshold: 37,
rightThreshold: 37,
enableTrackpadTwoFingerGesture: true,
useNativeAnimations: true,
onBegan: () => {
item.swipeable?.onBegan && item.swipeable.onBegan();
},
onEnded: e => {
const translationX = e.nativeEvent.translationX;
if (leftHaptic && translationX >= (item.swipeable?.left?.length == 1 ? 100 : 60) * (item.swipeable?.left?.length ?? 1)) {
const leftAction = item.swipeable?.left[0];
leftAction.onPress && leftAction.onPress();
}
if (rightHaptic && translationX <= (item.swipeable?.right?.length == 1 ? -100 : -60) * (item.swipeable?.right?.length ?? 1)) {
const rightAction = item.swipeable?.right[0];
rightAction.onPress && rightAction.onPress();
}
},
overshootLeft: item.swipeable?.left?.length >= 1 && item.swipeable?.overshootLeft != false,
overshootRight: item.swipeable?.right?.length >= 1 && item.swipeable?.overshootRight != false
}, item.swipeable?.left?.length >= 1 && {
renderLeftActions: renderLeftActions
}, item.swipeable?.right?.length >= 1 && {
renderRightActions: renderRightActions
}, {
overshootFriction: 3
}), /*#__PURE__*/React.createElement(RectButton, {
onPress: () => {
if (item?.loading || item.disabled || !item.onPress && !item.onLongPress) {
return;
}
if (!checkedItem) {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: true
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: true
});
setPressed(i);
setTimeout(() => {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: false
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: false
});
setPressed(null);
}, Platform.OS == 'ios' ? item.collapsible != null || item.delay == false ? 100 : 500 : 0);
}
if (Platform.OS == 'ios' && !(setCheckedValue && checkedItem) && item.onLongPress == null) {
setTimeout(() => {
item.onPress && item.onPress();
}, Platform.OS == 'ios' ? 0 : 100);
}
},
onActiveStateChange: e => {
if (item?.loading || item.disabled || !item.onPress && !item.onLongPress) {
return;
}
if (e) {
swipeableTimeout = setTimeout(() => {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: true
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: true
});
setPressed(i);
}, item.swipeable?.left?.length >= 1 || item.swipeable?.right?.length >= 1 || item.swipeable?.delay ? 100 : 0);
} else {
clearTimeout(swipeableTimeout);
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: false
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: false
});
setPressed(null);
}
}
}, _content())), !hidden && (Platform.OS == 'android' || !item.swipeable?.left && !item.swipeable?.right && !item.swipeable?.iOS) && /*#__PURE__*/React.createElement(TouchableNativeFeedback, {
useForeground: false,
onPress: () => {
if (setCheckedValue && checkedItem) {
setCheckedValue(!checkedValue);
item.checked = !checkedValue;
}
if (!(setCheckedValue && checkedItem) || Platform.OS == 'android') {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: true
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: true
});
}
if (Platform.OS == 'android' && !(setCheckedValue && checkedItem)) {
setPressed(i);
setTimeout(() => {
item.onPress && item.onPress();
}, 100);
}
},
onLongPress: () => {
if (!(setCheckedValue && checkedItem) || Platform.OS == 'android') {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: true
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: true
});
}
if (!(setCheckedValue && checkedItem)) {
setPressed(i);
setTimeout(() => {
item.onLongPress && item.onLongPress();
}, Platform.OS == 'ios' ? 0 : 100);
}
},
onPressIn: () => {
if (setCheckedValue && checkedItem) {
setCheckedValue(!checkedValue);
item.checked = !checkedValue;
} else {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: true
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: true
});
setPressed(i);
}
},
onPressOut: e => {
const changedTouches = e.nativeEvent.changedTouches;
if (!checkedItem || Platform.OS == 'android') {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: true
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: true
});
setPressed(i);
setTimeout(() => {
item.separator?.data && item.separator?.data[0] && item.separator?.data[0]?.separators?.updateProps('trailing', {
highlighted: false
});
item.separator?.data && item.separator?.data[1] && item.separator?.data[1]?.separators?.updateProps('trailing', {
highlighted: false
});
setPressed(null);
}, Platform.OS == 'ios' ? item.collapsible != null || item.delay == false ? 100 : 500 : 0);
}
if (Platform.OS == 'ios' && changedTouches && !(setCheckedValue && checkedItem) && item.onLongPress == null) {
setTimeout(() => {
item.onPress && item.onPress();
}, Platform.OS == 'ios' ? 0 : 100);
}
},
delayPressIn: 100,
disabled: item?.loading || item.disabled || !item.onPress && !item.onLongPress
}, _content()), hidden == 'left' && Platform.OS == 'ios' && item.swipeable?.left?.length >= 1 && /*#__PURE__*/React.createElement(Fragment, null, motiStage == 1 && /*#__PURE__*/React.createElement(MotiView, {
style: [styles?.item, styles?.alignSelf_fs],
from: {
backgroundColor: item.swipeable?.left[0].backgroundColor ?? colors.secondary,
width: '20%',
height: item.swipeable?.heightEffect ?? (Platform.OS == 'ios' ? h.getIosOldVersion() ? 46 : 44 : 55),
opacity: 1
},
animate: {
width: '110%',
height: 2,
opacity: 1
},
transition: {
type: 'timing',
duration: 300
}
}), motiStage == 2 && /*#__PURE__*/React.createElement(MotiView, {
style: [styles?.item, styles?.alignSelf_fs],
from: {
backgroundColor: item.swipeable?.left[0].backgroundColor ?? colors.secondary,
width: '110%',
height: 2,
opacity: 1
},
animate: {
height: 0,
opacity: 0
},
transition: {
type: 'timing',
duration: 300
}
})), hidden == 'right' && Platform.OS == 'ios' && item.swipeable?.right?.length >= 1 && /*#__PURE__*/React.createElement(Fragment, null, motiStage == 1 && /*#__PURE__*/React.createElement(MotiView, {
style: [styles?.item, styles?.alignSelf_fe],
from: {
backgroundColor: item.swipeable?.right[0].backgroundColor ?? colors.secondary,
width: '20%',
height: item.swipeable?.heightEffect ?? (Platform.OS == 'ios' ? h.getIosOldVersion() ? 46 : 44 : 55),
opacity: 1
},
animate: {
width: '110%',
height: 2,
opacity: 1
},
transition: {
type: 'timing',
duration: 300
}
}), motiStage == 2 && /*#__PURE__*/React.createElement(MotiView, {
style: [styles?.item, styles?.alignSelf_fe],
from: {
backgroundColor: item.swipeable?.right[0].backgroundColor ?? colors.secondary,
width: '110%',
height: 2,
opacity: 1
},
animate: {
height: 0,
opacity: 0
},
transition: {
type: 'timing',
duration: 300
}
}))));
}
return /*#__PURE__*/React.createElement(Fragment, {
key: i
});
};
export const button = (i, item, dashed, transparent, link, small, gray, blue, destructive, pressed, setPressed, colors, styles) => {
let colorsTheme = colors ?? useTheme().colors;
let bgColor = Platform.OS == 'ios' ? colorsTheme?.ios?.item : colorsTheme?.android?.item;
let backgroundColorPressed = Platform.OS == 'ios' ? colorsTheme?.ios?.underlay : colorsTheme?.android?.underlay;
let textColor = colorsTheme?.primary;
let loadingColor = colorsTheme?.secondary;
let opacity = 1;
if (h.getIosOldVersion()) {
dashed = false;
}
if (destructive) {
textColor = '#ff0000';
}
if (transparent) {
bgColor = 'transparent';
backgroundColorPressed = 'transparent';
opacity = 0.6;
} else if (gray) {
bgColor = colorsTheme.button;
backgroundColorPressed = colorsTheme.button;
opacity = 0.6;
} else if (blue) {
bgColor = colorsTheme.primary;
backgroundColorPressed = colorsTheme.primary;
textColor = '#fff';
loadingColor = '#fff';
opacity = 0.8;
}
if (item.color) {
textColor = item.color;
}
if (item && !item.switch && (item.onPress || item.onLongPress)) {
return /*#__PURE__*/React.createElement(View, {
style: [link ? styles?.rootLinkButton : styles?.rootButton, dashed && {
borderStyle: 'dashed',
borderColor: colorsTheme.border,
borderWidth: 1
}, i == pressed && {
zIndex: 9
}, item.style]
}, !link && /*#__PURE__*/React.createElement(TouchableNativeFeedback, _extends({}, item.rippleColor && {
background: TouchableNativeFeedback.Ripple(item.rippleColor, false)
}, {
useForeground: false,
onPress: () => {
setPressed(i);
if (Platform.OS == 'android') {
setTimeout(() => {
item.onPress && item.onPress();
}, 100);
}
},
onLongPress: () => {
setPressed(i);
item.onLongPress && item.onLongPress();
},
onPressIn: () => {
setPressed(i);
},
onPressOut: e => {
const changedTouches = e.nativeEvent.changedTouches;
setPressed(i);
setTimeout(() => {
setPressed(null);
}, Platform.OS == 'ios' ? item.collapsible != null || item.delay == false ? 100 : 500 : 0);
if (Platform.OS == 'ios' && changedTouches) {
setTimeout(() => {
item.onPress && item.onPress();
}, Platform.OS == 'ios' ? 0 : 100);
}
},
delayPressIn: 100,
disabled: item?.loading || item.disabled || !item.onPress
}), /*#__PURE__*/React.createElement(View, {
style: [styles?.item, {
backgroundColor: bgColor,
borderRadius: Platform.OS == 'ios' ? 14 : 25
}, small && {
minHeight: Platform.OS == 'ios' ? h.getIosOldVersion() ? 36 : 34 : 30
}, small && {
paddingTop: 0,
paddingBottom: 0
}, !small && !item.component && {
height: Platform.OS == 'ios' ? h.getIosOldVersion() ? 44 : 49 : 53
}, i == pressed && {
backgroundColor: backgroundColorPressed,
opacity
}, item?.loading && {
opacity
}, item.padding == false && {
paddingHorizontal: 0,
paddingVertical: 0
}, {
justifyContent: 'center'
}, {
marginHorizontal: 0
}, item.disabled && {
opacity: 0.5
}, item.style]
}, item.icon ? /*#__PURE__*/React.createElement(View, {
style: [styles?.itemLeftIcon, !item.title && {
marginRight: 0
}, item.icon.backgroundColor && backgroundColor(item.icon.backgroundColor)]
}, item.icon.name && /*#__PURE__*/React.createElement(Icon, {
name: item.icon.name,
type: item.icon.type,
color: item.icon.color,
size: item.icon.size,
backgroundColor: item.icon.backgroundColor
}), item.icon.component && item.icon.component) : /*#__PURE__*/React.createElement(View, {
style: {
flexDirection: 'row'
}
}, /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement(View, {
style: {
flexDirection: 'row',
alignItems: item.description ? 'flex-start' : 'center',
justifyContent: 'center'
}
}, item.component && item.component, !item.component && /*#__PURE__*/React.createElement(Text, {
style: [styles?.itemText, {
color: textColor,
paddingTop: 0,
paddingBottom: 0
}, item.fontSize && {
fontSize: item.fontSize
}, item.fontWeight && {
fontWeight: item.fontWeight
}],
numberOfLines: 1,
allowFontScaling: true
}, !item?.loading && item.title && item.title), item?.loading && /*#__PURE__*/React.createElement(ActivityIndicator, {
color: loadingColor
})))))), link && /*#__PURE__*/React.createElement(TouchableOpacity, {
onPress: () => {
setPressed(i);
setTimeout(() => {
item.onPress && item.onPress();
}, Platform.OS == 'ios' ? 0 : 100);
},
onPressIn: () => {
setPressed(i);
},
onPressOut: () => {
setPressed(i);
setTimeout(() => {
setPressed(null);
}, Platform.OS == 'ios' ? item.collapsible != null || item.delay == false ? 100 : 500 : 0);
},
disabled: item?.loading || item.disabled || !item.onPress,
style: {
opacity: item?.loading || item.disabled || !item.onPress ? 0.4 : 1
}
}, /*#__PURE__*/React.createElement(Text, {
style: [styles?.itemText, {
paddingTop: 0,
paddingBottom: 0
}, {
color: item.textColor || textColor
}, small && styles?.small, item.fontWeight && {
fontWeight: item.fontWeight
}],
numberOfLines: 1,
allowFontScaling: true
}, item.title)));
}
return /*#__PURE__*/React.createElement(Fragment, {
key: i
});
};
export const iconButton = (i, item, left, right, small, pressed, setPressed, colors, styles) => {
let colorsTheme = colors ?? useTheme().colors;
let bgColor = 'transparent';
let backgroundColorPressed = 'transparent';
if (item && !item.switch && (item.onPress || item.onLongPress || item.onPressIn)) {
return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Animated.View, {
style: [styles?.rootIconButton, {
borderWidth: 0,
width: !small ? 44 : Platform.OS == 'ios' ? 32 : 34,
height: !small ? 44 : Platform.OS == 'ios' ? 32 : 34,
borderRadius: 100
}, Platform.OS == 'ios' && left && {
left: -10
}, Platform.OS == 'ios' && right && {
right: -10
}]
}, Platform.OS == 'ios' && item.swipeable && /*#__PURE__*/React.createElement(RectButton, {
activeOpacity: 0,
onPress: () => {
if (item?.loading || item.disabled) {
return;
}
setPressed(i);
item.onPress && item.onPress();
}
}, /*#__PURE__*/React.createElement(View, {
style: [{
backgroundColor: bgColor,
width: !small ? 44 : Platform.OS == 'ios' ? 32 : 34,
height: !small ? 44 : Platform.OS == 'ios' ? 32 : 34,
alignItems: 'center',
justifyContent: 'center'
}, i == pressed && {
backgroundColor: backgroundColorPressed
}, item.disabled && {
opacity: 0.5
}]
}, item.icon && item.icon.name && !item?.loading && /*#__PURE__*/React.createElement(Icon, {
name: item.icon.name,
type: item.icon.type,
color: item.icon.color ? item.icon.color : colorsTheme.text,
size: item.icon.size,
animation: item.icon.animation,
backgroundColor: item.icon.backgroundColor,
iterationCount: item.icon.iterationCount,
resizeMode: item.icon.resizeMode,
multicolor: item.icon.multicolor,
weight: item.icon.weight,
scale: item.icon.scale
}), item?.loading && /*#__PURE__*/React.createElement(ActivityIndicator, {
color: item.icon?.color ?? colorsTheme.secondary
}))), (Platform.OS == 'android' || !item.swipeable || item.swipeable == null) && /*#__PURE__*/React.createElement(TouchableNativeFeedback, {
useForeground: false,
onPress: () => {
setPressed(i);
item.onPress && item.onPress();
},
onLongPress: () => {
setPressed(i);
item.onLongPress && item.onLongPress();
},
disabled: item?.loading || item.disabled,
pressRetentionOffset: item.pressRetentionOffset && item.pressRetentionOffset
}, /*#__PURE__*/React.createElement(View, {
style: [{
backgroundColor: bgColor,
width: !small ? 44 : Platform.OS == 'ios' ? 32 : 34,
height: !small ? 44 : Platform.OS == 'ios' ? 32 : 34,
alignItems: 'center',
justifyContent: 'center'
}, i == pressed && {
backgroundColor: backgroundColorPressed
}, item.disabled && {
opacity: 0.5
}]
}, item.icon && item.icon.name && !item?.loading && /*#__PURE__*/React.createElement(Icon, {
name: item.icon.name,
type: item.icon.type,
color: item.icon.color ? item.icon.color : colorsTheme.text,
size: item.icon.size,
animation: item.icon.animation,
backgroundColor: item.icon.backgroundColor,
iterationCount: item.icon.iterationCount,
resizeMode: item.icon.resizeMode,
multicolor: item.icon.multicolor,
weight: item.icon.weight,
scale: item.icon.scale
}), item?.loading && /*#__PURE__*/React.createElement(ActivityIndicator, {
color: item.icon?.color ?? colorsTheme.secondary
})))), item.badge && /*#__PURE__*/React.createElement(View, {
pointerEvents: "none",
style: {
position: 'absolute',
top: 0,
right: Platform.OS == 'ios' ? -9.5 : 0,
transform: [{
scale: 0.8
}]
}
}, /*#__PURE__*/React.createElement(Badge, {
value: item.badge.value,
color: {
badge: item.badge.color ? item.badge.color : colorsTheme.primary,
text: item.badge.text ? item.badge.text : '#fff'
}
})));
}
return /*#__PURE__*/React.createElement(Fragment, {
key: i
});
};