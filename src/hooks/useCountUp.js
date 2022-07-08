import React, { useState, useEffect } from 'react'

function UseCountUp({ endCount }) {
  const [count, setCount] = useState(0)

  function easeOutQuartEffect(x) {
    return 1 - Math.pow(1 - x, 4)
  }
  useEffect(() => {
    let currentNum = 0
    const currentMax = 2000
    let intervalSpace = 10
    let countUp = setInterval(() => {
      currentNum += 1
      let interval = Math.min(
        easeOutQuartEffect(currentNum / (currentMax / intervalSpace)),
        1,
      )
      const currentCount = Math.ceil(endCount * interval)
      console.log(currentNum)
      setCount(currentCount)
    }, intervalSpace)

    setTimeout(() => {
      clearInterval(countUp)
    }, currentMax)
  }, [endCount])
  return <>{count}</>
}
export default UseCountUp
