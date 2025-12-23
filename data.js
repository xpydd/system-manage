// 模拟数据

const mockData = {
  // 组织节点（支持多层级）
  organizations: [
    {
      id: 1,
      name: "科技发展有限公司",
      type: "企业", // 企业、部门、子部门等
      parentId: null, // 父节点ID，null表示根节点
      adminId: 2, // 节点管理员用户ID
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
      type: "企业",
      parentId: null,
      adminId: null, // 待设置管理员
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
    },
    // 第一层：华东区域公司
    {
      id: 10,
      name: "华东区域公司",
      type: "分公司",
      parentId: 1,
      adminId: 10,
      description: "负责华东地区（上海、江苏、浙江、安徽、福建、江西、山东）业务",
      contactInfo: "联系人：王华东，电话：138-0000-0010",
      quota: {
        storage: { total: 20480, used: 12800, unit: "GB" },
        baseLicense: { total: 100, used: 68 },
        premiumLicense: { total: 20, used: 14 },
        aiTokens: { total: 2000000, used: 1280000 },
        liveStream: { total: 10000, used: 4200, unit: "分钟" }
      },
      createdAt: "2023-06-01",
      projects: [
        {
          id: 1010,
          name: "上海中心大厦项目",
          description: "超高层建筑建设项目",
          projectAdmin: "李华东",
          allocatedQuota: 8000,
          storageUsed: 5200,
          aiUsed: 3500,
          status: "进行中"
        }
      ]
    },
    // 第二层：上海分公司（隶属于华东区域公司）
    {
      id: 11,
      name: "上海分公司",
      type: "部门",
      parentId: 10,
      adminId: 11,
      description: "负责上海地区业务",
      contactInfo: "联系人：张上海，电话：138-0000-0011",
      quota: {
        storage: { total: 10240, used: 6400, unit: "GB" },
        baseLicense: { total: 50, used: 34 },
        premiumLicense: { total: 10, used: 7 },
        aiTokens: { total: 1000000, used: 640000 },
        liveStream: { total: 5000, used: 2100, unit: "分钟" }
      },
      createdAt: "2023-07-15",
      projects: []
    },
    // 第三层：工程管理部（隶属于上海分公司）
    {
      id: 12,
      name: "工程管理部",
      type: "部门",
      parentId: 11,
      adminId: 12,
      description: "负责工程项目管理、进度控制、质量监督",
      contactInfo: "联系人：赵工程，电话：138-0000-0012",
      quota: {
        storage: { total: 5120, used: 3200, unit: "GB" },
        baseLicense: { total: 25, used: 17 },
        premiumLicense: { total: 5, used: 3 },
        aiTokens: { total: 500000, used: 320000 },
        liveStream: { total: 2500, used: 1050, unit: "分钟" }
      },
      createdAt: "2023-08-01",
      projects: []
    },
    // 第一层：华南区域公司
    {
      id: 20,
      name: "华南区域公司",
      type: "分公司",
      parentId: 1,
      adminId: 20,
      description: "负责华南地区（广东、广西、海南）业务",
      contactInfo: "联系人：孙华南，电话：138-0000-0020",
      quota: {
        storage: { total: 15360, used: 9600, unit: "GB" },
        baseLicense: { total: 75, used: 50 },
        premiumLicense: { total: 15, used: 10 },
        aiTokens: { total: 1500000, used: 960000 },
        liveStream: { total: 7500, used: 3150, unit: "分钟" }
      },
      createdAt: "2023-05-20",
      projects: [
        {
          id: 1020,
          name: "深圳湾超级总部基地项目",
          description: "大型综合体建设项目",
          projectAdmin: "周华南",
          allocatedQuota: 6000,
          storageUsed: 3800,
          aiUsed: 2500,
          status: "进行中"
        }
      ]
    },
    // 第二层：深圳分公司（隶属于华南区域公司）
    {
      id: 21,
      name: "深圳分公司",
      type: "部门",
      parentId: 20,
      adminId: 21,
      description: "负责深圳地区业务",
      contactInfo: "联系人：吴深圳，电话：138-0000-0021",
      quota: {
        storage: { total: 7680, used: 4800, unit: "GB" },
        baseLicense: { total: 38, used: 25 },
        premiumLicense: { total: 8, used: 5 },
        aiTokens: { total: 750000, used: 480000 },
        liveStream: { total: 3750, used: 1575, unit: "分钟" }
      },
      createdAt: "2023-06-10",
      projects: []
    },
    // 第三层：技术质量部（隶属于深圳分公司）
    {
      id: 22,
      name: "技术质量部",
      type: "部门",
      parentId: 21,
      adminId: 22,
      description: "负责技术方案制定、质量检测、标准规范执行",
      contactInfo: "联系人：郑技术，电话：138-0000-0022",
      quota: {
        storage: { total: 3840, used: 2400, unit: "GB" },
        baseLicense: { total: 19, used: 13 },
        premiumLicense: { total: 4, used: 2 },
        aiTokens: { total: 375000, used: 240000 },
        liveStream: { total: 1875, used: 788, unit: "分钟" }
      },
      createdAt: "2023-07-01",
      projects: []
    },
    // 第一层：基础设施事业部
    {
      id: 30,
      name: "基础设施事业部",
      type: "分公司",
      parentId: 1,
      adminId: 30,
      description: "负责基础设施、交通、水利等大型工程建设",
      contactInfo: "联系人：钱基础，电话：138-0000-0030",
      quota: {
        storage: { total: 25600, used: 16000, unit: "GB" },
        baseLicense: { total: 125, used: 85 },
        premiumLicense: { total: 25, used: 17 },
        aiTokens: { total: 2500000, used: 1600000 },
        liveStream: { total: 12500, used: 5250, unit: "分钟" }
      },
      createdAt: "2023-04-15",
      projects: [
        {
          id: 1030,
          name: "京沪高铁扩建项目",
          description: "高速铁路基础设施建设项目",
          projectAdmin: "周基础",
          allocatedQuota: 12000,
          storageUsed: 7500,
          aiUsed: 5000,
          status: "进行中"
        },
        {
          id: 1031,
          name: "长江大桥维修加固项目",
          description: "大型桥梁维修加固工程",
          projectAdmin: "吴基础",
          allocatedQuota: 8000,
          storageUsed: 5000,
          aiUsed: 3300,
          status: "进行中"
        }
      ]
    },
    // 第二层：交通工程分公司（隶属于基础设施事业部）
    {
      id: 31,
      name: "交通工程分公司",
      type: "部门",
      parentId: 30,
      adminId: 31,
      description: "负责交通基础设施工程建设",
      contactInfo: "联系人：李交通，电话：138-0000-0031",
      quota: {
        storage: { total: 12800, used: 8000, unit: "GB" },
        baseLicense: { total: 63, used: 43 },
        premiumLicense: { total: 13, used: 9 },
        aiTokens: { total: 1250000, used: 800000 },
        liveStream: { total: 6250, used: 2625, unit: "分钟" }
      },
      createdAt: "2023-05-01",
      projects: []
    },
    // 第三层：安全环保部（隶属于交通工程分公司）
    {
      id: 32,
      name: "安全环保部",
      type: "部门",
      parentId: 31,
      adminId: 32,
      description: "负责安全生产管理、环境保护、职业健康",
      contactInfo: "联系人：王安全，电话：138-0000-0032",
      quota: {
        storage: { total: 6400, used: 4000, unit: "GB" },
        baseLicense: { total: 32, used: 22 },
        premiumLicense: { total: 6, used: 4 },
        aiTokens: { total: 625000, used: 400000 },
        liveStream: { total: 3125, used: 1313, unit: "分钟" }
      },
      createdAt: "2023-05-20",
      projects: []
    }
  ],
  
  // 为了向后兼容，保留enterprises作为organizations的别名
  get enterprises() {
    return this.organizations;
  },
  
  // 获取树形结构的企业数据（用于企业切换功能）
  get enterprisesTree() {
    // 构建树形结构，包含children字段
    const buildTree = (items) => {
      const map = new Map();
      const result = [];
      
      // 首先创建所有节点的副本
      items.forEach(item => {
        map.set(item.id, { ...item, children: [] });
      });
      
      // 构建树形结构
      map.forEach(item => {
        if (item.parentId === null || item.parentId === undefined) {
          // 根节点
          result.push(item);
        } else {
          // 子节点
          const parent = map.get(item.parentId);
          if (parent) {
            parent.children.push(item);
          }
        }
      });
      
      return result;
    };
    
    return buildTree(this.organizations);
  },

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
      role: "企业平台主管",
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
      role: "项目平台主管",
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
    },
    // 第一层组织管理员（区域公司/事业部）
    {
      id: 10,
      username: "13800000010",
      fullName: "王华东",
      email: "wanghd@tech.com",
      phone: "13800000010",
      role: "企业平台主管",
      enterprise: "华东区域公司",
      organizationId: 10,
      project: "-",
      status: "激活",
      createdAt: "2023-06-01"
    },
    {
      id: 20,
      username: "13800000020",
      fullName: "孙华南",
      email: "sunhn@tech.com",
      phone: "13800000020",
      role: "企业平台主管",
      enterprise: "华南区域公司",
      organizationId: 20,
      project: "-",
      status: "激活",
      createdAt: "2023-05-20"
    },
    {
      id: 30,
      username: "13800000030",
      fullName: "钱基础",
      email: "qianjc@tech.com",
      phone: "13800000030",
      role: "企业平台主管",
      enterprise: "基础设施事业部",
      organizationId: 30,
      project: "-",
      status: "激活",
      createdAt: "2023-04-15"
    },
    // 第二层组织管理员（分公司）
    {
      id: 11,
      username: "13800000011",
      fullName: "张上海",
      email: "zhangsh@tech.com",
      phone: "13800000011",
      role: "企业平台主管",
      enterprise: "上海分公司",
      organizationId: 11,
      project: "-",
      status: "激活",
      createdAt: "2023-07-15"
    },
    {
      id: 21,
      username: "13800000021",
      fullName: "吴深圳",
      email: "wusz@tech.com",
      phone: "13800000021",
      role: "企业平台主管",
      enterprise: "深圳分公司",
      organizationId: 21,
      project: "-",
      status: "激活",
      createdAt: "2023-06-10"
    },
    {
      id: 31,
      username: "13800000031",
      fullName: "李交通",
      email: "lijt@tech.com",
      phone: "13800000031",
      role: "企业平台主管",
      enterprise: "交通工程分公司",
      organizationId: 31,
      project: "-",
      status: "激活",
      createdAt: "2023-05-01"
    },
    // 第三层组织管理员（部门）
    {
      id: 12,
      username: "13800000012",
      fullName: "赵工程",
      email: "zhaogc@tech.com",
      phone: "13800000012",
      role: "企业平台主管",
      enterprise: "工程管理部",
      organizationId: 12,
      project: "-",
      status: "激活",
      createdAt: "2023-08-01"
    },
    {
      id: 22,
      username: "13800000022",
      fullName: "郑技术",
      email: "zhengjs@tech.com",
      phone: "13800000022",
      role: "企业平台主管",
      enterprise: "技术质量部",
      organizationId: 22,
      project: "-",
      status: "激活",
      createdAt: "2023-07-01"
    },
    {
      id: 32,
      username: "13800000032",
      fullName: "王安全",
      email: "wangaq@tech.com",
      phone: "13800000032",
      role: "企业平台主管",
      enterprise: "安全环保部",
      organizationId: 32,
      project: "-",
      status: "激活",
      createdAt: "2023-05-20"
    },
    // 项目平台主管
    {
      id: 13,
      username: "13800000013",
      fullName: "李华东",
      email: "lihd@tech.com",
      phone: "13800000013",
      role: "项目平台主管",
      enterprise: "华东区域公司",
      project: "上海中心大厦项目",
      status: "激活",
      createdAt: "2023-06-15"
    },
    {
      id: 23,
      username: "13800000023",
      fullName: "周华南",
      email: "zhouhn@tech.com",
      phone: "13800000023",
      role: "项目平台主管",
      enterprise: "华南区域公司",
      project: "深圳湾超级总部基地项目",
      status: "激活",
      createdAt: "2023-05-25"
    },
    {
      id: 33,
      username: "13800000033",
      fullName: "周基础",
      email: "zhoujc@tech.com",
      phone: "13800000033",
      role: "项目平台主管",
      enterprise: "基础设施事业部",
      project: "京沪高铁扩建项目",
      status: "激活",
      createdAt: "2023-04-20"
    },
    {
      id: 34,
      username: "13800000034",
      fullName: "吴基础",
      email: "wujc@tech.com",
      phone: "13800000034",
      role: "项目平台主管",
      enterprise: "基础设施事业部",
      project: "长江大桥维修加固项目",
      status: "激活",
      createdAt: "2023-05-10"
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
      name: "企业平台主管",
      level: "企业级",
      description: "管理本企业资源和项目",
      permissions: [
        "企业管理-查看", "项目管理-查看", "项目管理-新增", "项目管理-编辑", "项目管理-删除",
        "用户管理-查看", "用户管理-新增", "用户管理-编辑"
      ]
    },
    {
      id: 3,
      name: "项目平台主管",
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

