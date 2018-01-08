// @flow
import React, { PureComponent } from "react"
import { View, Text } from "react-native"
import type { NativeMethodsMixinType } from "react-native/Libraries/Renderer/shims/ReactNativeTypes"
import type { DraggableObject } from "../types"
import Pane from "../pane"
import metrics from "../../utils/metrics"

type Props = {
  draggable: DraggableObject,
  // Called when user taps on a tag
  onPress: (draggable: DraggableObject) => void,
  // Called after a tag is rendered
  onRender: (
    draggable: DraggableObject,
    screenX: number,
    screenY: number,
    width: number,
    height: number
  ) => void
}

export default class Draggable extends PureComponent {
  props: Props

  container: ?NativeMethodsMixinType

  // getTagStyle = (): {} => ({
  //   ...styles.draggable,
  //   ...(this.props.draggable.isBeingDragged ? styles.tagBeingDragged : {}),
  // });

  // Call view container's measure function to measure tag position on the screen
  onLayout = (): void => {
    this.container && this.container.measure(this.onMeasure)
  }

  // Pass tag coordinates up to the parent component
  onMeasure = (
    x: number,
    y: number,
    width: number,
    height: number,
    screenX: number,
    screenY: number
  ): void => {
    this.props.onRender(this.props.draggable, screenX, screenY, width, height)
  }

  onPress = (): void => {
    this.props.onPress(this.props.draggable)
  }

  render() {
    const { draggable } = this.props
    const size = metrics.screenWidth / 4 - 20
    return (
      <View ref={el => (this.container = el)} onLayout={this.onLayout}>
        <Pane
          isBeingDragged={draggable.isBeingDragged}
          onPress={this.onPress}
          width={size}
          height={size}
        >
          <Text style={{ color: "white" }}>{draggable.name}</Text>
        </Pane>
      </View>
    )
  }
}
