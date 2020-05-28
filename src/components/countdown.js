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
      new Date(2021, 6, 4, 0, 0, 0).getTime() / 1000 -
      new Date().getTime() / 1000;
    let daysDiff = Math.round(secondsDiff / 3600 / 24) + 1
    this.setState({ daysRemaining: daysDiff })
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          color: "#de98b2",
          display: "inline-block",
          fontSize: "2rem",
          fontFamily: '"Raleway", sans-serif',
        }}
      >
        <CountUp
          start={0}
          end={this.state.daysRemaining}
          suffix=" Days Until The Big Day"
        />
      </div>
    )
  }
}

export default Countdown
