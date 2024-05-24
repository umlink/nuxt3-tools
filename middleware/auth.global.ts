export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/auth') {
    console.log('中间件运行。。')
    return navigateTo('/home')
  }
})