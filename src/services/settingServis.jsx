export const SETTING = "botjob_setting";

export const saveSettingLocal = (_setting) => {
  console.log("_setting",_setting.job);
    localStorage.setItem(SETTING, [_setting.job,_setting.experience,_setting.questions]);
  }
  
  export const checkSettingLocal = () => {
    if(localStorage[SETTING]){
      return localStorage[SETTING];
    }
    else{
      return false;
    }
  }
  
  export const deleteSetting = () => {
    localStorage.removeItem(SETTING)
  }