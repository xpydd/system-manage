# 企业后台管理系统前端原型设计文档

## 概述

企业后台管理系统前端原型，用于快速原型评审。系统采用经典的后台管理布局，左侧导航菜单，右侧内容区域。支持多层级组织架构展示和权限控制的界面设计。

系统核心界面特性：
- 左侧固定导航菜单
- 树形结构数据展示
- 表格数据管理界面
- 资源使用情况图表展示
- 响应式布局设计

## 技术栈

**前端技术栈：**
- HTML5 + CSS3 + JavaScript (ES6+)
- Tailwind CSS 3.x 实用优先的CSS框架（主要UI样式和布局）
- Heroicons 或 Lucide 图标库（SVG图标）
- Chart.js 图表库
- 模拟数据（JSON格式）

**CSS框架选择：**
- **Tailwind CSS 3.x** - 实用优先的原子化CSS框架
- **工具类系统**：间距、颜色、排版、布局、响应式等完整的工具类
- **组件构建**：通过工具类组合构建自定义组件（导航栏、表格、表单、按钮、模态框、卡片等）
- **响应式设计**：使用 `sm:`, `md:`, `lg:`, `xl:`, `2xl:` 前缀实现移动优先的响应式设计
- **暗色模式支持**：使用 `dark:` 前缀支持暗色主题
- **JIT模式**：按需生成CSS，优化构建体积

## 界面布局设计

### 整体布局结构

```
┌─────────────────────────────────────────────────────────┐
│                    顶部导航栏                              │
│  Logo  |  用户信息  |  退出登录                           │
├─────────────┬───────────────────────────────────────────┤
│             │                                           │
│   左侧菜单    │              主内容区域                     │
│             │                                           │
│ 企业管理     │  ┌─────────────────────────────────────┐   │
│ 项目管理     │  │                                     │   │
│ 用户管理     │  │         页面内容                     │   │
│ 角色管理     │  │                                     │   │
│             │  │                                     │   │
│             │  └─────────────────────────────────────┘   │
│             │                                           │
└─────────────┴───────────────────────────────────────────┘
```

### Tailwind CSS 布局实现

**整体布局结构（Flexbox 布局）：**
```html
<div class="flex h-screen bg-gray-100">
  <!-- 左侧导航栏 -->
  <aside class="w-64 bg-white border-r border-gray-200 flex-shrink-0">
    <!-- 导航菜单内容 -->
  </aside>
  
  <!-- 主内容区域 -->
  <div class="flex-1 flex flex-col overflow-hidden">
    <!-- 顶部导航栏 -->
    <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6">
      <!-- 顶部内容 -->
    </header>
    
    <!-- 主内容 -->
    <main class="flex-1 overflow-y-auto p-6">
      <!-- 页面内容 -->
    </main>
  </div>
</div>
```

**响应式布局（移动端适配）：**
```html
<div class="flex flex-col lg:flex-row h-screen bg-gray-100">
  <!-- 移动端：可折叠的侧边栏 -->
  <aside class="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-shrink-0">
    <!-- 桌面端显示 -->
  </aside>
  
  <!-- 移动端：汉堡菜单按钮 -->
  <button class="lg:hidden fixed top-4 left-4 z-50">
    <!-- 移动端菜单按钮 -->
  </button>
</div>
```

### 页面设计规范

**1. 企业管理页面**
- 左侧：企业树形结构（使用 Tailwind Card 样式和折叠动画）
- 右侧：企业详情信息（使用 Tailwind Card 和 Badge 样式）
- 底部：资源使用情况图表（使用 Chart.js + Tailwind 容器样式）

**2. 项目管理页面**
- 顶部：搜索和筛选条件（使用 Tailwind Form 和 Input Group 样式）
- 中间：项目列表表格（使用 Tailwind Table 样式）
- 右侧：项目详情面板（使用 Tailwind Slide-over 或 Drawer 样式）

