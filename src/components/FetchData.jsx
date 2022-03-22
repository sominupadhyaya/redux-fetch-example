import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchData } from "../actions"

class FetchData extends Component {
  displayData = () => {
    return this.props.dataChunk.map((post) => {
      return (
        <div key={post.id}>
          <div>User id : {post.userId}</div>
          <div>
            Post number : {post.id}{" "}
          </div>
          <div>title : {post.title}</div>
          <div>post : {post.body}</div>
          <br />
        </div>
      )
    })
  }
  componentDidMount = () => {
    this.props.fetchData()
  }
  render() {
    return (
      <div>
        {this.displayData()}
      </div>
    )
  }

}
const mapStateToProps = (state) => {
  return {
    dataChunk: state.mainData
  }
}

export default connect(mapStateToProps, {
  fetchData,
})(FetchData)
