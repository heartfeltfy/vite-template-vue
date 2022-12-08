import axios from '@/utils/http'

export default class Data {
  static async getInfo (page: number, tab: string, limit: number): Promise<object> {
    return await axios.get('/topics', {
      params: {
        page,
        tab,
        limit
      }
    })
  }
}
