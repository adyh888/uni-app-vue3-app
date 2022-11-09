import axios from 'axios'
import { Ac, Dashboard, Dc, Gc, Lc, Mc, Tc, Uc } from '@mew/request'

let BaseURL = 'http://172.16.10.143:50200'
const timeout = 50000

// if (process.env.NODE_ENV === 'development') {
//   BaseURL = 'http://172.16.10.207:50200'
// } else if (process.env.NODE_ENV === 'production') {
//   BaseURL = 'http://114.116.41.190:50200'
// } else {
//   BaseURL = 'http://172.16.10.95:50200'
// }



const service = axios.create({
  baseURL: BaseURL,
  timeout: timeout
})



export const ac = Ac(service)
export const dc = Dc(service)
export const gc = Gc(service)
export const lc = Lc(service)
export const mc = Mc(service)
export const tc = Tc(service)
export const uc = Uc(service)
export const dashboard = Dashboard(service, true)
