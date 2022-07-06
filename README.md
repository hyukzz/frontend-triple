# Frontend assignment info

## view

![triple사전과제](https://user-images.githubusercontent.com/81045794/177516197-ab4b1eaa-1031-4acc-9304-005046053817.gif)


## 프로그래밍 언어

- JavaScript

## 라이브러리 버전

| name              | version |
| ----------------- | ------- |
| react             | 18.2.0  |
| npm               | 8.3.1   |
| styled-components | 5.3.5   |

## 사용법

- 본 레포지토리가 있는 경로로 갑니다.
- 터미널에 `npm install`을 입력해 필요한 라이브러리를 설치합니다.
- 이후 `npm start`를 통해 브라우저 상에서 구현된 섹션을 바로 확인할 수 있습니다.
- 동작을 재확인 하고 싶으시면 새로고침을 사용하시면 됩니다.

## 사용한 기술

- react
- JavaScript => 비교적 짧은 시간에 수행해야되기 때문에 익숙한 JavaScript를 사용했습니다.
- styled-components => 해당 컴포넌트에 대해서의 스타일만을 정의합니다. 스타일의 적용범위가 한정적이기 때문에 사이드 이펙트를 줄일 수 있습니다.

## 트러블 슈팅

- 문제점 => 인터벌이 돌면서 바뀌는 count 값을 랜더링하고, raw한 값은 소숫점 가지되, Math.ceil을 통해 출력만 int로 되게 했습니다. 하지만 사실 수치 자체가 소수점을 포함하고 있는 부분이라 ui상으로는 시간이 밀려 2초라는 시간을 맞출 수 가 없었습니다.

- 해결책 => setTimeout으로 2초가 지나면 인터벌이 강제로 종료되게 했습니다. 사실 좋은 방법은 아니라고 생각했지만 현재할 수 있는 최선의 방법이라고 생각했습니다.

## 파일구조
<img width="220" alt="image" src="https://user-images.githubusercontent.com/81045794/177505894-31dcc0e7-d159-442f-98df-48ea16672297.png">

## 참고한 자료

https://www.youtube.com/watch?v=-YgMSgC6zWQ&t=305s

https://ko.javascript.info/settimeout-setinterval

https://easings.net/ko#easeOutQuint

