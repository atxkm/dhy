var translate = {
  '请输入用户名': 'Please enter a user name',
  '请输入密码': 'Please enter your password',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '会议管理系统': 'Meeting management system',
  '2019年中国器官移植大会': 'China organ transplant congress 2019',
  '暨第六届中国器官移植医师年会': 'The 6th annual meeting of Chinese organ transplant physicians',
  '主办单位': 'The organizer',
};

var langSel = document.querySelector('#lang');

var zhEns = document.querySelectorAll('.zh-en');

langSel.onchange = function() {
  var lang = this.value;

  for (var dom of zhEns) {
    var text = dom.innerText;
    var enText;
    if (lang == 'en') {
      enText = translate[text];
    } else {
      enText = findKey(text);
    }
    if (enText) {
      dom.innerText = enText;
    }
  }
};

function findKey(value) {
  for (var key in translate) {
    if (translate[key] == value) {
      return key;
    }
  }
}

