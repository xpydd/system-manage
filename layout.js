// layout.js

function renderLayout(activePageTitle) {
  // 插入侧边栏
  const sidebarHTML = `
  <aside class="w-64 bg-white border-r border-gray-200 flex-shrink-0 flex flex-col transition-all duration-300">
    <div class="h-16 flex items-center px-6 border-b border-gray-200">
      <div class="flex items-center space-x-2 text-blue-600">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
        <span class="text-lg font-bold">AdminSystem</span>
      </div>
    </div>
    
    <nav class="flex-1 overflow-y-auto p-4 space-y-1">
      ${renderNavItem('index.html', '企业管理', 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', activePageTitle === '企业管理')}
      ${renderNavItem('project.html', '项目管理', 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', activePageTitle === '项目管理')}
      ${renderNavItem('user.html', '用户管理', 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', activePageTitle === '用户管理')}
      ${renderNavItem('role.html', '角色管理', 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', activePageTitle === '角色管理')}
      
      <div class="px-4 mt-6 mb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">系统管理</div>
      ${renderNavItem('dictionary.html', '字典管理', 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253', activePageTitle === '字典管理')}
      ${renderNavItem('server.html', '服务器管理', 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', activePageTitle === '服务器管理')}
      ${renderNavItem('protocol.html', '协议管理', 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', activePageTitle === '协议管理')}
      ${renderNavItem('notification.html', '通知管理', 'M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9', activePageTitle === '通知管理')}
    </nav>
  </aside>
  `;

  // 插入顶部 Header
  const headerHTML = `
    <header class="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-6 shadow-sm flex-shrink-0">
      <div class="flex items-center">
        <button class="text-gray-500 focus:outline-none lg:hidden mr-4">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <h1 class="text-xl font-semibold text-gray-800">${activePageTitle}</h1>
      </div>
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
          <div class="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold">A</div>
          <div class="hidden md:block text-sm">
            <p class="font-medium text-gray-700">系统管理员</p>
            <p class="text-xs text-gray-500">超级管理员</p>
          </div>
        </div>
        <button class="text-gray-500 hover:text-red-600 transition-colors">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        </button>
      </div>
    </header>
  `;

  // 找到 app 容器
  const appContainer = document.getElementById('app');
  if (appContainer) {
    // 假设 HTML 结构是 <div id="app" class="flex h-screen ...">
    // 在最前面插入 sidebar
    appContainer.insertAdjacentHTML('afterbegin', sidebarHTML);
    
    // 找到 main-content 容器
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.insertAdjacentHTML('afterbegin', headerHTML);
    }
  }
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

