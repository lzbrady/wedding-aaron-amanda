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
        {!this.state.expanded && <ExpandIcon>+</ExpandIcon>}
      </QuestionDropdown>
    )
  }
}

const QuestionDropdown = styled.div`
  border: 1px solid transparent;
  border-bottom: 1px solid #d2d2d2;
  padding: 10px;
  text-align: start;
  box-sizing: border-box;
  padding-top: 20px;
  position: relative;

  :hover {
    background-color: white;
    border: 1px solid #d2d2d2;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
    cursor: pointer;

    p {
      color: black;
    }
  }
`

const ExpandIcon = styled.p`
  position: absolute;
  top: 15px;
  right: 0;
  padding: 0px 10px;
  font-size: 32px;
  color: #d2d2d2;
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
