import React from "react"
import CountUp from "react-countup"

class Countdown extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      daysRemaining: 0,
    }
  }

  componentDidMount() {
    let secondsDiff =
      new Date(2020, 8, 6, 0, 0, 0).getTime() / 1000 -
      new Date().getTime() / 1000
    let daysDiff = Math.round(secondsDiff / 3600 / 24)
    this.setState({ daysRemaining: daysDiff })
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          color: "#520106",
          display: "inline-block",
          fontSize: "2rem",
          fontFamily: '"Lobster", cursive',
        }}
      >
        <CountUp
          start={0}
          end={this.state.daysRemaining}
          prefix="&#9829; "
          suffix=" Days Until The Big Day &#9829;"
        />
      </div>
    )
  }
}

export default Countdown
