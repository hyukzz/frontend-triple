import styled, { keyframes } from 'styled-components'
import playstoreLogo from 'images/playstoreLogo.png'
import appleLogo from 'images/appleLogo.png'

function Award() {
  return (
    <AwardSection>
      <AwardPlayStore>
        2018 구글 플레이스토어
        <br />
        올해의 앱 최우수상 수상
      </AwardPlayStore>
      <AwardAppStore>
        2018 애플 앱스토어
        <br />
        오늘의 여행앱 선정
      </AwardAppStore>
    </AwardSection>
  )
}
export default Award

const FadeInAnimation = keyframes`
  0% {
      opacity: 0;
    }
  100% {
      opacity: 1;
    }
`
const AwardSection = styled.div`
  white-space: nowrap;
  margin: 50px 0px 140px 623px;
  animation: ${FadeInAnimation} 0.7s 0.21s ease-in-out;
`
const AwardPlayStore = styled.div`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  background-image: url(${playstoreLogo});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`
const AwardAppStore = styled.div`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  background-image: url(${appleLogo});
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`
