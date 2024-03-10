
export const saveSettingLocal = (_setting) => {
    localStorage.setItem("setting_job", _setting.job);
    localStorage.setItem("setting_experience", _setting.experience);
    localStorage.setItem("setting_questions",_setting.questions);
  }
  
  export const checkSettingLocal = () => {
    if(localStorage["setting_job"]&&localStorage["setting_experience"]&&localStorage["setting_questions"]){
      let seting = {
        job:localStorage["setting_job"],
        experience: localStorage["setting_experience"],
        questions: localStorage["setting_questions"]
    }
      return seting;
    }
    else{
      return false;
    }
  }
  
  export const deleteSetting = () => {
    localStorage.removeItem("setting_job")
    localStorage.removeItem("setting_experience")
    localStorage.removeItem("setting_questions")
  }