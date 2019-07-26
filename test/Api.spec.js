//../pages/admin/index
import {created} from '../pages/admin/index';
import * as axios from 'axios';
// import testFunc from './request';

const testFunc = async url => {
  const res = await axios.get(url)
  console.log(res)
  return res
}


describe('posts/all', () => {
  it('axios return mock value', async () => {
    let mockError = false
    jest.mock('axios', () => ({
      get: (url, body) => {
        return new Promise(resolve => {
          if (mockError) throw Error('Mock error')

          resolve({url, body})
        })
      }
    }))
      const res = await testFunc('https://headlesscms-api.herokuapp.com/api/posts/all')
      expect(res)
  })
});

describe('Posts_id', () => {
  it('axios return mock value', async () => {
    let mockError = false
    jest.mock('axios', () => ({
      get: (url, body) => {
        return new Promise(resolve => {
          if (mockError) throw Error('Mock error')
          resolve({url, body})
        })
      }
    }))
    const res = await testFunc('https://headlesscms-api.herokuapp.com/api/posts/?id=2')
    expect(res)
  })
});


describe('Articlepost', () => {
  it('axios return mock value', async () => {
    let mockError = false
    jest.mock('axios', () => ({
      get: (url, body) => {
        return new Promise(resolve => {
          if (mockError) throw Error('Mock error')
          resolve({url, body})
        })
      }
    }))
    const params = {
      id: 2,
      title: "title",
      body: "本文",
      featured_image: "OGP画像",
      tag: "tag",
      seo_title: "seo_title",
      meta_description: "meta_description"
    }
    const res = await axios.post('https://headlesscms-api.herokuapp.com/api/posts/edit',params)
    expect(res)
  })
});

describe('Articledelete', () => {
  it('axios return mock value', async () => {
    let mockError = false
    jest.mock('axios', () => ({
      get: (url, body) => {
        return new Promise(resolve => {
          if (mockError) throw Error('Mock error')
          resolve({url, body})
        })
      }
    }))
    const params = {
      id: 2,
    }
    const res = await axios.post('https://headlesscms-api.herokuapp.com/api/posts/edit',params)
    expect(res)
  })
});
