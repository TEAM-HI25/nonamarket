# 1인 가구를 위한 공유 냉장고 노나먹자 🍴

* 🔗배포URL
* 🔒서비스 이용을 위한 계정<br/>  
id : nonamukza@nona.com  <br/>
pw : 123456
<br/>

![image](https://user-images.githubusercontent.com/107895498/210313512-a8a33e57-b403-439d-8fcc-32605cab5289.png)

<details>
<summary>목차</summary>
<div markdown="1">
<br/>

1. [프로젝트 소개](#intro)
2. [요구사항](#requirements)
3. [팀원소개](#members)
4. [역할 분담](#roles)
5. [개발 환경](#environments)
6. [UI](#ui)
7. [핵심 코드](#code)
8. [폴더 구조](#tree)


</div>
</details>

# <sapn id="intro"> 1. 프로젝트 소개 </span>

```jsx
🔸 이 프로젝트는 1인가구에서 남는 식재료 또는 반찬을 공유할 수 있는 SNS 커뮤니티 입니다.

🔸 서비스 사용자들은 포스팅 기능을 통해 사진과 글을 기록하며 1인 가구에 도움이되는 정보를 공유할 수 있습니다. 

🔸 무료로 나눔하고 싶거나 판매하고 싶은 물건이 있다면 상품 판매를 등록하고 본인의 SNS에 바로 홍보할 수 있습니다. 
```

# <span id="requirements"> 2. 요구사항 </span>
🔐 인증
- 로그인 / 로그아웃
- 회원가입
- 회원 정보 수정
- 유효성 검증

🏕️ 게시글
- 게시글 등록/수정/삭제/신고
- 다중 이미지 파일 업로드/수정/미리보기
- 앨범뷰 / 리스트뷰
- 이미지 슬라이드
- 좋아요 기능

👥 팔로우
- 유저 팔로우/언팔로우
- 팔로잉, 팔로워 리스트

🥗 상품
- 상품 등록/수정/삭제
- 이미지 파일 업로드/수정/미리보기
- 유효성 평가

🔎 검색
- 유저 검색
- 무한 스크롤

💬 댓글
- 댓글 등록, 삭제, 신고
- 댓글 작성 시간
<br><br>

# 3.<span id="members"> 팀원 소개 </span>
|양지성|방현영|선은혜|한유진|
|:---:|:---:|:---:|:---:|
|<img src ="https://user-images.githubusercontent.com/107895498/210340041-c4e176b7-a510-4119-aa42-dae8a3c917a8.jpg" width="170px" height="210px"/>|<img src ="https://user-images.githubusercontent.com/107895498/210340227-c0478e03-f21e-4040-9e93-7fdbfebc1116.jpg" width="170px" height="210px"/>|<img src ="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb5xRPt%2FbtrRXfkYEZz%2F939HTbExIPUONQKhxDgBj0%2Fimg.jpg" width="170px" height="210px"/>|<img src ="https://user-images.githubusercontent.com/107895498/210340563-714e23bb-5778-42e5-af79-37ca93aec0d6.jpg" width="170px" height="210px"/>|
|🔗[GitHub](https://github.com/Yang-zzz)|🔗[GitHub](https://github.com/Hyeonyeongg)|🔗[GitHub](https://github.com/EllaSEON)|🔗[GitHub](https://github.com/yoyoujin)|
|총괄 팀장|코드 리뷰 리더|회의록 리더|디자인 리더|
<br>

# 4. <span id = "roles"> 역할 분담 </span>
<img width="6752" alt="nona-role" src="https://user-images.githubusercontent.com/102464638/210340798-8cae5a95-65c0-4de9-8d9f-aae6d6f395d5.png">
<br><br>


### 🛠 공통 담당
- <strong>공통 작업 : 로그인 / 회원가입 / 프로필 등록 / 버튼 컴포넌트</strong>


# 5. <span id="environments"> 개발 환경 </span>
## 1) 개발기간 : 2022.12.09 ~ 2023.01.05

## 2) 기술
- FrontEnd : React, React-router, Hooks, Styled-components (수정하기)
- BackEnd : 제공된 API 사용

## 3) 협업 도구
- Discord: 실시간 채팅 및 코드 리뷰를 위한 화면 공유
- Notion : 🔗[회의록 및 컨벤션](https://likelion.notion.site/TEAM-HI25-NOTION-eb56f0d2f9c041d08c2359f6a6282b4a)
- VSCode Live Share
- Figma : 🔗[디자인 시안 참고](https://www.figma.com/file/UiVmNohc371gSwo46cobj3/%EB%85%B8%EB%82%98%EB%A8%B9%EC%9E%90?node-id=1067%3A1263&t=9yzZIzAJSqqm9x8T-0)

## 4) 이슈 관리
- 🔗[GitHub Issues](https://github.com/TEAM-HI25/nonamarket/issues) 와 🔗[GitHub Project](https://github.com/orgs/TEAM-HI25/projects/1) 를 사용하여 버전 관리 및 진행 상황을 공유함

![image](https://user-images.githubusercontent.com/102464638/210343011-282720b3-3ea8-4116-9e97-392647158537.png)

## 5) Git Flow
깃 브랜치 전략으로 GitFlow를 선택하였습니다.
큰 규모의 프로젝트에서 주로 사용되는 전략이지만, 기능 단위로 브랜치를 만들어 팀원간의 원활한 작업과 conflict를 최소화하기위해 경험삼아 도입하게되었습니다.
이 프로젝트에서는 규모에 맞게 3개의 브랜치를 사용하였으며 프로젝트기간동안 거의 confilct가 발생하지 않은, 기분좋은 경험을 할 수 있었습니다.

- main : 정식 배포된 버젼을 담고 있는 브랜치
- develop : 현재 개발이 완료된 상태와 일치하는 브랜치
- feature : 기능 개발을 위한 브랜치로, 기능 구현이 완료되면 삭제되는 브랜치 




# 6. <span id="ui"> UI </span>




|                             0. Splash                              |                            1. 로그인                             |
| :---------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210337920-cd841417-2671-4fdb-9225-c318eedbc00f.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210339846-8b1fe0e2-dbca-43bd-a6e9-046506c7b9aa.gif" width="234" height="540"/> |

|                             2. 회원가입                             |                               3. 회원가입 - 프로필 설정                                |
| :--------------------------------------------------------------: | :------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210338666-ac53876b-fb98-40f1-bc93-00bc5cc85239.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210338745-44963538-468f-4eb9-a901-9441b77dd60d.gif" width="234" height="540"/> |

|                              4. 홈피드                              |                           5. 검색                            |
| :---------------------------------------------------------------: | :-------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210339750-9df81e06-f974-4c38-8854-beac8eb9f131.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210328938-c24f1c50-a159-413d-a39c-7bc00b21cebd.gif" width="234" height="540"/> |


|                           6. 게시글 등록                            |                             7. 게시글 수정                             |
| :-------------------------------------------------------------------: | :----------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210338297-4469e07a-727a-4385-81ef-c0f2870f2d56.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210373137-77a9bd5a-d4d1-4b63-8fbb-b9ce8b35a661.gif" width="234" height="540"/> |

|                         8. 게시글 삭제                         |                           9. 게시글 신고                            |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210339511-0050705f-f92e-4670-a968-4d8c503d2c52.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210338431-ef35e70b-d6d4-4f57-b7d7-2d1e3d2e6d21.gif" width="234" height="540"/> |

|                         10. 게시글 댓글 등록 및 삭제                           |                           11. 게시글 댓글 신고                             |
| :-------------------------------------------------------------------: | :-------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210338373-bbe3be94-a692-4c42-ba89-9596ec7ac326.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210351956-acd2dfb2-75fb-48d9-a596-e95ed311caa3.gif" width="234" height="540"/> |



|                        12. 내 프로필                       |                          13. 내 프로필 수정                            |
| :--------------------------------------------------------------------: | :--------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210371913-27174f87-3b64-4ae7-88d5-c6905b4b941b.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210371551-c576205a-1a7f-40f0-8c46-90251c42a64b.gif" width="234" height="540"/> |

|                           14. 타 유저 프로필                           |                              15. 팔로우                                |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210371659-48d98d07-0fe8-4941-8207-d087a822eed3.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210371381-377aaf96-d649-479f-9700-d46de2f6efc9.gif" width="234" height="540"/> |


|                      16. 판매 상품 등록                        |                              17. 판매 상품 수정 및 삭제                               |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/107895498/210339522-b8b0fb7c-0f5e-42e4-824b-ee75cd39e3d3.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210339596-0b7661d6-b8c6-48ae-96dd-1076ac8d0964.gif" width="234" height="540"/> |

|                      18. 로그아웃                     |                              19.  좋아요                             |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210339672-6f04226f-86dc-4858-b1a9-5e146c6e6b0f.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/107895498/210352545-337e3839-f769-4a27-8f61-cc77ce7774d7.gif" width="234" height="540"/> |

|                      20.   404 페이지                        |                              21.  채팅                             |
| :---------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/96678570/210352642-af324b81-d61f-4e41-be98-214a79014ca3.gif" width="234" height="540"/> | <img src="https://user-images.githubusercontent.com/96678570/210353691-11d38687-41cf-4f61-96ad-16f07095c8e9.png" width="234" height="540"/> |




# 7. <span id = "code"> 핵심 코드 </span>

### 1) useContext
- token, accountname이 여러 컴포넌트 내에서 api통신을 할 때 필요로 하는 것을 발견.
- 전역에서 필요한 token, accountname을 useContext를 이용하여 관리
- useContext를 사용함으로써 prop drilling을 방지
- token, accountname을 얻기 위한 불필요한 데이터 요청 방지

### 2) CustomHook
- 모달 구현 시 모달이 필요한 여러 컴포넌트 내에서 동일한 로직이 반복적으로 사용되는 것을 발견.
- 이를, useModal 이라는 커스텀 훅으로 만듦으로써 코드의 중복 최소화 및 상태 관리 로직의 재사용성을 높임.

### 3) Button 컴포넌트
- 재사용성이 높은 버튼을 공통 컴포넌트로 만들어 여러 페이지 내에서 사용할 수 있게 구현함
- 기본 버튼 컴포넌트 구현 후 버튼의 스타일 컴포넌트에서 사이즈,disabled,색상 등을 prop 인자로 받아와서 여러 페이지에서 사용할 수 있게 구현함. 
- 특히, 버튼의 사이즈를 SIZES 라는 객체(s,ms,m)로 변수를 지정하여 확장성있는 코드로 구현함 

(보류) 라우터 접근제한
eslint, prettier
api 파일 분리 

# 8. <span id = "tree"> 폴더 구조 </span> 
```
📦src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┣ 📂font
 ┃ ┗ 📂images
 ┣ 📂components    
 ┃ ┣ 📂Comment
 ┃ ┣ 📂CommentInput
 ┃ ┣ 📂common           // 공통으로 사용되는 컴포넌트 폴더
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┣ 📂ImageInput
 ┃ ┃ ┣ 📂LabelInput
 ┃ ┃ ┣ 📂Modals
 ┃ ┃ ┣ 📂PostAlbum
 ┃ ┃ ┣ 📂PostCard
 ┃ ┃ ┣ 📂Product
 ┃ ┃ ┣ 📂ProfileImg
 ┃ ┃ ┗ 📂TabMenu
 ┃ ┣ 📂ImagePreview
 ┃ ┣ 📂Loading
 ┃ ┣ 📂MenuBar
 ┃ ┣ 📂Nav
 ┃ ┣ 📂ProfileInfo
 ┃ ┗ 📂UserListItem
 ┃ ┃ ┗ 📂UserFollow
 ┣ 📂context         // 로그인 한 사용자 정보를 담기 위한 context 파일 관리 폴더
 ┣ 📂hooks
 ┣ 📂pages
 ┃ ┣ 📂AddProduct
 ┃ ┣ 📂ChatList
 ┃ ┣ 📂ChatRoom
 ┃ ┣ 📂EditPost
 ┃ ┣ 📂Follow
 ┃ ┣ 📂HomeFeed
 ┃ ┣ 📂JoinEmail
 ┃ ┣ 📂JoinProfileEdit
 ┃ ┣ 📂Login
 ┃ ┣ 📂LoginEmail
 ┃ ┣ 📂ModifyProfile
 ┃ ┣ 📂NotFound
 ┃ ┣ 📂PostDetail
 ┃ ┣ 📂Profile
 ┃ ┃ ┗ 📂UserProfile
 ┃ ┣ 📂SearchUser
 ┃ ┣ 📂Splash
 ┃ ┣ 📂UpdateProduct
 ┃ ┗ 📂UploadPost
 ┣ 📂Router
 ┣ 📂styles
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜index.jsx
 ```
