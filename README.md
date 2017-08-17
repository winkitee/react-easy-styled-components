# react-easy-styled-components

It was created by applying styled-components with reference to react-native style.

### Getting Started
---
```
$npm install --save react-easy-styled-components
```
```javascript
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { FlexView, View, Text } from 'react-easy-styled-components';

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
            <View color="rgb(240, 240, 240)">
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
            <View color="rgb(50, 50, 50)">
              <Text color="#fff" margin="10px">hello</Text>
              <Text color="#fff" margin="0 10px">bye</Text>
            </View>
          </FlexView>
          <FlexView row height="300px">
            <View flex="2" color="LightBlue" justifyEnd>
              <Text>justifyEnd</Text>
            </View>
            <View flex="2" color="LightCoral" justifyStart>
              <Text>justifyStart</Text>
            </View>
            <View flex={3} color="LemonChiffon" justifyBetween>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
            </View>
            <View flex="4" color="LightGreen" justifyAround>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
            </View>
          </FlexView>
          <FlexView row height="300px">
            <View alignEnd color="rgb(240, 240, 240)">
              <Text>alignEnd</Text>
              <Text>alignEnd</Text>
              <Text>alignEnd</Text>
            </View>
            <View alignStart color="rgb(230, 230, 230)">
              <Text>alignStart</Text>
              <Text>alignStart</Text>
              <Text>alignStart</Text>
            </View>
            <View color="rgb(220, 220, 220)">
              <Text>alignDefault Center</Text>
            </View>
          </FlexView>
        </div>
      </ThemeProvider>
    );
  }
}
```

![Image of Example Code](https://firebasestorage.googleapis.com/v0/b/npm-storage.appspot.com/o/react-easy-styled-components.png?alt=media&token=6c9b0823-3be1-405b-803c-2ce3ef281a49)

### <FlexView />

---

`row` : flex-deirection: row; default: `column`

`height`: Specify view height. ex. `height="300px"`

### <View />

---

`flex`: Specify flex. ex. `flex="3"`

`color`: Specify background-color. ex. `color="LightBlue"`

`alignEnd`: align-items: flex-end; default: `center`

`alignStart`: align-items: flex-start; default: `center`

`justifyEnd`: justify-content: flex-end; default: `center`

`justifyStart`: justify-content: flex-start; default: `center`

`justifyBetween`: justify-content: space-between; default: `center`

`justifyAround`: justify-content: space-around; default: `center`

### <Text />

---

`size`: Specify font-size. ex. `size="25px"`

`color`: Specify color. ex. `color="#333"`

`weight`: Specify font-weight. ex. `weight="300"`

`margin`: Specify margin. ex. `margin="0 0 20px 20px"`

`padding`: Specify padding. ex. `padding="0 20px"`

`button`: Create with fadeIn text button.

### Theme
---
```javascript
const theme = {
  textMargin: '0 5px',
  textPadding: '15px',
  fontColor: '#333',
  fontSize: '16px',
  fontWeight: '400'
};
```
