// 1. 手动切换
// export const BASE_URL = 'http://codercba.com:9002'
// export const BASE_URL = 'http://codercba.com:9001'

const TIME_OUT = 10000

// 2. 依赖当前环境
let BASE_URL = ''
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://codercba.com:9002'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://codercba.com:9001'
}

// 3. 从定义的环境变量的配置文件中, 加载变量
// console.log(process.env.NODE_ENV)
// if (process.env.NODE_ENV === 'development') {
//   BASE_URL = process.env.REACT_APP_BASE_URL!
// } else if (process.env.NODE_ENV === 'production') {
//   BASE_URL = process.env.REACT_APP_BASE_URL!
// }

export { BASE_URL, TIME_OUT }
