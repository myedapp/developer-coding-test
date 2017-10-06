// React 16 issue 
// https://github.com/facebook/jest/issues/4545
global.requestAnimationFrame = (cb) => {
  setTimeout(cb, 0)
}

const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() })