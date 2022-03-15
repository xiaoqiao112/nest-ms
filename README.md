# nest-ms
微服务架构，主项目和微服务项目分开，主项目为ms-app，微服务项目为ms-math，主项目和微服务单独启动

测试主项目和微服务之间通信

ms-app目录下执行curl命令

```
curl --location --request POST 'http://localhost:3000/math/wordcount' \
--header 'Content-Type: application/json' \
--data-raw '{
    "text": "a b c c"
}'
```
