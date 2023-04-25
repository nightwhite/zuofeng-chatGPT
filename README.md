# ChatGPT

基于 laf 开发的 chatGPT 聊天工具   

## 下载代码，切换到 night-gpt 分支

```shell
git clone https://github.com/nightwhite/zuofeng-chatGPT.git
```

## 安装依赖

```shell
npm i
```

## 修改 .env

把.env中的baseUrl改成自己的链接，如：`https://appid.laf.dev`

## 上传云函数

把laf-cloud中的send云函数上传到自己的Laf应用，并发布

也可以使用 vs Code 插件 `laf assistant` 去完成此操作：<https://marketplace.visualstudio.com/items?itemName=NightWhite.laf-assistant>

## 本地测试

```shell
npm run dev
```

## 编译代码并上传到云存储

```shell
npm run build
```

编译完成后，把dist目录里面的全部文件上传到Laf云存储，开启托管即可直接访问。