**3. 用户管理页面**
- 顶部：搜索和筛选条件（使用 Tailwind Form 样式）
- 中间：用户列表表格（使用 Tailwind Table 样式）
- 弹窗：用户新增/编辑表单（使用 Tailwind Modal 样式）

**4. 角色管理页面**
- 左侧：角色列表（使用 Tailwind List 样式）
- 右侧：权限配置树形结构（使用 Tailwind Accordion 或 Collapse 样式）

### Tailwind CSS 使用规范

**导航组件：**
- 顶部导航：使用 `bg-white shadow-sm border-b` 创建顶部导航栏
- 左侧菜单：使用 `bg-gray-50 border-r` 创建侧边栏，`hover:bg-gray-100` 实现悬停效果
- 面包屑：使用 `flex items-center space-x-2 text-sm text-gray-500` 显示页面路径

**数据展示组件：**
- 表格：使用 `min-w-full divide-y divide-gray-200` 创建表格，`even:bg-gray-50` 实现斑马纹，`hover:bg-gray-100` 实现悬停效果
- 卡片：使用 `bg-white rounded-lg shadow-sm border border-gray-200` 创建卡片容器
- 标签：使用 `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium` 创建标签，配合颜色类如 `bg-green-100 text-green-800`

**交互组件：**
- 按钮：使用 `px-4 py-2 rounded-md font-medium transition-colors` 基础样式
  - 主按钮：`bg-blue-600 text-white hover:bg-blue-700`
  - 次要按钮：`bg-gray-200 text-gray-900 hover:bg-gray-300`
  - 成功按钮：`bg-green-600 text-white hover:bg-green-700`
  - 危险按钮：`bg-red-600 text-white hover:bg-red-700`
- 模态框：使用 `fixed inset-0 z-50` 创建遮罩层，`bg-white rounded-lg shadow-xl` 创建对话框
- 表单输入：使用 `block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500` 创建输入框

**布局组件：**
- 容器：使用 `w-full` 或 `max-w-7xl mx-auto` 创建容器
- 网格布局：使用 `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4` 创建响应式网格
- 弹性布局：使用 `flex items-center justify-between` 创建弹性布局
- 间距：使用 `p-4`, `m-4`, `space-x-4`, `space-y-4` 等工具类控制间距

**响应式设计：**
- 移动优先：基础样式针对移动端，使用 `md:`, `lg:`, `xl:` 前缀适配更大屏幕
- 断点：`sm:640px`, `md:768px`, `lg:1024px`, `xl:1280px`, `2xl:1536px`
- 示例：`grid-cols-1 md:grid-cols-2 lg:grid-cols-3` 实现响应式网格

**颜色系统：**
- 主色调：使用 `blue-600`, `blue-700` 作为主色
- 状态颜色：`green-*` 成功，`red-*` 错误/危险，`yellow-*` 警告，`gray-*` 中性
- 文本颜色：`text-gray-900` 主文本，`text-gray-600` 次要文本，`text-gray-400` 禁用文本

**动画和过渡：**
- 使用 `transition-colors`, `transition-all`, `duration-200`, `ease-in-out` 实现平滑过渡
- 使用 `transform`, `scale`, `translate` 实现变换动画

### 页面组件详细设计

**1. 顶部导航栏组件**
```html
<header class="bg-white shadow-sm border-b border-gray-200 h-16">
  <div class="flex items-center justify-between h-full px-6">
    <!-- Logo区域 -->
    <div class="flex items-center space-x-4">
      <img src="logo.svg" alt="Logo" class="h-8 w-auto">
      <h1 class="text-xl font-semibold text-gray-900">企业管理系统</h1>
    </div>
    
    <!-- 用户信息区域 -->
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-2">
        <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
          <span class="text-white text-sm font-medium">管</span>
        </div>
        <span class="text-sm text-gray-700">管理员</span>
      </div>
      <button class="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
        退出登录
      </button>
    </div>
  </div>
</header>
```

