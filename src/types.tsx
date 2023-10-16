/*
* MIT License
* Copyright © 2023 React Native UI DevKit - All rights reserved
*/
import type { ReactNode } from "react"
import type { ViewStyle } from "react-native"
import type { SymbolResizeMode, SymbolScale, SymbolWeight } from "react-native-sfsymbols"
type IconType = "antdesign" | "entypo" | "evilicons" | "feather" | "font-awesome" | "font-awesome5" | "font-awesome5pro" | "fontisto" | "foundation" | "ionicons" | "material-community" | "material" | "octicons" | "simplelineicons" | "zocial" | "sfsymbol"

interface Icon {
/**
 * Defines the icon name.
 */
name?: string,
/**
 * Sets the icon type.
 */
type?: IconType,
/**
 * Sets the icon size.
 */
size?: number,
/**
 * Sets the icon color.
 */
color?: string,
/**
 * Sets the background color of the icon.
 */
backgroundColor?: string,
/**
 * Defines a custom component in place of the icon.
 */
component?: ReactNode
}

export interface IRNUIDevKitProvider {
/**
 * Specifies which child component will be wrapped by the provider.
 */
children: ReactNode,
/**
 * Set to theme auto, light or dark.
 * 
 * Default is auto, system theme.
 */
theme?: 'auto' | 'light' | 'dark',
/**
 * Set system background color.
 * 
 * Default is both, system background color.
 */
backgroundColor?: 'both' | 'android' | 'ios' | 'none'
}

/**
 * This interface props contains several parameters for configuring the item.
 */
export interface IItemProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines the description to be used on the item.
 * 
 * NOTE: The behavior of this property follows the native standard for each platform, Android / iOS.
 */
description?: string,
/**
 * Similar to description rendering on Android.
 * 
 * Only supported iOS
 */
subdescription?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * Sets the item as loading and disables it. If the item is of type switch, checkbox, radio or action, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * By default it is true, if you want to hide it just set it to false.
 * 
 * Only supported iOS.
 */
chevron?: boolean,
/**
 * The delay after the click event is defaulted, if you want to remove the delay just set it to false.
 * 
 * Only supported iOS.
 */
delay?: boolean,
/**
 * Defines whether the item is a collapsible item.
 */
collapsible?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Sets the color of the item title and description.
 * 
 * NOTE: The color in the description is only compatible with Android.
 */
color?: {
/**
 * Sets the color of the item title.
 */
title?: string,
/**
 * Sets the color of the item description.
 * 
 * Only supported Android.
 */
description?: string
},
/**
 * Defines whether the item is a checkbox item.
 * 
 * By default it is null, if you want to mark it just set it to false or true.
 */
checkbox?: boolean,
/**
 * Defines whether the item is a radio item.
 * 
 * By default it is null, if you want to mark it just set it to false or true.
 */
radio?: boolean,
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Used in conjunction with TextInput, defines whether a clear button will appear according to each platform on the right side of the item.
 */
cleaner?: {
/**
 * Defines whether the button is visible.
 */
visible: boolean,
/**
 * Performing an action when clicking the button.
 * 
* @returns void
*/
onPress?: () => void
},
/**
 * Features a standard success icon on the right side of the item.
 */
success?: {
/**
 * Defines whether the icon is visible.
 */
visible?: boolean,
/**
 * Sets the icon color.
 */
color?: string
},
/**
 * Features a standard alert icon on the right side of the item.
 */
alert?: {
/**
 * Defines whether the icon is visible.
 */
visible?: boolean,
/**
 * Sets the icon color.
 */
color?: string
},
/**
 * Defines whether the item is a switch item.
 */
switch?: {
/**
 * Sets the switch value.
 */
value: boolean,
/**
* Set the switch to disabled.
*/
disabled?: boolean,
/**
* Performs an action on value change.
* 
* @returns void
*/
onValueChange?: (value: boolean) => void
},
/**
 * Defines whether the item is a action item.
 * 
 * NOTE: On iOS it is disabled by default. To use, simply set iOS to true.
 */
