import styled, { keyframes } from 'styled-components'
import CountNum from 'hooks/useCountUp'

function RecordSection() {
  return (
    <RecordsLayout>
      <RecordsCol>
        <LogoSection className="mount1">2021년 12월 기준</LogoSection>
        <RecordsSection>
          <RecordsText>
            <strong>
              <CountNum end={700}></CountNum>만 명
            </strong>
            의 여행자
          </RecordsText>
          <RecordsText>
            <strong>
              <CountNum end={100}></CountNum>만 개
            </strong>
            의 여행 리뷰
          </RecordsText>
          <RecordsText>
            <strong>
              <CountNum end={470} />만 개
            </strong>
            의 여행 일정
          </RecordsText>
        </RecordsSection>
        <AwardsSection>
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
        </AwardsSection>
      </RecordsCol>
    </RecordsLayout>
  )
}
export default RecordSection

const Animation = keyframes`
  0% {
      opacity: 0;
    }
  100% {
      opacity: 1;
    }
`
const RecordsLayout = styled.div`
  min-width: 1200px;
  position: relative;
  overflow: hidden;
  background-image: inherit;
  background-repeat: inherit;
  background-attachment: inherit;
  background-origin: inherit;
  background-clip: inherit;
  background-color: inherit;
  background-size: cover;
  background-position: center center;
`
const RecordsCol = styled.div`
  margin: 0px auto;
  position: relative;
  width: 1040px;
  height: auto;
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
  background-image: url('https://triple.guide/intro/images/img-02-triple@3x.png');
  background-repeat: no-repeat;
  text-align: center;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  animation: ${Animation} 0.7s 0.01s ease-in-out;
`
const RecordsSection = styled.div`
  margin-left: 623px;
  padding-top: 150px;
  animation: ${Animation} 0.7s 0.11s ease-in-out;
`
const RecordsText = styled.div`
  font-size: 36px;
  letter-spacing: -1px;
  margin-bottom: 20px;
  color: rgb(58, 58, 58);
  font-family: sans-serif;
`
const AwardsSection = styled.div`
  white-space: nowrap;
  margin: 50px 0px 140px 623px;
  animation: ${Animation} 0.7s 0.21s ease-in-out;
`
const AwardPlayStore = styled.div`
  background-size: 54px 54px;
  height: 54px;
  padding: 5px 0px 5px 62px;
  font-size: 14px;
  line-height: 22px;
  margin-right: 39px;
  display: inline-block;
  font-family: sans-serif;
  background-image: url('https://triple.guide/intro/images/img-02-badge-google@3x.png');
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
  font-family: sans-serif;
  background-image: url('https://triple.guide/intro/images/img-02-badge-apple@4x.png');
  background-position: left top;
  background-repeat: no-repeat;
  color: rgba(58, 58, 58, 0.8);
  font-weight: bold;
`
