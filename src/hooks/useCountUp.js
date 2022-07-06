import React, { useState, useEffect } from 'react'

function UseCountUp({ end }) {
  // countUp으로 인해 변경된 상태를 저장
  const [count, setCount] = useState(0)

  // 숫자에 effect를 주는 Easing 함수
  function easeOutQuartEffect(x) {
    return 1 - Math.pow(1 - x, 4)
  }

  useEffect(() => {
    let currentNum = 0

    let countUp = setInterval(() => {
      let interval = easeOutQuartEffect((currentNum += 1 / 500))
      setCount(Math.ceil(interval * end))
    })

    setTimeout(() => {
      clearInterval(countUp)
    }, 2000)
  }, [end])
  return <>{count}</>
}
export default UseCountUp
