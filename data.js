// 模拟数据

const mockData = {
  enterprises: [
    {
      id: 1,
      name: "科技发展有限公司",
      description: "专业从事软件开发和技术服务",
      contactInfo: "联系人：张良，电话：138-0000-0001",
      // 配额详情
      quota: {
        storage: { total: 10240, used: 6500, unit: "GB" }, // 存储空间
        baseLicense: { total: 50, used: 32 }, // 基础版账号
        premiumLicense: { total: 10, used: 5 }, // 旗舰版账号
        aiTokens: { total: 1000000, used: 450000 }, // AI使用量
        liveStream: { total: 5000, used: 1200, unit: "分钟" } // 视频直播
      },
      createdAt: "2024-01-15",
      projects: [
        {
          id: 101,
          name: "智慧城市项目",
          description: "城市管理系统开发",
          projectAdmin: "李博迪",
          allocatedQuota: 3000,
          storageUsed: 1200,
          aiUsed: 800,
          status: "进行中",
          subcontractors: [
            {
              id: 1001,
              name: "前端开发团队",
              contactInfo: "负责人：王工程师",
              adminName: "王工程师",
              adminPhone: "13800001001",
              phone: "13800001001",
              users: ["王小明", "李小红", "张小强"]
            }
          ]
        },
        {
          id: 102,
          name: "电商平台项目",
          description: "在线购物平台开发",
          projectAdmin: "陈明浩",
          allocatedQuota: 3500,
          storageUsed: 2100,
          aiUsed: 1400,
          status: "已暂停"
        }
      ]
    },
    {
      id: 2,
      name: "建筑工程集团",
      description: "大型建筑工程承包商",
      contactInfo: "联系人：刘学，电话：138-0000-0002",
      quota: {
        storage: { total: 20480, used: 8200, unit: "GB" },
        baseLicense: { total: 100, used: 60 },
        premiumLicense: { total: 20, used: 15 },
        aiTokens: { total: 2000000, used: 800000 },
        liveStream: { total: 10000, used: 3000, unit: "分钟" }
      },
      createdAt: "2024-02-20",
      projects: [
        {
          id: 201,
          name: "CBD建设工程",
          description: "中央商务区建设",
          projectAdmin: "赵奔",
          version: "旗舰版",
          allocatedQuota: 8000,
          storageUsed: 4000,
          aiUsed: 1000,
          status: "进行中"
        }
      ]
    }
  ],

  users: [
    {
      id: 1,
      username: "13800000000",
      fullName: "系统管理员",
      email: "admin@system.com",
      phone: "13800000000",
      role: "超级管理员",
      enterprise: "系统",
      project: "-",
      status: "激活",
      createdAt: "2024-01-01"
    },
    {
      id: 2,
      username: "13800000001",
      fullName: "张良",
      email: "zhang@tech.com",
      phone: "13800000001",
      role: "企业管理员",
      enterprise: "科技发展有限公司",
      project: "-",
      status: "激活",
      createdAt: "2024-01-15"
    },
    {
      id: 3,
      username: "13800000003",
      fullName: "李博迪",
      email: "li@tech.com",
      phone: "13800000003",
      role: "项目管理员",
      enterprise: "科技发展有限公司",
      project: "智慧城市项目",
      status: "激活",
      createdAt: "2024-01-20"
    },
    {
      id: 4,
      username: "13800000004",
      fullName: "测试用户",
      email: "test@tech.com",
      phone: "13800000004",
      role: "普通用户",
      enterprise: "科技发展有限公司",
      project: "电商平台项目",
      status: "禁用",
      createdAt: "2024-03-10"
    }
  ],

  roles: [
    {
      id: 1,
      name: "超级管理员",
      level: "系统级",
      description: "拥有系统所有权限",
      permissions: [
        "企业管理-查看", "企业管理-新增", "企业管理-编辑", "企业管理-删除",
        "项目管理-查看", "项目管理-新增", "项目管理-编辑", "项目管理-删除",
        "用户管理-查看", "用户管理-新增", "用户管理-编辑", "用户管理-删除",
        "角色管理-查看", "角色管理-新增", "角色管理-编辑", "角色管理-删除"
      ]
    },
    {
      id: 2,
      name: "企业管理员",
      level: "企业级",
      description: "管理本企业资源和项目",
      permissions: [
        "企业管理-查看", "项目管理-查看", "项目管理-新增", "项目管理-编辑", "项目管理-删除",
        "用户管理-查看", "用户管理-新增", "用户管理-编辑"
      ]
    },
    {
      id: 3,
      name: "项目管理员",
      level: "项目级",
      description: "管理指定项目资源",
      permissions: [
        "项目管理-查看", "项目管理-编辑",
        "用户管理-查看", "用户管理-新增"
      ]
    }
  ],

  resourceStats: {
    enterpriseId: 1,
    enterpriseName: "科技发展有限公司",
    totalQuota: 10000,
    usedQuota: 6500,
    availableQuota: 3500,
    projects: [
      {
        projectId: 101,
        projectName: "智慧城市项目",
        allocatedQuota: 3000,
        storageQuota: 2000,
        storageUsed: 1200,
        aiQuota: 1000,
        aiUsed: 800,
        usageHistory: [
          {date: "2024-01", storage: 800, ai: 500},
          {date: "2024-02", storage: 1000, ai: 650},
          {date: "2024-03", storage: 1200, ai: 800}
        ]
      }
    ]
  }
};

