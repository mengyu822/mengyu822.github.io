//首页模块接口统一管理
import request from '@/utils/request'

//通过枚举管理首页模块的接口地址

enum API {
  //获取已有的景点数据的接口
  SCENICS_URL = '/items'
}
// 获取景点的数据
export  const reqScenics = () => request.get(API.SCENICS_URL)

