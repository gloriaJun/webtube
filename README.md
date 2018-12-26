# Youtube Clone Coding
- 강의링크 : [유튜브 클론 코딩](https://academy.nomadcoders.co/courses/435438/lectures/6811582)

## 해당 프로젝트의 목적
1. Vanilla Javascript를 이용하여 프로젝트 수행해보기
2. node.js를 이용하여 MVC 패턴을 이용하여 백앤드 구성
3. 아는 것들도 전반적으로 정리해보기~~~



 
## What I did Learn
#### babel-node
- https://babeljs.io/docs/en/babel-node
- ES6로 작성한 노드 코드를 실행하기 위한 기능.
- 설치
```bash
yarn add @babel/core @babel/node --dev
```
- 실행 방법
```bash
babel-node index.js
```

#### nodemon
- 코드가 변경될 때마다 수동으로 재기동하지 않고, 자동으로 변경된 내용이 반영되어 재기동되도록 해주는 기능을 제공
- 설치
```bash
yarn add nodemon --dev
```
- 실행 방법
```bash
nodemon --exec babel-node index.js
```
