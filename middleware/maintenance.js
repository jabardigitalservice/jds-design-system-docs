export default function ({ app, route, redirect }) {
  if (
    parseInt(process.env.NUXT_ENV_IS_MAINTENANCE) === 1 &&
    route.path !== '/maintenance'
  ) {
    return redirect('/maintenance')
  }
}