action?: {
/**
 * Defines the icon to be used on the action.
 */
icon: Omit<Icon, 'component' | 'backgroundColor'>,
/**
 * If you want to render the action on iOS, set it to true.
 * 
 * Only supported iOS.
 */
iOS?: boolean,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress: () => void
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
 * Configure up to 3 actions on the left side and up to 3 actions on the right side.
 * 
 * Only supported iOS.
 */
swipeable?: {
/**
 * Set up to 3 actions on the left side for swiping.
 */
left?: Array<{
/**
 * Defines the icon to be used on the swipeable.
 */
icon: Omit<Icon, 'backgroundColor' | 'component'>,
/**
 * Sets the background color of the swipeable.
 */
backgroundColor?: string,
/**
 * Sets the slider to close when clicked.
 */
closeOnPress?: boolean,
/**
* Performing an action when clicking the swipeable.
* 
* @returns void
*/
onPress?: () => void
}>,
/**
 * Set up to 3 actions on the right side for swiping.
 */
right?: Array<{
/**
 * Defines the icon to be used on the swipeable.
 */
icon: Omit<Icon, 'backgroundColor' | 'component'>,
/**
 * Sets the background color of the swipeable.
 */
backgroundColor?: string,
/**
 * Sets the slider to close when clicked.
 */
closeOnPress?: boolean,
/**
* Performing an action when clicking the swipeable.
* 
* @returns void
*/
onPress?: () => void
}>,
/**
 * Determines whether sliding can only occur through the openLeftActions or openRightActions methods using the item reference.
 */
byMethod?: boolean,
/**
 * Sets the height of the effect when executing the hide(() => void, side: 'left' : 'right') method using the item reference.
 */
heightEffect?: number,
/**
* Performing an action when clicking the swipeable item.
* 
* @returns void
*/
onBegan?: () => void
},
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void,
/**
* Virtual param for checkbox by on long press item
*/
checked?: boolean
}

export interface IActionProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines the description to be used on the item.
 * 
 * NOTE: The behavior of this property follows the native standard for each platform, Android / iOS.
 */
description?: string,
/**
 * Similar to description rendering on Android.
 * 
 * Only supported iOS
 */
subdescription?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * Sets the item as loading and disables it. If the item is of type switch, checkbox, radio or action, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * The delay after the click event is defaulted, if you want to remove the delay just set it to false.
 * 
 * Only supported iOS.
 */
delay?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Sets the color of the item title and description.
 * 
 * NOTE: The color in the description is only compatible with Android.
 */
color?: {
/**
 * Sets the color of the item title.
 */
title?: string,
/**
 * Sets the color of the item description.
 * 
 * Only supported Android.
 */
description?: string
},
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Defines whether the item is a action item.
 * 
 * NOTE: On iOS it is disabled by default. To use, simply set iOS to true.
 */
action?: {
/**
 * Defines the icon to be used on the action.
 */
icon: Omit<Icon, 'component' | 'backgroundColor'>,
/**
 * If you want to render the action on iOS, set it to true.
 * 
 * Only supported iOS.
 */
iOS?: boolean,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress: () => void
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void
}

export interface ICardProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * By default it is true, if you want to hide it just set it to false.
 * 
 * Only supported iOS.
 */
chevron?: boolean,
/**
 * The delay after the click event is defaulted, if you want to remove the delay just set it to false.
 * 
 * Only supported iOS.
 */
delay?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void
}

export interface ICheckboxProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines the description to be used on the item.
 * 
 * NOTE: The behavior of this property follows the native standard for each platform, Android / iOS.
 */
description?: string,
/**
 * Similar to description rendering on Android.
 * 
 * Only supported iOS
 */
subdescription?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * Sets the item as loading and disables it. If the item is of type switch, checkbox, radio or action, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Sets the color of the item title and description.
 * 
 * NOTE: The color in the description is only compatible with Android.
 */
color?: {
/**
 * Sets the color of the item title.
 */
title?: string,
/**
 * Sets the color of the item description.
 * 
 * Only supported Android.
 */
description?: string
},
/**
 * Defines whether the item is a checkbox item.
 * 
 * By default it is null, if you want to mark it just set it to false or true.
 */
checkbox?: boolean,
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void
}

export interface ICollapsibleProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines the description to be used on the item.
 * 
 * NOTE: The behavior of this property follows the native standard for each platform, Android / iOS.
 */
description?: string,
/**
 * Similar to description rendering on Android.
 * 
 * Only supported iOS
 */
subdescription?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * Sets the item as loading and disables it. If the item is of type switch, checkbox, radio or action, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * Defines whether the item is a collapsible item.
 */
collapsible?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Sets the color of the item title and description.
 * 
 * NOTE: The color in the description is only compatible with Android.
 */
color?: {
/**
 * Sets the color of the item title.
 */
title?: string,
/**
 * Sets the color of the item description.
 * 
 * Only supported Android.
 */
description?: string
},
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void
}

/**
 * This interface props contains several parameters for configuring the button.
 */