**2. 左侧导航菜单组件**
```html
<aside class="w-64 bg-white border-r border-gray-200 h-full overflow-y-auto">
  <nav class="p-4 space-y-1">
    <a href="#" class="flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-blue-50 border-r-2 border-blue-600 rounded-md">
      <svg class="mr-3 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <!-- 图标SVG -->
      </svg>
      企业管理
    </a>
    <a href="#" class="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
      <svg class="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <!-- 图标SVG -->
      </svg>
      项目管理
    </a>
    <!-- 更多菜单项 -->
  </nav>
</aside>
```

**3. 数据表格组件**
```html
<div class="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            名称
          </th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            状态
          </th>
          <th class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            操作
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr class="hover:bg-gray-50 transition-colors">
          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            科技发展有限公司
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
              激活
            </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
            <button class="text-blue-600 hover:text-blue-900 mr-4">编辑</button>
            <button class="text-red-600 hover:text-red-900">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

**4. 卡片组件**
```html
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-gray-900">企业详情</h3>
    <button class="text-gray-400 hover:text-gray-600">
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <!-- 关闭图标 -->
      </svg>
    </button>
  </div>
  <div class="space-y-4">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-1">企业名称</label>
      <p class="text-sm text-gray-900">科技发展有限公司</p>
    </div>
    <!-- 更多详情项 -->
  </div>
</div>
```

**5. 表单组件**
```html
<form class="space-y-6">
  <div>
    <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
      企业名称 <span class="text-red-500">*</span>
    </label>
    <input 
      type="text" 
      id="name" 
      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm px-3 py-2 border"
      placeholder="请输入企业名称"
    />
    <p class="mt-1 text-sm text-red-600 hidden">请输入有效的企业名称</p>
  </div>
  
  <div class="flex items-center justify-end space-x-3">
    <button type="button" class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
      取消
    </button>
    <button type="submit" class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
      保存
    </button>
  </div>
</form>
```

**6. 模态框组件**
```html
<!-- 遮罩层 -->
<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <!-- 背景遮罩 -->
    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
    
    <!-- 居中定位 -->
    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    
    <!-- 模态框内容 -->
    <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
          新增用户
        </h3>
        <!-- 表单内容 -->
      </div>
      <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 sm:ml-3 sm:w-auto sm:text-sm">
          确定
        </button>
        <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
          取消
        </button>
      </div>
    </div>
  </div>
</div>
```

**7. 搜索和筛选组件**
```html
<div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-6">
  <div class="flex flex-col sm:flex-row gap-4">
    <!-- 搜索框 -->
    <div class="flex-1">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- 搜索图标 -->
          </svg>
        </div>
        <input 
          type="text" 
          class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="搜索..."
        />
      </div>
    </div>
    
    <!-- 筛选按钮 -->
    <div class="flex gap-2">
      <select class="block w-full sm:w-auto rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm">
        <option>全部状态</option>
        <option>激活</option>
        <option>禁用</option>
      </select>
      <button class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm font-medium">
        筛选
      </button>
    </div>
  </div>
</div>
```

**8. 树形结构组件**
```html
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
  <div class="space-y-1">
    <!-- 树节点 -->
    <div class="group">
      <button class="w-full flex items-center justify-between px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
        <div class="flex items-center space-x-2">
          <svg class="h-4 w-4 text-gray-400 transform transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <!-- 展开图标 -->
          </svg>
          <span class="font-medium">科技发展有限公司</span>
        </div>
        <span class="text-xs text-gray-500">2个项目</span>
      </button>
      
      <!-- 子节点（可折叠） -->
      <div class="ml-6 mt-1 space-y-1 hidden group-hover:block">
        <div class="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
          智慧城市项目
        </div>
        <div class="px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md cursor-pointer">
          电商平台项目
        </div>
      </div>
    </div>
  </div>
