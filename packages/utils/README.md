# 基本信息

## 文件夹说明

```file
├── utils
│   ├── types 类型文件夹
│   ├── lib   开发文件夹
```

## 对等依赖

```cmd
pnpm add xxx --save-peer
```

并且vite打包时剔除相关依赖库

## 发布npm包时，文件优先级

`package.json`的`files` > `.npmignore` > `.gitignore`

## 本地预览包

```cmd
npm pack
tar -tf XXX.tgz
```
