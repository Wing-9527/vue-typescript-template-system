import Mock from 'mockjs'

Mock.mock('/mock/login', 'post', () => {
  return {
    data: 'token123',
  }
})
