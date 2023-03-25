import Mock from 'mockjs'

Mock.mock('/mock/getUserInfo', 'post', () => {
  return {
    code: 200,
    data: {
      name: 'admin',
      role: 'admin',
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      description: '拥有所有权限',
      permissions: [
        {
          name: 'Home',
          path: '/home',
          permission: 'Home',
        },
        {
          name: 'SystemManage',
          path: '/systemManege',
          permission: 'SystemManage',
          children: [
            {
              name: 'AccountManage',
              path: '/systemManege/accountManage',
              permission: 'AccountManage',
            },
            {
              name: 'RoleManage',
              path: '/systemManege/roleManage',
              permission: 'RoleManage',
            },
          ],
        },
      ],
    },
  }
})
