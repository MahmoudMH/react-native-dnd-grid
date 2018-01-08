// @flow
import React, { PureComponent } from "react"
import Pane from "components/pane"
import DraggableArea from "components/draggable-area"

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

  onDraggablePress = pane => {
    console.log("pane", pane)
  }

  onDraggableRender = () => {
    alert("onDraggableRender")
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

  render() {
    const { items } = this.state
    return (
      <DraggableArea
        items={items}
        onPress={this.removeItem}
        onRenderItem={this.onDraggableRender}
        onPressAddNewTag={this.onPressAddNewTag}
        useKey="name"
      />
    )
  }
}
