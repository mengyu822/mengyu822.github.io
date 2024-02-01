//首页模块接口统一管理
import request from '@/utils/request'

//通过枚举管理首页模块的接口地址

enum API {
  //获取已有的景点数据的接口
  SCENICS_URL = '/scenics?',
  SCENICS_LEVELANDREGION = '/getScenicsLevelAndRegion'
}
// 获取景点的数据
// export const reqScenics = (page: number, per_page: number) =>
//   request.get(API.SCENICS_URL + `${page}/${per_page}`)

// export const reqScenics = (page: number, per_page: number,level: string) => 
//   request.get(API.SCENICS_URL + `page=${page}&per_page=${per_page}&level=${level}`);
export const reqScenics = (page: number, per_page: number, level?: string, region?:string,name?:string) => {
  let url = API.SCENICS_URL + `page=${page}&per_page=${per_page}`;
  if (level !== '') {
    url += `&level=${level}`;
  }
  if (region !==''){
    url+=`&region=${region}`;
  }
  if (name !==''){
    url+=`&name=${name}`;
  }
  return request.get(url);
};

export const reqScenicsLevelAndRegion = () => request.get(API.SCENICS_LEVELANDREGION)



