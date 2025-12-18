# 企业后台管理系统需求文档

## 介绍

企业后台管理系统是一个多层级的管理平台，支持超级管理员、企业管理员和项目用户的分级管理。系统提供企业管理、项目管理、用户管理和角色管理四个核心模块，实现企业资源的统一管理和权限控制。

## 术语表

- **System**: 企业后台管理系统
- **User**: 系统用户，统一管理的用户实体，通过角色区分权限级别
- **Super_Admin**: 超级管理员角色，拥有系统最高权限
- **Enterprise_Admin**: 企业管理员角色，管理特定企业的资源
- **Project_Admin**: 项目管理员角色，管理特定项目的资源和用户
- **Project_User**: 项目用户角色，参与特定项目的普通用户
- **Subcontractor_User**: 分包用户角色，隶属于分包单位的用户
- **Enterprise**: 企业实体，包含项目、用户和套餐信息
- **Project**: 项目实体，隶属于企业，包含设备和用户信息
- **Package_Balance**: 套餐余额，企业可分配给项目的资源额度
- **Storage_Quota**: 存储空间额度，项目可使用的存储资源
- **AI_Quota**: AI额度，项目可使用的AI服务资源
- **Subcontractor**: 分包单位，项目下的承包方
- **Role**: 角色，定义用户在系统中的权限范围，分为企业级、项目级、分包级
- **Enterprise_Role**: 企业级角色，适用于企业层面的管理权限
- **Project_Role**: 项目级角色，适用于项目层面的管理权限
- **Subcontractor_Role**: 分包级角色，适用于分包单位层面的管理权限
- **Menu_Permission**: 菜单权限，控制用户可访问的功能模块
- **Data_Permission**: 数据权限，控制用户可查看和操作的数据范围

## 需求

### 需求 1

**用户故事:** 作为超级管理员，我希望能够管理系统中的所有企业，以便统一控制平台资源和权限。

#### 验收标准

1. WHEN 超级管理员访问企业管理页面 THEN System SHALL 显示所有企业的树形结构台账表格
2. WHEN 超级管理员点击新增企业按钮 THEN System SHALL 提供企业创建表单包含企业信息和初始套餐额度设置
3. WHEN 超级管理员创建企业 THEN System SHALL 为新企业分配指定的套餐额度并创建企业记录
4. WHEN 超级管理员选择企业节点 THEN System SHALL 显示该企业的详细信息包括下属项目和用户
5. WHEN 超级管理员修改企业信息 THEN System SHALL 验证数据并更新企业记录
6. WHEN 超级管理员删除企业 THEN System SHALL 确认操作并移除企业及其关联数据

### 需求 2

**用户故事:** 作为企业管理员，我希望能够管理本企业的项目和用户，以便有效分配资源和控制权限。

#### 验收标准

1. WHEN 企业管理员访问企业管理页面 THEN System SHALL 仅显示该管理员所属企业的组织节点
2. WHEN 企业管理员查看企业信息 THEN System SHALL 显示所有下属项目、项目关联的分包单位及分包单位用户信息
3. WHEN 企业管理员创建新项目 THEN System SHALL 在当前企业下创建项目并要求指定项目的套餐额度分配
4. WHEN 企业管理员在项目创建时填写项目管理员信息 THEN System SHALL 检查用户是否存在并自动绑定或创建新用户
5. WHEN 项目管理员用户已存在 THEN System SHALL 直接将该用户绑定为项目管理员角色
6. WHEN 项目管理员用户不存在 THEN System SHALL 创建新用户并自动绑定为项目管理员角色
7. WHEN 企业管理员编辑项目信息 THEN System SHALL 允许修改项目基础信息和重新分配额度
8. WHEN 企业管理员删除项目 THEN System SHALL 验证权限并移除项目数据同时回收项目额度到企业
9. WHEN 企业管理员查看套餐余额 THEN System SHALL 显示当前企业的总额度、可用额度和已分配额度
10. WHEN 企业管理员查看项目资源使用情况 THEN System SHALL 显示各项目的存储空间使用量、AI额度使用量和其他资源消耗统计

### 需求 3

**用户故事:** 作为企业管理员，我希望能够为下属项目分配套餐额度，以便控制项目资源使用。

#### 验收标准