</div>
```

**9. 图表容器组件**
```html
<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
  <div class="flex items-center justify-between mb-4">
    <h3 class="text-lg font-semibold text-gray-900">资源使用情况</h3>
    <div class="flex items-center space-x-4 text-sm">
      <div class="flex items-center">
        <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
        <span class="text-gray-600">存储</span>
      </div>
      <div class="flex items-center">
        <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
        <span class="text-gray-600">AI</span>
      </div>
    </div>
  </div>
  <div class="h-64">
    <canvas id="resourceChart"></canvas>
  </div>
</div>
```

**10. 加载状态组件**
```html
<!-- 加载动画 -->
<div class="flex items-center justify-center p-8">
  <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  <span class="ml-3 text-sm text-gray-600">加载中...</span>
</div>

<!-- 骨架屏 -->
<div class="animate-pulse space-y-4">
  <div class="h-4 bg-gray-200 rounded w-3/4"></div>
  <div class="h-4 bg-gray-200 rounded"></div>
  <div class="h-4 bg-gray-200 rounded w-5/6"></div>
</div>
```

## 数据模型

### 示例数据结构

**企业数据示例**
```json
{
  "enterprises": [
    {
      "id": 1,
      "name": "科技发展有限公司",
      "description": "专业从事软件开发和技术服务",
      "contactInfo": "联系人：张良，电话：138-0000-0001",
      "totalQuota": 10000,
      "usedQuota": 6500,
      "availableQuota": 3500,
      "createdAt": "2024-01-15",
      "projects": [
        {
          "id": 101,
          "name": "智慧城市项目",
          "description": "城市管理系统开发",
          "projectAdmin": "李博迪",
          "allocatedQuota": 3000,
          "storageUsed": 1200,
          "aiUsed": 800,
          "subcontractors": [
            {
              "id": 1001,
              "name": "前端开发团队",
              "contactInfo": "负责人：王工程师",
              "users": ["王小明", "李小红", "张小强"]
            }
          ]
        },
        {
          "id": 102,
          "name": "电商平台项目",
          "description": "在线购物平台开发",
          "projectAdmin": "陈明浩",
          "allocatedQuota": 3500,
          "storageUsed": 2100,
          "aiUsed": 1400
        }
      ]
    },
    {
      "id": 2,
      "name": "建筑工程集团",
      "description": "大型建筑工程承包商",
      "contactInfo": "联系人：刘学，电话：138-0000-0002",
      "totalQuota": 15000,
      "usedQuota": 8200,
      "availableQuota": 6800,
      "createdAt": "2024-02-20"
    }
  ]
}
```

**用户数据示例**
```json
{
  "users": [
    {
      "id": 1,
      "username": "admin",
      "fullName": "系统管理员",
      "email": "admin@system.com",
      "phone": "138-0000-0000",
      "role": "超级管理员",
      "enterprise": "系统",
      "project": "-",
      "status": "激活",
      "createdAt": "2024-01-01"
    },
    {
      "id": 2,
      "username": "enterprise_admin_1",
      "fullName": "张良",
      "email": "zhang@tech.com",
      "phone": "138-0000-0001",
      "role": "企业管理员",
      "enterprise": "科技发展有限公司",
      "project": "-",
      "status": "激活",
      "createdAt": "2024-01-15"
    },
    {
      "id": 3,
      "username": "project_admin_1",
      "fullName": "李博迪",
      "email": "li@tech.com",
      "phone": "138-0000-0003",
      "role": "项目管理员",
      "enterprise": "科技发展有限公司",
      "project": "智慧城市项目",
      "status": "激活",
      "createdAt": "2024-01-20"
    }
  ]
}
```

**角色权限数据示例**
```json
{
  "roles": [
    {
      "id": 1,
      "name": "超级管理员",
      "level": "系统级",
      "description": "拥有系统所有权限",
      "permissions": [
        "企业管理-查看", "企业管理-新增", "企业管理-编辑", "企业管理-删除",
        "项目管理-查看", "项目管理-新增", "项目管理-编辑", "项目管理-删除",
        "用户管理-查看", "用户管理-新增", "用户管理-编辑", "用户管理-删除",
        "角色管理-查看", "角色管理-新增", "角色管理-编辑", "角色管理-删除"
      ]
    },
    {
      "id": 2,
      "name": "企业管理员",
      "level": "企业级",
      "description": "管理本企业资源和项目",
      "permissions": [
        "企业管理-查看", "项目管理-查看", "项目管理-新增", "项目管理-编辑", "项目管理-删除",
        "用户管理-查看", "用户管理-新增", "用户管理-编辑"
      ]
    },
    {
      "id": 3,
      "name": "项目管理员",
      "level": "项目级",
      "description": "管理指定项目资源",
      "permissions": [
        "项目管理-查看", "项目管理-编辑",
        "用户管理-查看", "用户管理-新增"
      ]
    }
  ]
}
```

**资源使用统计数据示例**
```json
{
  "resourceStats": {
    "enterpriseId": 1,
    "enterpriseName": "科技发展有限公司",
    "totalQuota": 10000,
    "usedQuota": 6500,
    "availableQuota": 3500,
    "projects": [
      {
        "projectId": 101,
        "projectName": "智慧城市项目",
        "allocatedQuota": 3000,
        "storageQuota": 2000,
        "storageUsed": 1200,
        "aiQuota": 1000,
        "aiUsed": 800,
        "usageHistory": [
          {"date": "2024-01", "storage": 800, "ai": 500},
          {"date": "2024-02", "storage": 1000, "ai": 650},
          {"date": "2024-03", "storage": 1200, "ai": 800}
        ]
      }
    ]
  }
}
```

## 正确性属性

*属性是一个特征或行为，应该在系统的所有有效执行中保持为真——本质上，是关于系统应该做什么的正式声明。属性作为人类可读规范和机器可验证正确性保证之间的桥梁。*

**属性 1：企业创建一致性**
*对于任意*企业数据，创建企业后，系统中应该存在该企业记录且套餐额度正确分配
**验证：需求 1.3**

**属性 2：权限数据隔离**
*对于任意*企业管理员用户，其访问的数据范围应该仅限于所属企业的组织节点
**验证：需求 2.1**

**属性 3：项目创建关联性**
*对于任意*项目创建操作，新项目应该正确关联到当前企业并分配指定的套餐额度
**验证：需求 2.3**

**属性 4：用户绑定逻辑**
*对于任意*项目管理员信息，系统应该正确检查用户存在性并执行绑定或创建操作
**验证：需求 2.4**

**属性 5：项目删除额度回收**
*对于任意*项目删除操作，项目额度应该完全回收到企业可用余额中
**验证：需求 2.8**

**属性 6：额度分配验证**
*对于任意*额度分配请求，分配额度不应超过企业可用余额
**验证：需求 3.2**

**属性 7：额度更新一致性**
*对于任意*成功的额度分配，企业余额和项目额度记录应该同步更新
**验证：需求 3.3**

**属性 8：筛选结果准确性**
*对于任意*筛选条件，返回的项目列表应该完全匹配筛选条件
**验证：需求 4.2**

**属性 9：用户权限范围控制**
*对于任意*管理员角色，其可查看的用户范围应该严格按照角色权限限制
**验证：需求 5.2**

**属性 10：角色权限实时生效**
*对于任意*角色权限修改，相关用户的访问权限应该立即更新
**验证：需求 6.6**

**属性 11：菜单导航一致性**
*对于任意*菜单项点击，应该正确导航到对应的功能页面
**验证：需求 8.2**

**属性 12：权限菜单控制**
*对于任意*用户权限，菜单显示应该与用户权限范围完全一致
**验证：需求 8.4**

## Tailwind CSS 配置和最佳实践

### 配置文件 (tailwind.config.js)

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
```