export interface IButtonProps {

/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the button.
 */
disabled?: boolean,
/**
 * Sets the button as loading and disables it. If the button has a title, icon or component, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * Set a custom style for the item.
 */
style?: ViewStyle,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress: () => void
}

export interface IRadioProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines the description to be used on the item.
 * 
 * NOTE: The behavior of this property follows the native standard for each platform, Android / iOS.
 */
description?: string,
/**
 * Similar to description rendering on Android.
 * 
 * Only supported iOS
 */
subdescription?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * Sets the item as loading and disables it. If the item is of type switch, checkbox, radio or action, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Sets the color of the item title and description.
 * 
 * NOTE: The color in the description is only compatible with Android.
 */
color?: {
/**
 * Sets the color of the item title.
 */
title?: string,
/**
 * Sets the color of the item description.
 * 
 * Only supported Android.
 */
description?: string
},
/**
 * Defines whether the item is a radio item.
 * 
 * By default it is null, if you want to mark it just set it to false or true.
 */
radio?: boolean,
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void
}

export interface ISwipeableProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines the description to be used on the item.
 * 
 * NOTE: The behavior of this property follows the native standard for each platform, Android / iOS.
 */
description?: string,
/**
 * Similar to description rendering on Android.
 * 
 * Only supported iOS
 */
subdescription?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * Sets the item as loading and disables it. If the item is of type switch, checkbox, radio or action, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Sets the color of the item title and description.
 * 
 * NOTE: The color in the description is only compatible with Android.
 */
color?: {
/**
 * Sets the color of the item title.
 */
title?: string,
/**
 * Sets the color of the item description.
 * 
 * Only supported Android.
 */
description?: string
},
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
 * Configure up to 3 actions on the left side and up to 3 actions on the right side.
 * 
 * Only supported iOS.
 */
swipeable?: {
/**
 * Set up to 3 actions on the left side for swiping.
 */
left?: Array<{
/**
 * Defines the icon to be used on the swipeable.
 */
icon: Omit<Icon, 'backgroundColor' | 'component'>,
/**
 * Sets the background color of the swipeable.
 */
backgroundColor?: string,
/**
 * Sets the slider to close when clicked.
 */
closeOnPress?: boolean,
/**
* Performing an action when clicking the swipeable.
* 
* @returns void
*/
onPress?: () => void
}>,
/**
 * Set up to 3 actions on the right side for swiping.
 */
right?: Array<{
/**
 * Defines the icon to be used on the swipeable.
 */
icon: Omit<Icon, 'backgroundColor' | 'component'>,
/**
 * Sets the background color of the swipeable.
 */
backgroundColor?: string,
/**
 * Sets the slider to close when clicked.
 */
closeOnPress?: boolean,
/**
* Performing an action when clicking the swipeable.
* 
* @returns void
*/
onPress?: () => void
}>,
/**
 * Determines whether sliding can only occur through the openLeftActions or openRightActions methods using the item reference.
 */
byMethod?: boolean,
/**
 * Sets the height of the effect when executing the hide(() => void, side: 'left' : 'right') method using the item reference.
 */
heightEffect?: number,
/**
* Performing an action when clicking the swipeable item.
* 
* @returns void
*/
onBegan?: () => void
},
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void
}

export interface ISwitchProps {
/**
 * Defines the icon to be used on the item.
 */
icon?: Icon,
/**
 * Defines the title to be used on the item.
 */
title?: string,
/**
 * Defines the description to be used on the item.
 * 
 * NOTE: The behavior of this property follows the native standard for each platform, Android / iOS.
 */
description?: string,
/**
 * Similar to description rendering on Android.
 * 
 * Only supported iOS
 */
subdescription?: string,
/**
 * Defines a custom component in place of the item.
 */
component?: ReactNode,
/**
 * Disable the item.
 */
disabled?: boolean,
/**
 * Sets the item as loading and disables it. If the item is of type switch, checkbox, radio or action, it will be replaced with an activity indicator.
 */
loading?: boolean,
/**
 * The item padding comes by default according to each platform, if you want to remove the padding just change it to false.
 */
padding?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Sets the color of the item title and description.
 * 
 * NOTE: The color in the description is only compatible with Android.
 */
color?: {
/**
 * Sets the color of the item title.
 */
title?: string,
/**
 * Sets the color of the item description.
 * 
 * Only supported Android.
 */
description?: string
},
/**
 * Sets the separator properties of the above item.
 */
separator?: {
/**
 * Defines where the separator will start.
 */
start?: number,
/**
 * Used in conjunction with FlatList, it receives the index of the item in question.
 */
index?: number,
/**
 * Used in conjunction with FlatList, it receives an array of 2 items. The first item must be the previous item in the FlatList, and the second item must be the Item in question.
 */
data?: [{}, {}]
},
/**
 * Set a custom style for the item on the list.
 */
style?: ViewStyle,
/**
 * Defines whether the item is a switch item.
 */
switch?: {
/**
 * Sets the switch value.
 */
value: boolean,
/**
* Set the switch to disabled.
*/
disabled?: boolean,
/**
* Performs an action on value change.
* 
* @returns void
*/
onValueChange?: (value: boolean) => void
},
/**
* Performing an action when clicking the button.
* 
* @returns void
*/
onPress?: () => void,
/**
* Performing an action by holding down the button.
* 
* @returns void
*/
onLongPress?: () => void
}

