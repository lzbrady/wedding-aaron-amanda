import React from "react"
import CountUp from "react-countup"
import styled from "styled-components"

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
    let daysDiff = Math.round(secondsDiff / 3600 / 24);
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
        {this.state.daysRemaining < 0 ? (
          <ThankYou>Thank you all for coming to our wedding!</ThankYou>
        ) : this.state.daysRemaining === 0 ? (
          <TodayTitle>Today's the Big Day!</TodayTitle>
        ) : (
          <CountUp
            start={0}
            end={this.state.daysRemaining}
            suffix={` ${
              this.state.daysRemaining === 1 ? "Day" : "Days"
            } Until The Big Day`}
          />
        )}
      </div>
    )
  }
}

const ThankYou = styled.h3`
  font-style: italic;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Cookie", cursive;
`

const TodayTitle = styled.h3`
  font-style: italic;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Cookie", cursive;
`

export default Countdown