### 开发最佳实践

**1. 组件复用策略**
- 创建可复用的组件类组合，使用 `@apply` 指令或 JavaScript 函数封装
- 避免过度使用 `@apply`，优先使用工具类组合
- 对于复杂组件，考虑使用组件库（如 Headless UI）配合 Tailwind 样式

**2. 响应式设计原则**
- 移动优先：先设计移动端样式，再使用断点适配大屏
- 使用容器查询（Tailwind 3.2+）实现组件级响应式
- 合理使用 `hidden` 和 `block` 控制元素在不同屏幕的显示

**3. 性能优化**
- 启用 JIT 模式，按需生成 CSS
- 使用 `purge` 配置移除未使用的样式
- 避免在运行时动态生成类名，使用完整的类名字符串

**4. 可维护性**
- 使用语义化的类名组合，保持一致性
- 创建设计令牌（颜色、间距、字体大小）在配置文件中统一管理
- 使用 CSS 变量配合 Tailwind 实现主题切换

**5. 暗色模式支持**
```html
<!-- 在 HTML 根元素添加 dark 类切换暗色模式 -->
<html class="dark">
  <!-- 使用 dark: 前缀定义暗色模式样式 -->
  <div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
    内容
  </div>
</html>
```

**6. 自定义工具类**
```css
/* 在 CSS 文件中定义自定义工具类 */
@layer utilities {
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
}
```

