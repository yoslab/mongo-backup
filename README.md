
## これは何？

- Node.jsアプリケーションでmongodbをbackupする例です．

---

## Get Started!

```
git clone https://github.com/yoslab/mongo-backup.git
cd mongo-backup
npm i
```

1. **npm start** => `node index.js`
    - 即時実行します．
1. **npm run start:cron** => `node cron.js`
    - 定期実行cronを立ち上げます．
1. **npm run start:server** => `node web-stream.js`
    - DL用のサーバを立ち上げます．

---

## Hint

上記2と3は**pm2**で管理すると楽でしょう．
```
pm2 start npm --name "MongoDumpCron" -- run start:cron
pm2 status
pm2 restart MongoDumpCron
```
