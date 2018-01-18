import Home from '../components/Home'

let base = {
    path: '/',
    redirect: '/home',
  }
 let home = {
 	path : '/home',
 	component: Home,
 	name: 'Home'
 }

const routes = [
	base,
	home
 ]

export default routes