import styled, { keyframes } from 'styled-components'
import tripleLogo from 'images/tripleLogo.png'

function ContentLogo() {
  return <LogoSection>2021년 12월 기준</LogoSection>
}
export default ContentLogo

const FadeInAnimation = keyframes`
  0% {
      opacity: 0;
    }
  100% {
      opacity: 1;
    }
`
const LogoSection = styled.div`
  position: absolute;
  top: 150px;
  width: 400px;
  height: 338px;
  background-size: 400px 338px;
  padding-top: 280px;
  font-size: 15px;
  box-sizing: border-box;
  background-image: url(${tripleLogo});
  background-repeat: no-repeat;
  text-align: center;
  color: rgba(58, 58, 58, 0.7);
  animation: ${FadeInAnimation} 0.7s 0.01s ease-in-out;
`
