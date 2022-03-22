import React, { Component } from "react"
import FetchData from "./FetchData"
export default class App extends Component {
  render() {
    return (
      <div>
        <div className="text-3xl font-bold underline">
          All the posts for today
        </div>
        <FetchData />
      </div>
    )
  }
}
