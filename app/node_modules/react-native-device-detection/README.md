react-native-device-detection
======
About
------------------------
The class was written to simplify the process of determining what platform was currently running to easily change Styles or JSX as needed.

Install
------------------------
`npm install react-native-device-detection --save`

Usage
------------------------

Import into a project file: 

Require Import: `const Device = require('react-native-device-detection');`

ES6 Modules: `import { isAndroid } from 'react-native-device-detection`;

Then you can make changes to your StyleSheet like so:
```
if(Device.isIos) {
  Object.assign(styles, {
    ...
  });
}
```
or
```
if(Device.isTablet) {
  Object.assign(styles, {
    ...
  });
}
```

You can also use it anywhere else in your code where you need to differentiate between platforms.

Available props:

 - pixelDensity
 - width
 - height
 - isIos
 - isAndroid
 - isPhone
 - isTablet
 - isIphoneX