## 错误处理

### 前端错误处理策略

**1. 网络错误处理**
- 显示友好的错误提示信息
- 提供重试机制
- 离线状态检测和提示

**2. 数据验证错误**
- 表单字段实时验证
- 错误信息精确定位到具体字段
- 阻止无效数据提交

**3. 权限错误处理**
- 权限不足时显示明确提示
- 自动隐藏无权限功能
- 引导用户联系管理员

**4. 系统异常处理**
- 全局异常捕获
- 错误日志记录
- 优雅降级处理

### 用户体验优化

**1. 加载状态**
- 数据加载时显示加载动画（使用 Tailwind `animate-spin` 类）
- 长时间操作显示进度条（使用 Tailwind 进度条样式）
- 防止重复提交（使用 `disabled` 状态和 `opacity-50 cursor-not-allowed` 类）

**2. 操作反馈**
- 成功操作显示确认提示
- 危险操作二次确认
- 操作结果实时反馈

## 测试策略

### 单元测试

**测试范围：**
- JavaScript 函数逻辑测试
- 数据处理和验证函数
- 工具类函数测试

**测试工具：**
- Jest 测试框架
- DOM 测试工具

### 集成测试

**测试范围：**
- 页面组件交互测试
- 数据流测试
- 用户操作流程测试

**测试场景：**
- 用户登录流程
- 企业管理操作流程
- 权限控制验证

### 用户界面测试

**测试范围：**
- 响应式布局测试（使用 Tailwind 断点在不同设备上测试）
- 浏览器兼容性测试（Tailwind CSS 3.x 支持现代浏览器）
- 用户体验测试
- 暗色模式切换测试

**测试工具：**
- 手动测试
- 自动化UI测试工具
- Tailwind CSS 开发工具（浏览器扩展）

### 性能测试

**测试指标：**
- 页面加载时间 < 3秒
- 数据渲染时间 < 1秒
- 用户操作响应时间 < 500ms

**测试方法：**
- 浏览器开发者工具
- 性能监控工具
- 压力测试
- Tailwind CSS 构建分析（检查生成的 CSS 文件大小）

## 页面实现示例

