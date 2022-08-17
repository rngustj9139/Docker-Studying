FROM node:10

# 임시컨테이너의 ./ (현재경로)에 package.json을 복붙함
# COPY package.json ./
# 현재 경로의 모든 파일을 임시컨테이너 속으로 복붙함, (package.json, server.js)
COPY ./ ./ 

# package.json에 명시한 express 다운로드 => 임시컨테이너속에 package.json이 없으므로 오류가 발생, COPY를 이용해서 안으로 넣어주어야함
RUN npm install 

# 노드 웹 서버를 작동시키려면 node + 엔트리파일명을 입력해야한다. 이미지를 만들고 컨테이너를 실행시키면 server.js를 못찾는다는 오류가 발생, server.js도 컨테이너 안으로 COPY해야한다.
CMD ["node", "server.js"]





# 현재컴퓨터의 로컬호스트 포트번호와 컨테이너 안의 로컬호스트의 포트번호 8080을 매핑시켜주어야함 => docker run -p 5000:8080 mnb9139/nodejs:latest 명령어를 실행해야함
# 5000포트로 들어가면 이 포트는 컨테이너 속 8080과 매핑되어있어서 8080으로 접속이 된다.
# 브라우저로 접속할때는 localhost:5000으로 들어가야한다.