export interface IList {
/**
 * Insert a native header into the list.
 * 
 * For use on Android, set headerOnAndroid equal to true.
 */
header?: string,
/**
 * Receives an array of items.
 * 
 * NOTE: List rendering is limited to 10 items, maintaining application performance. To render dynamic, infinite scroll lists, use Item in a FlatList.
 */
data: Array<Omit<IItemProps, 'swipeable'>>,
/**
 * Insert a native footer into the list.
 * 
 * For use on Android, set footerOnAndroid equal to true.
 */
footer?: string,
/**
 * The marginTop is set by default according to each platform and version, to remove it simply set it to false.
 */
marginTop?: boolean,
/**
 * If you want to render the header on Android, set it to true.
 * 
 * Only supported Android.
 */
headerOnAndroid?: boolean,
/**
 * If you want to render the footer on Android, set it to true.
 * 
 * Only supported Android.
 */
footerOnAndroid?: boolean,
/**
 * Defines whether the item will have the characteristics of a Tablet or iPad navigation menu style item.
 * 
 * Supports iPad and Tablet only.
 */
tabletIpadMenuType?: boolean,
/**
 * If you want to expand the list, set it to true.
 * 
 * NOTE: On iOS < 15 is already set as default, so it has no effect.
 */
expanded?: boolean,
/**
 * To remove the item's native top and bottom separator, set it to false.
 * 
 * Only supported iOS < 15.
 */
separators?: boolean
}

export interface IItem {
/**
 * This property contains several parameters for configuring the item.
 */
data: Omit<IItemProps, 'style'>,
/**
 * Insert a native header into the item.
 * 
 * For use on Android, set headerOnAndroid equal to true.
 */
header?: string,
/**
 * If you want to render the header on Android, set it to true.
 * 
 * Only supported Android.
 */
headerOnAndroid?: boolean,
/**
 * If used, it will replace the item title with the header, if any.
 * 
 * Only supported Android.
 */
headerToTitle?: boolean | null,
/**
 * Insert a native footer into the list.
 * 
 * For use on Android, set footerOnAndroid equal to true.
 */
footer?: string,
/**
 * If you want to render the footer on Android, set it to true.
 * 
 * Only supported Android.
 */
footerOnAndroid?: boolean,
/**
 * Defines whether the item will have the characteristics of a Tablet or iPad navigation menu style item.
 * 
 * Supports iPad and Tablet only.
 */
tabletIpadMenuType?: boolean,
/**
 * Sets the index of an item. It can be used to join items together to form a list. Used in conjunction with count.
 */
index?: number,
/**
 * Defines when items have a certain list. Used in conjunction with index.
 */
count?: number,
/**
 * Set a custom style for the item.
 */
style?: ViewStyle,
/**
 * Defines the main view of the item with style flex 1.
 */
flex?: boolean,
/**
 * The marginTop is set by default according to each platform and version, to remove it simply set it to false.
 */
marginTop?: boolean,
/**
 * To remove the item's native top and bottom separator, set it to false.
 * 
 * Only supported iOS < 15.
 */
separators?: boolean,
/**
 * If you want to expand the item, set it to true.
 * 
 * NOTE: On iOS < 15 is already set as default, so it has no effect.
 */
expanded?: boolean
}

