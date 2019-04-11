import { configure } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import "babel-polyfill"
global.fetch = require("jest-fetch-mock")
configure({ adapter: new Adapter() })
