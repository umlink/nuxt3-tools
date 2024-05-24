export default defineEventHandler(async (event) => {
  await sendRedirect(event, '/home', 302)
})