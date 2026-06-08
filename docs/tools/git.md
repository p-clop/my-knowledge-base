---
title: Git 使用指南
tags:
  - Git
  - 工具
---

# Git 使用指南

Git 是目前最流行的分布式版本控制系统。

## 基本命令

```bash
git init          # 初始化仓库
git add .         # 暂存所有文件
git commit -m "message"  # 提交
git push          # 推送到远程
git pull          # 拉取远程更新
```

## 常用工作流

1. 创建功能分支: `git checkout -b feature/new-feature`
2. 开发并提交
3. 合并回主分支
