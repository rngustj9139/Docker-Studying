FROM node:10

# 임시컨테이너의 ./ (현재경로)에 package.json을 복붙함
# COPY package.json ./
# 현재 경로의 모든 파일을 임시컨테이너 속으로 복붙함, (package.json, server.js)
COPY ./ ./ 

# package.json에 명시한 express 다운로드 => 임시컨테이너속에 package.json이 없으므로 오류가 발생, COPY를 이용해서 안으로 넣어주어야함
RUN npm install 

# 노드 웹 서버를 작동시키려면 node + 엔트리파일명을 입력해야한다. 이미지를 만들고 컨테이너를 실행시키면 server.js를 못찾는다는 오류가 발생, server.js도 컨테이너 안으로 COPY해야한다.
CMD ["node", "server.js"]
