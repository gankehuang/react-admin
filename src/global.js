
const Domain = {
  'api':'http://10.121.14.103:8013',
  //'api':'/api',
  'resource':'http://10.121.14.103:8013/File',
}
const API = {
  'UserManageService': {
      'Login':  Domain.api + '/UserManageService.asmx/Login',     //登录
      'LogOff': Domain.api + '/UserManageService.asmx/LogOff',      //退出登录
  },
  'UploadManageService': {
      'UploadExcel': Domain.api + '/UploadManageService.asmx/UploadExcel',
      'UploadAll': Domain.api + '/UploadManageService.asmx/UploadAll'
  },
  'DataManageService': {
      'GetAllData': Domain.api + '/DataManageService.asmx/GetAllData',  //获取数据
      'AddorEditData': Domain.api + '/DataManageService.asmx/AddorEditData',  //添加编辑
      'DelData': Domain.api + '/DataManageService.asmx/DelData',  //删除
      'GetDataInfoByID': Domain.api + '/DataManageService.asmx/GetDataInfoByID',  //获取详情
  },
}

Storage.prototype.setExpire=(key, value, expire) =>{
    let obj={
        data:value,
        time:Date.now(),
        expire:expire
    };
    localStorage.setItem(key,JSON.stringify(obj));
}
Storage.prototype.getExpire= key =>{
    let val =localStorage.getItem(key);
    if(!val){
        return val;
    }
    val =JSON.parse(val);
    if(Date.now()-val.time>val.expire){
        localStorage.removeItem(key);
        return null;
    }
    return val.data;
}


export default {
  'Domain': Domain,
  'API': API
}
