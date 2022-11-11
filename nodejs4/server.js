const express = require("express");
const redis = require("redis");

const client = redis.createClient({ // 레디스 클라이언트 생성
    socket: {
        host: "redis-server", // 도커 환경에서는 redis-server를 추가하고(redis-server는 docker-compose.yml파일에 명시한 컨테이너 이름이다.) redis서버가 작동하는 곳이 redis-server.com이라면 https://redis-server.com을 추가한다.
        port: 6379 // 레디스의 기본 포트는 6379이다.
    }
});

const app = express();
app.get('/', async (req, res) => {
    await client.connect();
    let number = await client.get('number');
    if (number === null) {
        number = 0;
    }

    console.log('Number: ' + number);
    res.send("숫자가 1씩 올라갑니다. 숫자: " + number)

    await client.set("number", parseInt(number) + 1) // "number"는 key고 parseInt속 number는 value이다.
    await client.disconnect();;;
})

app.listen(8080);

console.log('Server is running');