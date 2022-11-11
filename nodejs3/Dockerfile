FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install 

COPY ./ ./ 

CMD ["node", "server.js"]

# COPY를 통해 로컬에서 컨테이너에 server.js와 package.json파일을 이동시키는건 매번 파일의 변경이 일어날때마다 이미지를 빌드해야한다는 불필요함존재
# => docker volume을 이용하면 컨테이너가 로컬의 파일을 실시간으로 참조한다.(반영한다.)

# 그냥 vscode상의 터미널이 이난 윈도우 파워셸을 실행한후(지금 이 폴더(nodejs3) 경로로 이동해야함) 지금 경로에 들어간 뒤 docker run -d -p 5000:8080 -v /usr/src/app/node_modules -v ${pwd}:/usr/src/app mnb9139/nodejs3:latest 을 실행해야한다.
# => -v 는 volume을 의미한다.
# => npm install을 하면 종속성들이 다운받게 되는데(node_modules)  어차피 컨테이너 속에서 RUN npm install을하므로 로컬에서는 node_modules이 필요없다.
# => 즉 -v /usr/src/app/node_modules 는 컨테이너의 node_modules는 로컬의 파일을 참조(매핑)하지 않는다는 의미이다.
# => -v ${pwd}:/usr/src/app 은 컨테이너 속의 /usr/src/app 속 server.js, package.json파일들이 local의 server.js, package.json을 참조하여 매핑한다는 의미이다.
# => volume을 사용한다면 COPY ./ ./가 필요없음

# => 맥에서는 -v $(pwd):/usr/src/app
