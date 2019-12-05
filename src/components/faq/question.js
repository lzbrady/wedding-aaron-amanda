import React from "react"
import styled from "styled-components"

class Question extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      expanded: true,
    }
  }

  render() {
    return (
      <QuestionDropdown
        onClick={() => this.setState({ expanded: !this.state.expanded })}
      >
        <QuestionText>
          <Index>{this.props.index}. </Index>
          {this.props.question}
        </QuestionText>
        {this.state.expanded && (
          <Answer>
            <AnswerText> {this.props.answer}</AnswerText>
          </Answer>
        )}
      </QuestionDropdown>
    )
  }
}

const QuestionDropdown = styled.div`
  border-bottom: 1px solid #d2d2d2;
  padding: 10px;
  text-align: start;
  box-sizing: border-box;
  padding-top: 20px;

  :hover {
    background-color: white;
    border: 1px solid #d2d2d2;
    border-radius: 13px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    cursor: pointer;

    p {
      color: black;
    }
  }
`

const Index = styled.span`
  font-weight: 300;
`

const QuestionText = styled.h1`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`

const Answer = styled.div`
  margin-bottom: 10px;
`

const AnswerText = styled.p`
  color: #666666;
  margin: 0px;
`

export default Question
