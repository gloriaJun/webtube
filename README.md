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
yarn add nodemon
```
- 실행 방법
```bash
nodemon --exec babel-node index.js
```
- 파일 수정 후 일정 시간 후에 Restart가 되도록 하려면 `--delay` 옵션을 추가한다.
```bash
nodemon --exec babel-node index.js --delay 10
```

#### express middleware
###### morgan
- https://github.com/expressjs/morgan
- logging을 위한 미들웨어
```javascript
import morgan from 'morgan';

// logging format을 파라미터로 전달
app.use(morgan('tiny'));
```

###### helmet
- https://helmetjs.github.io
- HTTP 헤더를 적절히 설정하여 몇 가지 잘 알려진 웹 취약성으로부터 앱을 보호할 수 있다.
```javascript
import helmet from 'helmet';

app.use(helmet());
```

#### Pug
- template engine으로 유사한 기능을 제공하는 것으로는 *handlebars, mustache, ejs* 등이 있다.
- 기존에는 *Jade*라는 이름이었는데 상표권 문제로 Pug로 이름이 변경 (흠..hudson이 jenkins가 된 것과 유사한 사유인가보다...)
- 가장 많이 사용되는 템플릿 엔진인 듯..
- 내부에서 자바스크립트 코드 사용 시
```
span.footer--text &copy; #{new Date().getFullYear()} WeTube
```


#### Local Middleware
- 클라이언트 전역에서 사용할 설정 값들을 정의한 뒤에 서버에서 `response.locals` 객체에 담아서 전달한다.
- 해당 기능을 정의한 함수를 express의 middlesware로 정의한다.
```javascript
app.use((req, res, next) => {
  res.locals.siteName = 'WebTube';
  
  next();
});
```
```
title #{siteName}
```

