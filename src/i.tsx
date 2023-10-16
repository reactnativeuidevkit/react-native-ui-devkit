/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
*/
import React from "react";
import { Animated, Platform, View } from "react-native";
import { useTheme } from '@react-navigation/native';
import { SFSymbol } from "react-native-sfsymbols";
import { type IIcon } from './types';
import { Badge } from "./b";
import * as Animatable from 'react-native-animatable';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import s from './s';
export const Icon = (_ref:IIcon) => {
let {
name,
type,
color,
size,
animation,
iterationCount,
style,
weight,
scale,
resizeMode,
multicolor,
badge,
backgroundColor,
native = false
} = _ref;
const AntDesignAnimatedIcon = Animatable.createAnimatableComponent(AntDesign);
const EntypoAnimatedIcon = Animatable.createAnimatableComponent(Entypo);
const EvilIconsAnimatedIcon = Animatable.createAnimatableComponent(EvilIcons);
const FeatherAnimatedIcon = Animatable.createAnimatableComponent(Feather);
const FontAwesomeAnimatedIcon = Animatable.createAnimatableComponent(FontAwesome);
const FontAwesome5AnimatedIcon = Animatable.createAnimatableComponent(FontAwesome5);
const FontAwesome5ProAnimatedIcon = Animatable.createAnimatableComponent(FontAwesome5Pro);
const FontistoAnimatedIcon = Animatable.createAnimatableComponent(Fontisto);
const FoundationAnimatedIcon = Animatable.createAnimatableComponent(Foundation);
const IoniconsAnimatedIcon = Animatable.createAnimatableComponent(Ionicons);
const MaterialCommunityIconsAnimatedIcon = Animatable.createAnimatableComponent(MaterialCommunityIcons);
const MaterialIconsAnimatedIcon = Animatable.createAnimatableComponent(MaterialIcons);
const OcticonsAnimatedIcon = Animatable.createAnimatableComponent(Octicons);
const SimpleLineIconsAnimatedIcon = Animatable.createAnimatableComponent(SimpleLineIcons);
const ZocialAnimatedIcon = Animatable.createAnimatableComponent(Zocial);
const SFSymbolAnimatedIcon = Animated.createAnimatedComponent(SFSymbol);
const colors = useTheme().colors;
const ss = s();
let icon = /*#__PURE__*/React.createElement(View, null);
if (Platform.OS == 'android' && native) {
if (Platform.Version == 25) {
color = backgroundColor != 'transparent' ? backgroundColor ?? colors?.secondary : color;
}
if (Platform.Version == 26) {
color = colors?.secondary;
}
if (Platform.Version == 29) {
color = backgroundColor ?? colors?.secondary;
}
}
if (type == 'antdesign') {
icon = animation ? /*#__PURE__*/React.createElement(AntDesignAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(AntDesign, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'entypo') {
icon = animation ? /*#__PURE__*/React.createElement(EntypoAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(Entypo, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'evilicons') {
icon = animation ? /*#__PURE__*/React.createElement(EvilIconsAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(EvilIcons, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'feather') {
icon = animation ? /*#__PURE__*/React.createElement(FeatherAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(Feather, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'font-awesome') {
icon = animation ? /*#__PURE__*/React.createElement(FontAwesomeAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(FontAwesome, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'font-awesome5') {
icon = animation ? /*#__PURE__*/React.createElement(FontAwesome5AnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(FontAwesome5, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'font-awesome5pro') {
icon = animation ? /*#__PURE__*/React.createElement(FontAwesome5ProAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(FontAwesome5Pro, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'fontisto') {
icon = animation ? /*#__PURE__*/React.createElement(FontistoAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(Fontisto, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'foundation') {
icon = animation ? /*#__PURE__*/React.createElement(FoundationAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(Foundation, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'ionicons') {
icon = animation ? /*#__PURE__*/React.createElement(IoniconsAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(Ionicons, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'material-community') {
icon = animation ? /*#__PURE__*/React.createElement(MaterialCommunityIconsAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(MaterialCommunityIcons, {
name: name,
color: color,
size: size,
style: style
});
} else if (!type || type == 'material') {
icon = animation ? /*#__PURE__*/React.createElement(MaterialIconsAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(MaterialIcons, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'octicons') {
icon = animation ? /*#__PURE__*/React.createElement(OcticonsAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(Octicons, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'simplelineicons') {
icon = animation ? /*#__PURE__*/React.createElement(SimpleLineIconsAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(SimpleLineIcons, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'zocial') {
icon = animation ? /*#__PURE__*/React.createElement(ZocialAnimatedIcon, {
name: name,
color: color,
size: size,
style: style,
animation: animation,
iterationCount: iterationCount,
easing: 'ease'
}) : /*#__PURE__*/React.createElement(Zocial, {
name: name,
color: color,
size: size,
style: style
});
} else if (type == 'sfsymbol') {
icon = animation ? /*#__PURE__*/React.createElement(SFSymbolAnimatedIcon, {
name: name,
weight: weight,
scale: scale,
color: color,
size: size,
resizeMode: resizeMode,
multicolor: multicolor,
style: style
}) : /*#__PURE__*/React.createElement(SFSymbol, {
name: name,
weight: weight,
scale: scale,
color: color,
size: size,
resizeMode: resizeMode,
multicolor: multicolor,
style: style
});
}
return /*#__PURE__*/React.createElement(View, null, icon, badge && /*#__PURE__*/React.createElement(View, {
pointerEvents: "none",
style: ss?.iconBadgeRoot
}, /*#__PURE__*/React.createElement(Badge, {
value: badge.value,
color: {
badge: badge.color?.badge ? badge.color.badge : colors.primary,
text: badge.color?.text ? badge.color.text : '#fff'
}
})));
};