import Mock from 'mockjs'

Mock.mock('/mock/getUserInfo', 'post', () => {
  return {
    code: 200,
    data: [
      {
        path: '/index',
        name: 'Index',
      },
      {
        path: '/home',
        name: 'Home',
      },
    ],
  }
})
