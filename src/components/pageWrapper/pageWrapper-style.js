import styled, { css } from "styled-components"

const SharedStyles = css`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 2rem;
`
const InnerGradiantOn = styled.div`
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
const InnerGradiantOff = styled.div`
  ${SharedStyles}
  background: linear-gradient(
    rgba(0, 0, 0, 0.6) 20%,
    rgba(0, 0, 0, 0) 50%,
    rgba(0, 0, 0, 0.6) 80%
  );
`
// checks if innerGradiant props is set to true or anything else. Sets css based on desired output.
const styleChecker = isOn => {
  if (isOn === true) {
    return InnerGradiantOn
  }
  return InnerGradiantOff
}

export default styleChecker
