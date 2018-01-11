# React Native Drag And Drop Grid

Cross-platform drag and drop grid for react-native.

<img align="right" width="360px" src="screens/dnd-demo-1.gif">

### Example

To build and run the example app:

```bash
git clone https://github.com/harrisrobin/react-native-dnd-grid

cd react-native-dnd-grid/example
yarn
```

### Installation

#### Using npm:

```sh
$ npm install --save react-native-dnd-grid
```

#### Using yarn:

```sh
$ yarn add react-native-dnd-grid
```

### Usage

```jsx
// @flow
import React, { PureComponent } from "react"
import { Text, View } from "react-native"
import Pane from "./components/pane"
import DraggableArea from "react-native-dnd-grid"

import metrics from "./utils/metrics"

export default class App extends PureComponent {
  state = {
    itemsPerRow: 4,
    items: [
      {
        name: "etaetest"
      },
      {
        name: "taaaest1"
      },
      {
        name: "3300test2"
      },
      {
        name: "394t91test3"
      },
      {
        name: "00agaektest4"
      },
      {
        name: "akgetest5"
      },
      {
        name: "e4540agaetest6"
      },
      {
        name: "12344test7"
      }
    ]
  }

  onDraggablePress = draggable => {
    console.log("onDraggablePress", draggable)
  }

  onDraggableRender = draggable => {
    console.log("onDraggableRender", draggable)
  }

  onPressAddNewTag = () => {
    alert("onPressAddNewTag")
  }

  removeItem = item => {
    this.setState(state => {
      const index = state.items.findIndex(({ name }) => name === item.name)
      return {
        items: [...state.items.slice(0, index), ...state.items.slice(index + 1)]
      }
    })
  }

  renderItem = (item, onPress) => {
    const size = metrics.screenWidth / 4 - 20
    return (
      <Pane
        isBeingDragged={item.isBeingDragged}
        onPress={onPress}
        width={size}
        height={size}
      >
        <Text style={{ color: "white" }}>{item.name}</Text>
      </Pane>
    )
  }

  handleOnDragEnd = items => {
    console.log("items", items)
  }

  render() {
    const { items } = this.state
    return (
      <View
        style={{
          marginTop: 50,
          flex: 1,
          flexWrap: "wrap",
          flexDirection: "row",
          marginLeft: 10
        }}
      >
        <DraggableArea
          items={items}
          onPress={this.onDraggablePress}
          onRenderItem={this.onDraggableRender}
          onPressAddNewTag={this.onPressAddNewTag}
          onDragEnd={this.handleOnDragEnd}
          renderItem={this.renderItem}
          useKey="name"
        />
      </View>
    )
  }
}
```

#### Props

| Prop               | Type                                    | Description                                                                                         |
| ------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------- |
| **`items`**        | `item[]`                                | Items to render.                                                                                    |
| **`onPress`**      | `() => void`                            | Function that runs once you press an item                                                           |
| **`onRenderItem`** | `() => item`                            | Function that runs once an item is rendered. Returns the item.                                      |
| **`onDragEnd`**    | `() => item[]`                          | Function that runs after the item is done being dragged.                                            |
| **`renderItem`**   | `?(item, onPress) => ReactElement<any>` | Render function to pass so that you can render your own component. Recieves an `item` and `onPress` |
| **`useKey`**       | `string`                                | `specifies which property to use as key`                                                            |

### Contributing

Contributions are very welcome: bug fixes, features, documentation, tests.

#### License

All pull requests that get merged will be made available under [the MIT license](https://github.com/harrisrobin/react-native-dnd-grid/blob/master/LICENSE.md), as the rest of the repository.
