import React, { useState, useEffect } from 'react'

function UseCountUp({ endCount }) {
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
      const currentCount = Math.ceil(interval * endCount)

      setCount(currentCount)
    })

    setTimeout(() => {
      clearInterval(countUp)
    }, 2000)
  }, [endCount])
  return <>{count}</>
}
export default UseCountUp
