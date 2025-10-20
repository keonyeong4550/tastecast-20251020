# 오늘 뭐 먹지

## 프로젝트 개요

- 저희 프로젝트는 <strong>날씨</strong>에 따라 <strong>적합한 음식</strong>을 <strong>추천</strong>하는 웹 애플리케이션을 만들고자 시작했습니다. 기존의 레시피 추천 사이트들은 <strong>날씨 정보를 반영한 음식 추천 기능이 없으며</strong>, <strong><I>사용자가 싫어하는 재료를 필터링할 수 있는 기능</strong></I>도 제공하지 않습니다. 이러한 한계를 <strong>보완</strong>하고자, 사용자 <strong>맞춤형 추천</strong>과 개인화 <strong>필터링</strong> 기능을 함께 <strong>구현</strong>하는 프로젝트를 기획하게 되었습니다.
- 노션주소(https://www.notion.so/28caa939b4b3803b8fdae2561b8d2304?v=28caa939b4b3800593cf000c8207c6f5)

## 구현된 핵심 기능

- CRUD:생성/조회/수정/삭제 전부 구현
- SPA(router)
- 가상 스크롤: 데이터의 효율화 처리
- 코드스플리팅: lazy+ Suspense 처리하기
- 외부데이터 연동: 외부데이터 이름
- 반응형웹(PC, 태블릿 or 모바일)

## 개발 기간

- 2025.10.14(화) ~ 2025.10.20(월)

## UI 기획

<img src="https://github.com/user-attachments/assets/9e97b365-fa9d-4e85-8aaa-c8bd4d95454c" width="400" alt="Image" />

## 개발 일정

![image.png](attachment:7c360546-d4e1-4d6e-aa84-2ceefb86e139:image.png)

## API 설명서

## 각자 맡은 역할

### 김지원(팀장)

- 주제 선정 및 일정 수립
- 역할 분담
- 레시피 더미 데이터 제작
- 전체 레시피 페이지 UI 구현
- 가상 스크롤(React-virtualized) 기능 구현
- 사용자 레시피 필터 기능 구현
- 레시피 삭제 및 수정 반영 기능 구현
- 페이지 CSS 통일 및 UI 개선
- SPA 라우팅 기능 구현
- 코드 통합

### 박건영

- 이미지 업로드 및 미리보기 기능 구현
- SPA 라우팅 기능 구현
- 레시피 클릭 시 상세 페이지 이동
- 네비게이션으로 상세페이지 이동
- useParams를 이용한 ID별 상세 표시
- 삭제 시 홈으로 이동
- 더미데이터 작성 및 구조 정리
- 수정 모드 기능 구현
- 이미지 업로드 박스 개선
- 상세 페이지 UI 및 기능 구현
- 추가 페이지 UI 및 기능 구현
- CSS 분리 및 정리
- 코드 통합
- Lazy & Suspense 기능 구현

### 한해찬

- OpenWeatherMap API 적용
- 날씨 API와 더미데이터의 날씨 필터링 기능 구현
- 네비게이션 바 UI 및 기능 구현
- KakaoMap API로 현재 사용자 지역 출력
- OpenWeather 아이콘을 날씨 상태에 따라 변경
- 메인 페이지 좋아요 버튼 기능 구현
- Flow Chart 제작
- 메인 페이지 UI 및 기능 구현
- 기능별 컴포넌트 분리
- 레시피 클릭 시 상세 페이지 이동
- 다크모드 기능 구현
- 코드 통합
- SPA 라우팅 기능 구현

## flow + UI(gif 파일이면 더 좋음)

![오늘 뭐 먹지 flow chart.drawio (3).png](<attachment:b7fe4a65-b92f-48f3-9248-f267b0affbca:오늘_뭐_먹지_flow_chart.drawio_(3).png>)

## 구현 화면

![Image](https://github.com/user-attachments/assets/54f112ba-44c4-4933-92bc-89655bec5a12)

## 사용 언어

![windows](https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white)
![html](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![css](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