export interface IButton {
/**
 * Insert a native header into the button.
 * 
 * For use on Android, set headerOnAndroid equal to true.
 */
header?: string,
/**
 * Receives button parameters.
 */
data: Omit<IButtonProps, 'swipeable'>,
/**
 * Insert a native footer into the button.
 * 
 * For use on Android, set footerOnAndroid equal to true.
 */
footer?: string,
/**
 * Sets the button to dashed.
 */
dashed?: boolean,
/**
 * Sets the button to transparent.
 */
transparent?: boolean,
/**
 * Defines the icon to be used on the button.
 */
icon?: boolean,
/**
 * Fix button snapping on left side of header bar on iOS.
 * 
 * Only supported iOS.
 */
left?: boolean,
/**
 * Fix button snapping on right side of header bar on iOS.
 * 
 * Only supported iOS.
 */
right?: boolean,
/**
 * Set the button as a link.
 */
link?: boolean,
/**
 * Defines whether the link will be small.
 * 
 * Only supported with link.
 */
small?: boolean,
/**
 * Sets the button to gray.
 */
gray?: boolean,
/**
 * Sets the button to blue.
 */
blue?: boolean,
/**
 * Sets the button to destructive.
 */
destructive?: boolean,
/**
 * Set a custom style for the button.
 */
style?: ViewStyle,
/**
 * The marginTop is set by default according to each platform and version, to remove it simply set it to false.
 */
marginTop?: boolean,
/**
 * If you want to render the header on Android, set it to true.
 * 
 * Only supported Android.
 */
headerOnAndroid?: boolean,
/**
 * If you want to render the footer on Android, set it to true.
 * 
 * Only supported Android.
 */
footerOnAndroid?: boolean
}

export interface IIcon {
/**
 * Defines the icon name.
 */
name: string,
/**
 * Sets the icon type.
 */
type: IconType,
/**
 * Sets the icon size.
 */
size?: number,
/**
 * Sets the icon color.
 */
color?: string,
/**
 * Defines the type of animation.
 */
animation?: 'bounce' | 'flash' | 'jello' | 'pulse' | 'rotate' | 'rubberBand' | 'shake' | 'swing' | 'tada' | 'wobble' | 'bounceIn' | 'bounceInDown' | 'bounceInUp' | 'bounceInLeft' | 'bounceInRight' | 'bounceOut' | 'bounceOutDown' | 'bounceOutUp' | 'bounceOutLeft' | 'bounceOutRight' | 'fadeIn' | 'fadeInDown' | 'fadeInDownBig' | 'fadeInUp' | 'fadeInUpBig' | 'fadeInLeft' | 'fadeInLeftBig' | 'fadeInRight' | 'fadeInRightBig' | 'fadeOut' | 'fadeOutDown' | 'fadeOutDownBig' | 'fadeOutUp' | 'fadeOutUpBig' | 'fadeOutLeft' | 'fadeOutLeftBig' | 'fadeOutRight' | 'fadeOutRightBig' | 'flipInX' | 'flipInY' | 'flipOutX' | 'flipOutY' | 'lightSpeedIn' | 'lightSpeedOut' | 'slideInDown' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'slideOutDown' | 'slideOutUp' | 'slideOutLeft' | 'slideOutRight' | 'zoomIn' | 'zoomInDown' | 'zoomInUp' | 'zoomInLeft' | 'zoomInRight' | 'zoomOut' | 'zoomOutDown' | 'zoomOutUp' | 'zoomOutLeft' | 'zoomOutRight',
/**
 * Sets the animation loop.
 */
iterationCount?: number | 'infinite',
/**
 * Set a custom style for the icon.
 */
style?: ViewStyle,
/**
 * Sets the icon weight.
 * 
 * Only supported iOS.
 */
weight?: SymbolWeight,
/**
 * Sets the icon scale.
 * 
 * Only supported iOS.
 */
scale?: SymbolScale,
/**
 * Sets the icon resizeMode.
 * 
 * Only supported iOS.
 */
resizeMode?: SymbolResizeMode,
/**
 * Sets the icon multicolor.
 * 
 * Only supported iOS.
 */
multicolor?: boolean,
/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
badge?: IBadge,
/**
 * Virtual param for icon
 */
backgroundColor?: string
}

export interface ISeparator {
/**
* Receives the ItemSeparatorComponent props from a FlatList.
*/
props: any,
/**
* Defines where the division will start.
*/
start?: number,
/**
* Defines where the division will end.
*/
end?: number,
/**
 * If you want to expand the separator, set it to true.
 * 
 * NOTE: On iOS < 15 is already set as default, so it has no effect.
 */
expanded?: boolean,
/**
 * Defines whether the separator will have the characteristics of a navigation menu style item.
 * 
 * Supports iPad and Tablet only.
 */
tabletIpadMenuType?: boolean,
}

/**
 * Defines a small circle that displays a number or text and will be displayed on the right side of the item.
 */
export interface IBadge {
/**
 * Determines the value to be printed inside the badge.
 */
value: string,
/**
 * Setting text and badge colors
 */
color?: {
/**
 * Sets the text color
 */
text: string,
/**
 * Sets the badge color
 */
badge: string
}
}