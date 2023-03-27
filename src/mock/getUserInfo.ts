import Mock from 'mockjs'

let adminPermission = {
  name: 'admin',
  role: 'admin',
  avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
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
          name: 'RoleManage',
          path: '/systemManege/roleManage',
          permission: 'RoleManage',
          actionEntitySet: [
            // {
            //   action: 'edit',
            //   describe: '编辑',
            // },
            // {
            //   action: 'permission',
            //   describe: '权限',
            // },
            {
              action: 'delete',
              describe: '删除',
            },
          ],
        },
        {
          name: 'AccountManage',
          path: '/systemManege/accountManage',
          permission: 'AccountManage',
          actionEntitySet: [
            {
              action: 'edit',
              describe: '编辑',
            },
            {
              action: 'delete',
              describe: '删除',
            },
          ],
        },
      ],
    },
  ],
}

// let guestPermission = {
//   name: 'admin',
//   role: 'admin',
//   avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//   description: '拥有所有权限',
//   permissions: [
//     {
//       name: 'Home',
//       path: '/home',
//       permission: 'Home',
//     },
//     {
//       name: 'SystemManage',
//       path: '/systemManege',
//       permission: 'SystemManage',
//       children: [
//         {
//           name: 'AccountManage',
//           path: '/systemManege/accountManage',
//           permission: 'AccountManage',
//         },
//         {
//           name: 'RoleManage',
//           path: '/systemManege/roleManage',
//           permission: 'RoleManage',
//         },
//       ],
//     },
//   ],
// }

Mock.mock('/mock/getUserInfo', 'post', () => {
  return {
    code: 200,
    data: adminPermission,
  }
})
