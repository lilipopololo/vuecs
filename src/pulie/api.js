import _ from 'lodash'
import axios from 'axios'
import ApiList from './api.json'
import Vue from 'vue'
import { MessageBox } from 'element-ui'
Vue.component(MessageBox.name, MessageBox)

let CancelToken = axios.CancelToken
let cancel

const _parseJSON = str => {
  if (typeof str === 'object') {
    return str
  }
  try {
    return JSON.parse(str)
  } catch (ex) {}
  return (new Function('', 'return ' + str))()
}

const getUrl = key => {
  // if (typeof ApiList[m] === 'undefined' || !ApiList[m]) return ''
  if (typeof ApiList[key] === 'undefined' || ApiList[key] === '') {
    return ''
  }
  let url = ApiList[key]
  // console.log(url)
  return url
}

const post = (url, data) => {
  // let {appCode, thdUserId, accessToken} = getAppInfo()
  const sec = 1000
  let postData = {}
  let _data = _.assign({}, data)
  _.forEach(_data, (val, key) => {
    if (['timeout'].indexOf(key) === -1) {
      postData[key] = val
    }
  })

  let timeout = _data['timeout'] || 10 * sec

  return axios({
    method: 'post',
    url: url,
    data: postData,
    timeout: timeout,
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    CancelToken: new CancelToken(function executor (c) {
      cancel = c
    })
  }).then(function (resp) {
    if (resp.status >= 200 && resp.status < 300) {
      let respData = resp.data
      respData['code'] = ~~(respData['code'])
      respData['content'] = _parseJSON(respData['content'])
      if (respData['code'] === 998) {
        cancel && cancel()
        MessageBox.alert('会话过期，请重新登陆！', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            window.location.replace(getUrl('logout'))
            return Promise.resolve(respData)
          }
        })
      }
      return Promise.resolve(respData)
    }
    return Promise.reject(new Error(resp.status))
  }).catch(function (err) {
    MessageBox.alert('网络不可用，请稍后再试', '提示', {
      confirmButtonText: '确定',
      callback: action => {}
    })
    return Promise.reject(new Error(err))
  })
}

export default {
  getUrl,
  post,
  cancel: () => {
    cancel && cancel()
  }
}
