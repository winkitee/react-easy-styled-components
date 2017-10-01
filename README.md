# react-easy-styled-components

It was created by applying styled-components with reference to react-native style.

### Getting Started
---
```
$npm install --save react-easy-styled-components
```

## example

```javascript
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Resc from 'react-easy-styled-components';

const sizes = {
  desktop: 1068,
  tablet: 820,
  phone: 360,
}

// Apply media size
const { FlexView, View, Text } = new Resc(sizes);

const theme = {
  textMargin: '0 5px',
  textPadding: '15px',
  fontColor: '#333',
  fontSize: '16px',
  fontWeight: '400'
};

export default class ReactEasyStyledComponent extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <FlexView height="280px">
            <View backColor="rgb(240, 240, 240)">
              <Text margin="20px" size="30px" weight="600">hello manbo</Text>
              <Text color="LightBlue">LightBlue</Text>
              <Text
                button
                color="LightCoral"
                padding="30px"
                margin="0 20px"
              >
                LightCoral Button
              </Text>
            </View>
            <View backColor="rgb(50, 50, 50)">
              <Text color="#fff" margin="10px">hello</Text>
              <Text color="#fff" margin="0 10px">bye</Text>
            </View>
          </FlexView>
          <FlexView row height="300px">
            <View flex="2" backColor="LightBlue" justifyEnd>
              <Text>justifyEnd</Text>
            </View>
            <View flex="2" backColor="LightCoral" justifyStart>
              <Text>justifyStart</Text>
            </View>
            <View flex={3} backColor="LemonChiffon" justifyBetween>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
            </View>
            <View flex="4" backColor="LightGreen" justifyAround>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
            </View>
          </FlexView>
          <FlexView row height="300px">
            <View alignEnd backColor="rgb(240, 240, 240)">
              <Text>alignEnd</Text>
              <Text>alignEnd</Text>
              <Text>alignEnd</Text>
            </View>
            <View alignStart backColor="rgb(230, 230, 230)">
              <Text>alignStart</Text>
              <Text>alignStart</Text>
              <Text>alignStart</Text>
            </View>
            <View backColor="rgb(220, 220, 220)">
              <Text>alignDefault Center</Text>
            </View>
          </FlexView>
        </div>
      </ThemeProvider>
    );
  }
}
```

![Image of Example Code](https://firebasestorage.googleapis.com/v0/b/npm-storage.appspot.com/o/react_easy_styled_components_example1.png?alt=media&token=8cb948b5-9e2b-481e-be48-5851c0a3e9c4)

## Public Props

`display`: Specify display. `default: flex`

`customize`: Same as html style. `ex) min-width: 1080px; border-radius: 1px solid;`

`width`: Specify width. `ex) width="100%"`

`height`: Specify height. `ex) height="300px"`

`backColor`: Specify background-color. `ex) backColor="LightBlue"`

`margin`: Specify margin. `ex) margin="0 0 20px 20px"`

`padding`: Specify padding. `ex) padding="0 20px"`

`border`: Specify border. `ex) border="1px solid gray"`

`zIndex`: Specify z-index. `ex) zIndex={-1}`

`backgroundImage`: Specify background-image. `ex) backgroundImage="url(/img.png)"`

`opacity`: Specify opacity. `ex) opacity={0.3}`

`animation`: Specify animation. `ex) animation={styledComponentAnimationProps}`

`desktopShow`: Show when in desktop media size. `ex) desktopShow`

`desktopHide`: Hide when in desktop media size. `ex) desktopHide`

`tabletShow`: Show when in tablet media size. `ex) tabletShow`

`tabletHide`: Hide when in tablet media size. `ex) tabletHide`

`phoneShow`: Show when in phone media size. `ex) phoneShow`

`phoneHide`: Hide when in phone media size. `ex) phoneHide`

`desktop`: Specify css when in desktop media size. `ex) desktop="color: red;"`

`tablet`: Specify css when in tablet media size. `ex) tablet="background-color: blue;"`

`phone`: Specify css when in phone media size. `ex) phone="top: 20px;"`

## \<FlexView />

`row` : flex-deirection: row; `default: column`

## \<View />

`flex`: Specify flex. `ex) flex="3"`

`row` : flex-deirection: row; `default: column`

`alignEnd`: align-items: flex-end; `default: center`

`alignStart`: align-items: flex-start; `default: center`

`justifyEnd`: justify-content: flex-end; `default: center`

`justifyStart`: justify-content: flex-start; `default: center`

`justifyBetween`: justify-content: space-between; `default: center`

`justifyAround`: justify-content: space-around; `default: center`

## \<Text />

`size`: Specify font-size. `ex) size="25px"`

`color`: Specify color. `ex) color="#333"`

`weight`: Specify font-weight. `ex) weight="300"`

`button`: Create with fadeIn text button.

## Theme
```javascript
const theme = {
  textMargin: '0 5px',
  textPadding: '15px',
  fontColor: '#333',
  fontSize: '16px',
  fontWeight: '400'
};
```

## Media Usage

### basic
```javascript
// default media size
// desktop: 992,
// tablet: 768,
// phone: 376

import Resc from 'react-easy-styled-component';
const { FlexView, View, Text, AbsoluteView } = new Resc();
```

### customize sizes
```javascript
// customize
import Resc from 'react-easy-styled-component';

const sizes = {
  desktop: 1220,
  tablet: 830,
  phone: 414,
}

const { FlexView, View, Text, AbsoluteView } = new Resc(sizes);
```

### example
```javascript
import React, { Component } from 'react';
import Resc from 'react-easy-styled-component';
const { FlexView, View } = new Resc();

export default class Example extends Component {
  render() {
    return (
      <FlexView height="500px">
        <View backColor="LightGreen" tabletHide />
        <View backColor="LightBlue" display="none" phoneShow />
        <View backColor="LightCoral" phoneHide />
        <View 
          backColor="gray"
          desktop="background-color: red;"
          tablet="background-color: blue;"
          phone="background-color: green;"
        />
      </FlexView>
    );
  }
}
```