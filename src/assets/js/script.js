var translate = {
  '欢迎登录': 'Welcome to login',
  '请输入用户名': 'Please enter a user name',
  '请输入密码': 'Please enter your password',
  '记住密码': 'Remember the password',
  '忘记密码？': 'Forget your password?',
  '登录': 'login',
  '注册': 'registered',
  '用户注册': 'User registration',
  '邮箱账号': 'E-mail account',
  '请输入邮箱账号': 'Please enter your email account',
  '您的性别': 'Your gender',
  '男性/女士': 'Male/female',
  '手机号': 'Mobile phone no',
  '请输入手机号': 'Please enter your mobile phone number',
  '验证码': 'Verification code',
  '请输入验证码': 'Please enter the verification code',
  '姓名': 'name',
  '请输入姓名': 'Please enter your name',
  '职务': 'position',
  '请输入职务': 'Please enter job',
  '最高学历': 'The highest record of formal schooling',
  '请输选择您的最高学历': 'Please enter your highest degree',
  '职称': 'title',
  '请输入职称': 'Please enter your professional title',
  '工作单位': 'Work units',
  '请输入您的工作单位': 'Please enter your work unit',
  '科室/部门': 'Department/department',
  '请输入科室/部门': 'Please enter department/department',
  '完成': 'complete',
  '下一步': 'The next step',
  '会议管理系统': 'Meeting management system',
  '2019年中国器官移植大会': 'China organ transplant congress 2019',
  '暨第六届中国器官移植医师年会': 'The 6th annual meeting of Chinese organ transplant physicians',
  '主办单位': 'The organizer',
  '中国医师协会': 'Chinese medical doctor association',
  '中国医师协会器官移植医师分会': 'Organ transplant physicians branch of Chinese medical doctors association',
  '中国工程院医药卫生学部': 'Department of medicine and health, Chinese academy of engineering',
  '协办单位': 'The co-organizer',
  '广东省医师协会': 'Guangdong doctors association',
  '中山大学附属第一医院': 'The first affiliated hospital of sun yat-sen university',
  '中国肝移植注册中心（CLTR）': 'China liver transplantation registry (CLTR)',
  '《中国移植杂志（电子版）》': 'Chinese journal of transplantation (electronic edition)',
  '会议简介': 'Session description',
  '会议信息': 'The meeting information',
  '会议日程': 'The meeting agenda',
  '重要嘉宾': 'Important guests',
  '日期': 'Date',
  '地址': 'address',
  '秘书处联系方式': 'Contact information of the secretariat',
  '时间': 'time',
  '全天': 'Throughout the day',
  '内容': 'content',
  '地址': 'address',
  '报道': 'reports',
  '布展': 'The exhibit',
  '2019中国器官移植大会': 'China organ transplant congress 2019',
  '暨第六届中国器官移植医师年会': 'The 6th annual meeting of Chinese organ transplant physicians',
  '欢迎辞': 'welcome',
  '广州白云国际会议中心': 'Guangzhou baiyun international convention center',
  '广州白云国际会议中心5号楼1层大堂': 'Baiyun international conference center, guangzhou, China',
  '广州白云国际会议中心珠江厅C2区': 'Guangzhou baiyun international conference center, area C2, pearl river hall',
  '开幕式和全体会议': 'Opening and plenary sessions',
  '东方厅': 'East hall',
  '学术研讨卫星会': 'Satellite conference for academic seminars',
  '珠江厅A2区、珠江厅C1区、阳江厅、': 'Area A2, area C1, yangjiang hall,',
  '中山厅、东莞厅、深圳厅': 'Zhongshan hall, dongguan hall, shenzhen hall',
  '分会场': 'At the venue',
  '珠江厅A2区、珠江厅C1区、阳江厅、': 'Area A2, area C1, yangjiang hall,',
  '中山厅、东莞厅、深圳厅': 'Zhongshan hall, dongguan hall, shenzhen hall',
  '珠江厅A2区、珠江厅C1区、阳江厅、': 'Area A2, area C1, yangjiang hall,',
  '中山厅、东莞厅、深圳厅': 'Zhongshan hall, dongguan hall, shenzhen hall',
  '撤离': 'evacuation',
  '中国 • 广州': 'Guangzhou • China',
  '2019年8月1日3日': '2019-08-01',
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

