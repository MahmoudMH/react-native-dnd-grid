// @flow
import React, { PureComponent } from "react"
import { Text } from "react-native"
import Pane from "components/pane"
import DraggableArea from "../src"

import metrics from "utils/metrics"

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

  render() {
    const { items } = this.state
    return (
      <DraggableArea
        items={items}
        onPress={this.onDraggablePress}
        onRenderItem={this.onDraggableRender}
        onPressAddNewTag={this.onPressAddNewTag}
        renderItem={this.renderItem}
        useKey="name"
      />
    )
  }
}