1. WHEN 企业管理员访问额度分配功能 THEN System SHALL 显示当前企业的总额度和各项目已分配额度
2. WHEN 企业管理员为项目分配额度 THEN System SHALL 验证分配额度不超过可用余额
3. WHEN 额度分配成功 THEN System SHALL 更新企业余额和项目额度记录
4. WHEN 企业管理员回收项目额度 THEN System SHALL 将额度返还到企业可用余额
5. WHEN 项目额度不足 THEN System SHALL 阻止超额操作并提示余额不足

### 需求 4

**用户故事:** 作为用户，我希望能够通过项目管理模块查看和管理项目信息，以便了解项目状态和资源使用情况。

#### 验收标准

1. WHEN 用户从企业管理跳转到项目管理 THEN System SHALL 显示相关项目的台账信息
2. WHEN 用户应用筛选条件 THEN System SHALL 根据条件过滤并显示匹配的项目列表
3. WHEN 用户查看项目详情 THEN System SHALL 显示项目基础信息、套餐额度、绑定设备和用户信息
4. WHEN 用户查看分包单位信息 THEN System SHALL 显示项目下的分包单位及其用户列表
5. WHEN 项目信息更新 THEN System SHALL 实时反映在项目管理界面中

### 需求 5

**用户故事:** 作为管理员，我希望能够在统一的用户管理系统中管理所有用户，以便通过角色权限控制不同用户的访问范围。

#### 验收标准

1. WHEN 管理员访问用户管理页面 THEN System SHALL 显示统一的用户列表包含超级管理员、企业用户、项目用户、分包用户
2. WHEN 管理员根据权限查看用户 THEN System SHALL 根据管理员角色显示其有权管理的用户范围
3. WHEN 管理员新增用户 THEN System SHALL 提供用户信息表单并要求分配相应的角色和权限
4. WHEN 管理员修改用户信息 THEN System SHALL 允许更新用户基础信息和重新分配角色权限
5. WHEN 管理员删除用户 THEN System SHALL 确认操作并移除用户及其所有权限关联
6. WHEN 管理员应用用户筛选 THEN System SHALL 根据筛选条件和权限范围显示匹配的用户记录

### 需求 6

**用户故事:** 作为超级管理员，我希望能够创建和管理分层级的角色权限，以便为企业、项目、分包等不同层级的用户分配适当的权限。

#### 验收标准

1. WHEN 超级管理员访问角色管理页面 THEN System SHALL 显示所有系统角色按企业级、项目级、分包级分类展示
2. WHEN 非超级管理员用户尝试访问角色管理 THEN System SHALL 拒绝访问并显示权限不足提示
3. WHEN 超级管理员创建企业级角色 THEN System SHALL 提供企业级权限配置选项包括企业管理和项目管理权限
4. WHEN 超级管理员创建项目级角色 THEN System SHALL 提供项目级权限配置选项包括项目资源和分包管理权限
5. WHEN 超级管理员创建分包级角色 THEN System SHALL 提供分包级权限配置选项包括分包单位内部管理权限
6. WHEN 超级管理员修改角色权限 THEN System SHALL 更新角色配置并立即影响相关用户的访问权限
7. WHEN 用户登录系统 THEN System SHALL 根据用户角色层级和权限显示相应的功能模块和数据范围

### 需求 7

**用户故事:** 作为企业管理员，我希望能够监控下属项目的资源使用情况，以便合理分配和管理企业资源。

#### 验收标准

1. WHEN 企业管理员查看项目资源概览 THEN System SHALL 显示所有项目的存储空间、AI额度等资源使用统计
2. WHEN 企业管理员选择特定项目 THEN System SHALL 显示该项目的详细资源使用历史和趋势
3. WHEN 项目资源使用接近限额 THEN System SHALL 向企业管理员发送预警通知
4. WHEN 企业管理员查看资源分配报表 THEN System SHALL 生成各项目资源使用对比和分析图表
5. WHEN 项目资源超出分配额度 THEN System SHALL 阻止超额使用并通知相关管理员

### 需求 8

**用户故事:** 作为系统用户，我希望系统界面具有清晰的导航结构，以便快速访问所需功能模块。

#### 验收标准

1. WHEN 用户登录系统 THEN System SHALL 显示左侧菜单栏包含企业管理、项目管理、用户管理、角色管理选项
2. WHEN 用户点击菜单项 THEN System SHALL 导航到对应的功能页面
3. WHEN 用户在不同页面间切换 THEN System SHALL 保持菜单状态和用户上下文
4. WHEN 用户权限不足 THEN System SHALL 隐藏或禁用无权访问的菜单项
5. WHEN 页面加载 THEN System SHALL 在3秒内完成界面渲染和数据加载