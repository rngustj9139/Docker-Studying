FROM node:14

WORKDIR /usr/src/app

COPY ./ ./

RUN npm install

CMD ["node", "server.js"]

# docker run redis 명령어를 실행한다음에 node js 컨테이너를 실행해야함 (nodejs가 들어있는 컨테이너와 redis server가 들어있는 컨테이너가 서로 통신을 하면서 작동하므로)
# 이후 다른 터미널에서 docker build -t mnb9139/nodejs4:latest ./ 살행 후 docker run mnb9139/nodejs4:latest 실행
# but 실행시키면 오류가 날거임 => 두개의 컨테이너간 통신할수있는 아무런 설정이 없기 때문이다. (docker compose를 이용해야한다. => docker compose는 다중 컨테이너를 관리할 수 있게 하며 멀티 컨테이너 상황에서 쉽게 네트워크를 연결시켜줄수있게한다.)