FROM node:10

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install 

COPY ./ ./ 

CMD ["node", "server.js"]

# 만약 server.js 내용을 변경시킨 뒤 컨테이너를 실행시키기 위해 빌드를 하면 RUN npm install 때문에 모듈까지 재다운받는 불필요함이 존재한다.
# => 위와 같이 소스를 변경하면 package.json의 dependencies가 변경이 있을때만 npm install을 하고 변경이 없을때는 처음에만 다운을 받고 이후 컨테이너를 실행할때는 다운을 받지않고 캐시를 통해 불러온다.
# => 위와같이하면 server.js 소스만 변경했을때 npm 의존성을 다시 다운받는 불상사가 일어나지 않는다.
