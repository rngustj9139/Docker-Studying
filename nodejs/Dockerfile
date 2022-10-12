FROM node:10

# package.json과 server.js같은 개발자가 만든 소스파일들을 저장할 경로 생성, docker run -it mnb9139/nodejs:latest sh 명령어로 컨테이너 실행후 ls 명령어 치면 Dockerfile  node_modules  package-lock.json  package.json  server.js 파일처럼 우리가 만든 파일만 존재한다 => ls를 치면 루트 디렉터리가 아닌 /usr/src/app 디렉터리가 접근되기 때문이다. 
WORKDIR /usr/src/app

# 임시컨테이너의 ./ (현재경로)에 package.json을 복붙함
# COPY package.json ./

# 현재 경로의 모든 파일을 임시컨테이너 속으로 복붙함, (package.json, server.js) => but이러면 dev, bin, package.json, server.js등 모든 파일이 한 디렉터리 안으로 묶여짐 => 파일명 중복문제 발생가능성 존재, 정리정돈 문제 발생 => WORKDIR를 이용해 디렉터리 관리를 해야한다.
COPY ./ ./ 

# package.json에 명시한 express 다운로드 => 임시컨테이너속에 package.json이 없으므로 오류가 발생, COPY를 이용해서 안으로 넣어주어야함
# node_modules이 컨테이너 안에 생긴다.
RUN npm install 

# 노드 웹 서버를 작동시키려면 node + 엔트리파일명을 입력해야한다. 이미지를 만들고 컨테이너를 실행시키면 server.js를 못찾는다는 오류가 발생, server.js도 컨테이너 안으로 COPY해야한다.
CMD ["node", "server.js"]



# npm init후 이후 => package.json의 dependencies에 express 추가하기(js와 jquery의 관계 = node와 express의 관계) (scripts에 "start": "node server.js 추가하기 - npm run start로 스크립트 실행가능")
# 현재컴퓨터의 로컬호스트 포트번호와 컨테이너 안의 로컬호스트의 포트번호 8080을 매핑시켜주어야함 => docker run -p 5000:8080 mnb9139/nodejs:latest 명령어를 실행해야함
# 5000포트로 들어가면 이 포트는 컨테이너 속 8080과 매핑되어있어서 8080으로 접속이 된다.
# 브라우저로 접속할때는 localhost:5000으로 들어가야한다.
# docker run -d -p 5000:8080 mnb9139/nodejsmodified:latest 에서 -d는 컨테이너를 실행시킨다음에 터미널에서 빠져나오게 해주는 옵션이다 (컨테이너는 계속 실행된다.)