### 企业管理页面完整布局

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>企业管理 - 企业后台管理系统</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-100">
  <!-- 整体布局容器 -->
  <div class="flex h-screen">
    <!-- 左侧导航栏 -->
    <aside class="w-64 bg-white border-r border-gray-200 flex-shrink-0 overflow-y-auto">
      <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">导航菜单</h2>
        <nav class="space-y-1">
          <a href="#" class="flex items-center px-4 py-3 text-sm font-medium text-gray-900 bg-blue-50 border-r-2 border-blue-600 rounded-md">
            <svg class="mr-3 h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            企业管理
          </a>
          <a href="#" class="flex items-center px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors">
            <svg class="mr-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            项目管理
          </a>
        </nav>
      </div>
    </aside>

    <!-- 主内容区域 -->
    <div class="flex-1 flex flex-col overflow-hidden">
      <!-- 顶部导航栏 -->
      <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 flex-shrink-0">
        <div class="flex items-center space-x-4">
          <h1 class="text-xl font-semibold text-gray-900">企业管理</h1>
        </div>
        <div class="flex items-center space-x-4">
          <div class="flex items-center space-x-2">
            <div class="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
              <span class="text-white text-sm font-medium">管</span>
            </div>
            <span class="text-sm text-gray-700">管理员</span>
          </div>
          <button class="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors">
            退出登录
          </button>
        </div>
      </header>

      <!-- 主内容 -->
      <main class="flex-1 overflow-y-auto p-6">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <!-- 左侧：企业树形结构 -->
          <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">企业列表</h3>
              <div class="space-y-1">
                <div class="group">
                  <button class="w-full flex items-center justify-between px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                    <div class="flex items-center space-x-2">
                      <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span class="font-medium">科技发展有限公司</span>
                    </div>
                    <span class="text-xs text-gray-500">2个项目</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- 右侧：企业详情信息 -->
          <div class="lg:col-span-2">
            <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div class="flex items-center justify-between mb-6">
                <h3 class="text-lg font-semibold text-gray-900">企业详情</h3>
                <button class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                  编辑
                </button>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">企业名称</label>
                  <p class="text-sm text-gray-900">科技发展有限公司</p>
                </div>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-1">创建时间</label>
                  <p class="text-sm text-gray-900">2024-01-15</p>
                </div>
                <div class="md:col-span-2">
                  <label class="block text-sm font-medium text-gray-700 mb-1">企业描述</label>
                  <p class="text-sm text-gray-900">专业从事软件开发和技术服务</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 底部：资源使用情况图表 -->
        <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-gray-900">资源使用情况</h3>
            <div class="flex items-center space-x-4 text-sm">
              <div class="flex items-center">
                <div class="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span class="text-gray-600">存储</span>
              </div>
              <div class="flex items-center">
                <div class="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span class="text-gray-600">AI</span>
              </div>
            </div>
          </div>
          <div class="h-64">
            <canvas id="resourceChart"></canvas>
          </div>
        </div>
      </main>
    </div>
  </div>

  <script>
    // Chart.js 初始化代码
    const ctx = document.getElementById('resourceChart');
    // ... 图表配置代码
  </script>
</body>
</html>
```

### 项目管理页面布局要点

- 使用 `grid grid-cols-1 lg:grid-cols-12 gap-6` 实现响应式网格布局
- 搜索栏使用 `flex flex-col sm:flex-row gap-4` 实现移动端堆叠、桌面端横向排列
- 表格使用 `overflow-x-auto` 实现水平滚动，适配移动端
- 侧边栏详情面板使用 `fixed` 定位和 `transform translate-x-full` 实现滑入滑出动画

### 用户管理页面布局要点

- 表单模态框使用 `fixed inset-0 z-50` 实现全屏遮罩
- 表单验证错误使用 `text-red-600` 和 `border-red-300` 显示错误状态
- 表格操作按钮使用 `space-x-2` 控制间距，`hover:text-blue-900` 实现悬停效果

### 角色管理页面布局要点

- 使用 `flex flex-col lg:flex-row` 实现左右分栏布局
- 权限树使用 `space-y-1` 和 `ml-4` 实现层级缩进
- 复选框使用 Tailwind Forms 插件样式，保持一致性