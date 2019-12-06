import styled, { css } from "styled-components"

const SharedStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
`
const Gradiant = styled.div`
  ${SharedStyles}
  background: linear-gradient(
    rgba(0, 0, 0, 0.6) 20%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.6) 80%
  ), radial-gradient(
			rgba(255, 255, 255, .2) 0%,
			rgba(255, 255, 255, 0) 100%
  );
`
const NoGradiant = styled.div`
  ${SharedStyles}
  background-color: rgb(0,0,0,.65);
`
// checks if innerGradiant props is set to true or anything else. Sets css based on desired output.
const styleChecker = isOn => {
  if (isOn === true) {
    return Gradiant
  }
  return NoGradiant
}

export default styleChecker
