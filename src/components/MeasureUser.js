import styled, { keyframes } from 'styled-components'
import CountUp from 'hooks/useCountUp'

function MeasureUser() {
  return (
    <MeasureUserSection>
      <MeasureUserText>
        <strong>
          <CountUp endCount={700}></CountUp>만 명
        </strong>
        의 여행자
      </MeasureUserText>
      <MeasureUserText>
        <strong>
          <CountUp endCount={100}></CountUp>만 개
        </strong>
        의 여행 리뷰
      </MeasureUserText>
      <MeasureUserText>
        <strong>
          <CountUp endCount={470} />만 개
        </strong>
        의 여행 일정
      </MeasureUserText>
    </MeasureUserSection>
  )
}
export default MeasureUser

const FadeInAnimation = keyframes`
  0% {
      opacity: 0;
    }
  100% {
      opacity: 1;
    }
`
const MeasureUserSection = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  animation: ${FadeInAnimation} 0.7s 0.11s ease-in-out;
`
const MeasureUserText = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
`
