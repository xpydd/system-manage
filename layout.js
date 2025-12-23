// layout.js

// 菜单配置数据（集中管理，修改这里所有页面自动同步）
const menuConfig = [
  { href: 'index.html', text: '企业管理', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { href: 'project.html', text: '项目管理', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
  { href: 'user.html', text: '用户管理', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
  { href: 'role.html', text: '角色管理', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { separator: true, text: '系统管理' },
  { href: 'dictionary.html', text: '字典管理', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
  { href: 'server.html', text: '服务器管理', icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' },
  { href: 'protocol.html', text: '协议管理', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { href: 'notification.html', text: '通知管理', icon: 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' }
];

// 渲染布局（同步方式，兼容现有代码）
function renderLayout(activePageTitle) {
  // 生成侧边栏HTML
  const sidebarHTML = `
  <aside class="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col transition-all duration-300">
    <div class="h-16 flex items-center px-6 border-b border-gray-200">
      <div class="flex items-center space-x-2 text-blue-600">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
        </svg>
        <span class="text-lg font-bold">安之眸企业管理系统</span>
      </div>
    </div>
    
    <nav class="flex-1 overflow-y-auto p-4 space-y-1">
      ${generateNavMenu(activePageTitle)}
    </nav>
  </aside>
  `;

  // 生成顶部栏HTML
  const headerHTML = `
    <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm flex-shrink-0">
      <div class="flex items-center">
        <button class="text-gray-500 focus:outline-none lg:hidden mr-4">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <h1 class="text-xl font-semibold text-gray-800">${activePageTitle}</h1>
      </div>
      <div class="flex items-center space-x-4">
        <!-- 企业切换下拉框 -->
        <div class="relative">
          <button onclick="toggleEnterpriseDropdown()" class="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            <span class="text-sm font-medium text-gray-800" id="current-enterprise-name">科技发展有限公司</span>
            <svg class="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <!-- 企业下拉菜单 -->
          <div id="enterprise-dropdown" class="hidden absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50 border border-gray-200 max-h-96 overflow-y-auto">
            <div class="py-2" id="enterprise-dropdown-content">
              <!-- 企业列表将通过JS动态填充 -->
            </div>
          </div>
        </div>
        
        <div class="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <div class="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">A</div>
          <div class="hidden md:block text-sm">
            <p class="font-medium text-gray-700">系统管理员</p>
            <p class="text-xs text-gray-500">超级管理员</p>
          </div>
        </div>
        <button class="text-gray-500 hover:text-red-600 transition-colors">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
        </button>
      </div>
    </header>
  `;

  // 插入到页面
  const appContainer = document.getElementById('app');
  const mainContent = document.getElementById('main-content');
  
  if (appContainer) {
    appContainer.insertAdjacentHTML('afterbegin', sidebarHTML);
  }
  
  if (mainContent) {
    mainContent.insertAdjacentHTML('afterbegin', headerHTML);
  }
}

// 生成导航菜单HTML（基于menuConfig）
function generateNavMenu(activePageTitle) {
  let navHTML = '';
  menuConfig.forEach(item => {
    if (item.separator) {
      navHTML += `<div class="px-4 mt-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">${item.text}</div>`;
    } else {
      const isActive = item.text === activePageTitle;
      navHTML += renderNavItem(item.href, item.text, item.icon, isActive);
    }
  });
  return navHTML;
}

function renderNavItem(href, text, iconPath, isActive) {
  const baseClasses = "flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors";
  const activeClasses = "text-blue-700 bg-blue-50 border-r-2 border-blue-600 rounded-l-md";
  const inactiveClasses = "text-gray-700 hover:bg-gray-100 hover:text-gray-900";
  const iconBaseClasses = "mr-3 h-5 w-5";
  const iconActiveClasses = "";
  const iconInactiveClasses = "text-gray-400 group-hover:text-gray-500";

  const itemClasses = `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
  const iconClasses = `${iconBaseClasses} ${isActive ? iconActiveClasses : iconInactiveClasses}`;

  return `
    <a href="${href}" class="${itemClasses}">
      <svg class="${iconClasses}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${iconPath}"></path>
      </svg>
      ${text}
    </a>
  `;
}

// 企业切换相关功能
let currentEnterprise = null;
let enterpriseList = [];

// 初始化企业数据
function initEnterpriseData() {
  // 从mockData获取企业数据（使用树形结构）
  if (typeof mockData !== 'undefined' && mockData.enterprisesTree) {
    enterpriseList = mockData.enterprisesTree;
    
    // 默认选择第一个企业
    if (enterpriseList.length > 0) {
      const savedEnterpriseId = localStorage.getItem('currentEnterpriseId');
      if (savedEnterpriseId) {
        currentEnterprise = findEnterpriseById(enterpriseList, parseInt(savedEnterpriseId));
      }
      if (!currentEnterprise) {
        currentEnterprise = enterpriseList[0];
      }
      updateCurrentEnterpriseName();
      renderEnterpriseDropdown();
    }
  }
}


// 根据ID查找企业
function findEnterpriseById(list, id) {
  for (let ent of list) {
    if (ent.id === id) return ent;
    if (ent.children && ent.children.length > 0) {
      const found = findEnterpriseById(ent.children, id);
      if (found) return found;
    }
  }
  return null;
}

// 更新当前企业名称显示
function updateCurrentEnterpriseName() {
  const nameEl = document.getElementById('current-enterprise-name');
  if (nameEl && currentEnterprise) {
    nameEl.textContent = currentEnterprise.name;
  }
}

// 切换企业下拉菜单显示/隐藏
function toggleEnterpriseDropdown() {
  const dropdown = document.getElementById('enterprise-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('hidden');
  }
}

// 渲染企业下拉列表
function renderEnterpriseDropdown() {
  const container = document.getElementById('enterprise-dropdown-content');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (enterpriseList.length === 0) {
    container.innerHTML = '<div class="px-4 py-3 text-sm text-gray-500 text-center">暂无可用企业</div>';
    return;
  }
  
  // 递归渲染企业树
  function renderEnterpriseItem(enterprise, level = 0) {
    const isActive = currentEnterprise && currentEnterprise.id === enterprise.id;
    const indent = level * 16; // 每级缩进16px
    
    const item = document.createElement('div');
    item.className = `px-4 py-2 hover:bg-gray-50 cursor-pointer transition-colors ${isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'}`;
    item.style.paddingLeft = `${16 + indent}px`;
    item.innerHTML = `
      <div class="flex items-center space-x-2">
        ${level > 0 ? '<svg class="h-3 w-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>' : ''}
        <span class="text-sm">${enterprise.name}</span>
        ${isActive ? '<svg class="h-4 w-4 ml-auto text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' : ''}
      </div>
    `;
    
    item.onclick = () => switchEnterprise(enterprise);
    container.appendChild(item);
    
    // 如果有子企业，递归渲染
    if (enterprise.children && enterprise.children.length > 0) {
      enterprise.children.forEach(child => renderEnterpriseItem(child, level + 1));
    }
  }
  
  enterpriseList.forEach(ent => renderEnterpriseItem(ent, 0));
}

// 切换到指定企业
function switchEnterprise(enterprise) {
  currentEnterprise = enterprise;
  localStorage.setItem('currentEnterpriseId', enterprise.id);
  updateCurrentEnterpriseName();
  toggleEnterpriseDropdown();
  
  // 触发企业切换事件，让各页面可以监听并刷新数据
  window.dispatchEvent(new CustomEvent('enterpriseChanged', { detail: enterprise }));
  
  // 提示用户
  showToast(`已切换至：${enterprise.name}`);
}

// 显示提示信息
function showToast(message) {
  // 移除已存在的toast
  const existingToast = document.getElementById('toast-notification');
  if (existingToast) {
    existingToast.remove();
  }
  
  const toast = document.createElement('div');
  toast.id = 'toast-notification';
  toast.className = 'fixed top-20 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center space-x-2 animate-fade-in';
  toast.innerHTML = `
    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <span>${message}</span>
  `;
  
  document.body.appendChild(toast);
  
  // 3秒后自动移除
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// 点击外部关闭下拉菜单
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById('enterprise-dropdown');
  const button = event.target.closest('[onclick="toggleEnterpriseDropdown()"]');
  
  if (dropdown && !dropdown.contains(event.target) && !button) {
    dropdown.classList.add('hidden');
  }
});

// 页面加载时初始化企业数据
if (typeof mockData !== 'undefined') {
  window.addEventListener('DOMContentLoaded', function() {
    // 延迟执行，确保DOM完全加载
    setTimeout(initEnterpriseData, 100);
  });
}

