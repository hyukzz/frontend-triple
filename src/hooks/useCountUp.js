import React, { useState, useEffect } from 'react'

function UseCountUp({ end = 0, duration = 2000 }) {
  // countUp으로 인해 변경된 상태를 저장
  const [count, setCount] = useState(0)
  // 숫자에 effect를 주는 Easing 함수
  function EaseOutQuartEffect(x) {
    return 1 - Math.pow(1 - x, 4)
  }

  // 첫 랜더링 완료 후만 실행
  useEffect(() => {
    let currentNum = 0
    let count = setInterval(function () {
      let interval = EaseOutQuartEffect((currentNum += 1))
      setCount(Math.floor(interval * end))
      if (interval === 1) {
        clearInterval(count)
      }
    })
  }, [])
  return <>{count}</>
}
export default UseCountUp
