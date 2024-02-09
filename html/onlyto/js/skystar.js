// poem
var words=[
    '且喜且乐，且以永日',
    '一岁一礼，一寸欢喜',
    '遥扣芳辰，生辰吉乐',
    '日日是好日',
    '一年三百六十日，愿长似今宵',
    '辛愿一生同草树',
    '年年岁岁乐于斯',
    '如花似叶',
    '岁岁年年',
    '今年见，明年重见',
    '春色如人面',
    '且舞且歌行且拜',
    '与日月兮同光',
    '余生事事无心绪',
    '直向清凉度岁年',
    '时时是好时',
    '南风知不知',
    '但快乐二字，多少深长',
    '上天垂光兮熙予以青春',
    '今日何日兮共此良辰',
    '永远十八赶朝暮',
    '一生肆意，如光如炬',
    '希望你的枕头柔软',
    '也希望你的美梦都能圆满',
    '匆匆离去的是时光和背影',
    '刻在心头的是回忆和期待',
    '生于世间不由我',
    '日出大地同天喜',
    '快马何处寻新欢',
    '今夜何夕',
    '平安喜乐，四季如春',
    '生而自由，日日欢愉',
    '夜夜流光相皎洁',
    '快意人生，乐得自在',
    '一往而深',
    '生活的热闹和生命的骄傲一个不少',
    '岁岁春无事',
    '相逢总玉颜',
    '旦逢良辰，顺颂时宜',
    '笑指松椿，当是同年',
    '看彩衣争献，兰羞玉酎',
    '年年约，常相见',
    '但无事，身强健',
    '夜月一帘幽梦',
    '和光同尘',
    '杳霭流玉',
    '月落星沉',
    '霞姿月韵',
    '喜上眉梢',
    '你且听这荒唐',
    '满船星梦压星河',
    '春秋走来一步步',
    '微雨燕双飞',
    '掬水月在手',
    '弄花香满衣',
    '你且迷着风浪',
    '永远十八赶朝暮',
    '将昨日事，归欢喜处',
    '几见花开，一任年光换',
    '愿你去往之地皆为热土',
    '愿你将遇之人皆为挚友',
    '经历世事而不失少年意趣',
    '保持坚定与热爱',
    '人间可爱不知年',
    '天上星辰应作伴',
    '愿成长，落落大方',
    '愿意诚挚之心，领岁月之教'
];
function randomNum(min,max){
    var num = (Math.random()*(max-min+1)+min).toFixed(2);
    return num;
}
function init(){
    let container = document.querySelector('.container');
    let f = document.createDocumentFragment();
    words.forEach(w=>{
    let word_box = document.createElement('div');
    let word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '15px'
        word_box.classList.add('word-box');
        word_box.style.setProperty("--margin-top",randomNum(-40,20)+'vh');
        word_box.style.setProperty("--margin-left",randomNum(6,35)+'vw');
        word_box.style.setProperty("--animation-duration",randomNum(25,40)+'s');
        word_box.style.setProperty("--animation-delay",randomNum(-20,0)+'s');
        
        word_box.appendChild(word);
        f.appendChild(word_box);


    })
    container.appendChild(f);
}
window.addEventListener('load',init);
let textone = document.querySelector('.textone').querySelector('h1');
      let texttwo = document.querySelector('.texttwo').querySelector('h1');
      let textthree = document.querySelector('.textthree').querySelector('h1');

      setTimeout(function(){
        textone.innerHTML = '愿三百六十日长似今宵';
          textone.style.color = '#E8F9FD';
          textone.style.fontFamily = '楷体'
          texttwo.style.color = '#E8F9FD';
          texttwo.style.fontFamily = '楷体'
          textthree.style.color = '#E8F9FD';
          textthree.style.fontFamily = '楷体'
          texttwo.innerHTML = '';
      },28000)
      setTimeout(function(){
        textone.innerHTML = '做个永远怀香的孩子';
        texttwo.innerHTML = '奶油抹在脸上';
        textthree.innerHTML = '诗放在心中';
      },112500)


 
