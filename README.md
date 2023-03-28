## 简介

基于 [Vue3.0](https://github.com/vuejs/vue-next)、[Webpack](https://webpack.js.org/)、 [tdesign-vue-next](https://tdesign.tencent.com/vue-next/getting-started)、[TypeScript](https://www.typescriptlang.org/) 的中后台管理系统模板，它使用了最新的前端技术栈，包括二次封装组件、动态菜单、权限校验它可以帮助你快速搭建中后台项目

## 使用

- 获取项目代码

```bash
git clone https://github.com/side-wing/vue-typescript-template-system.git
```

- 安装依赖

```bash
cd vue-typescript-template-system

// yarn
yarn install

// npm
npm install

// pnpm
pnpm install
```

- 运行

```bash
npm start
```

- 登录（账号、密码）

```bash
user
123456
```

- 打包

```bash
npm run build
```

## 贡献

非常欢迎你的加入！[提一个 Issue](https://github.com/side-wing/vue-typescript-template-system/issues) 或者提交一个 Pull Request。

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交你的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## Git 贡献提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

  - `feat` 增加新功能
  - `fix` 修复问题/BUG
  - `style` 代码风格相关无影响运行结果的
  - `perf` 优化/性能提升
  - `refactor` 重构
  - `revert` 撤销修改
  - `test` 测试相关
  - `docs` 文档/注释
  - `chore` 依赖更新/脚手架配置修改等
  - `workflow` 工作流改进
  - `ci` 持续集成
  - `types` 类型定义文件更改
  - `wip` 开发中
