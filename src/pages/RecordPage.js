import styled from 'styled-components'
import AwardStore from 'components/AwardStore'
import ContentLogo from 'components/ContentLogo'
import MeasureUser from 'components/MeasureUser'

function RecordPage() {
  return (
    <RecordsLayout>
      <RecordsCol>
        <ContentLogo />
        <MeasureUser />
        <AwardStore />
      </RecordsCol>
    </RecordsLayout>
  )
}
export default RecordPage

const RecordsLayout = styled.div`
  min-width: 1200px;
`
const RecordsCol = styled.div`
  margin: 0px auto;
  width: 1040px;
`
