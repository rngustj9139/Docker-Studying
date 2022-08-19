# 베이스 이미지를 명시해준다. (OS같은 파일 스냅샷) <이미지의 이름>:<태그> 형식으로 작성, 태그를 안붙이면 자동적으로 가장 최신것을 다운받음
FROM alpine 

# 추가적으로 필요한 파일 스냅샷을 다운로드 받는다. (우리는 단순 hello world만 출력할것이기 때문에 그냥 주석처리)
# RUN 

# 컨테이너 시작시 실행될 명령어를 명시한다. (CMD는 Dockerfile 내에 1회만 사용가능)
CMD ["echo", "hello world"]




# Dockerfile은 도커 클라이언트로 전달된 뒤 도커 서버로 전달된뒤 이미지로 변환된다. => 명령어는 docker build . 혹은 docker build ./ 이다.
# 이미지에 이름을 주고 싶으면 docker build -t mnb9139/hello:latest ./ 명령어를 사용한다. mnb9139는 도커 허브의 아이디이다.
# 이미지 만든후 docker run -it mnb9139/hello 명령어 실행하기 (-i는 interactive모드이고 -t는 터미널을 의미한다.)
# docker run alpine ls에서 ls는 컨테이너가 실행된후 실행할 명령어를 의미한다 매번 이렇게 하기 귀찮다면 docker run alpine sh명령어를 이용하면 된다.
# 현재 돌아가고 있는 컨테이너를 확인할려면 docker ps, 안돌아가는 컨테이너까지 전체 확인할려면 docker ps -a명령어를 이용한다.
# 돌아가는 컨테이너를 중지시키고 싶으면 docker stop <컨테이너ID> 혹은 docker kill <컨테이너ID>명령어를 이용한다.
# 컨테이너를 삭제하고 싶으면 컨테이너를 먼저 중지시킨뒤 docker rm <컨테이너ID>명령어를 이용한다 모두 삭제하고싶으면 docker rm ${docker ps -a -q}명령어를 이용한다.
