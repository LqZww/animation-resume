// 把code写到code和style标签里
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css, 'css');
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight   //自动拉滚动条
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}
function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 10)
}



var result = `/* Hello，面试官，你好，我是Zww
 * 我将以动画的形式来介绍我自己
 * 我觉得只用文字太单调了
 * 我就用代码来介绍咯
 * 首先准备一些样式
 */
* {
    transform: all 1s;
}
html {
    background: rgb(222, 222, 222);
    font-size: 16px;
}

#code {
    border: 1px solid red;
    padding: 16px
}

/* 我现在需要一些代码高亮 */
.token.selector {
    color: #690;
}

.token.property {
    color: #905;
}

.token.function {
    color: #DD4A68;
}

/* 不玩了，我来介绍一下我自己把 */
/* 我需要一张白纸 */
#code {
    position: fixed;
    left: 0;
    width: 50%;
    height: 100%;
}
#paper {
    position: fixed;
    right: 0;
    width: 50%;
    height: 100%;
    background: black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:2px;
}
#paper > .content{
    background:white;
    width:100%;
    height:100%;
}
`
var result2 = `
#paper{

}
`
var md = `
# 自我介绍

我叫Zww
来自cq
XXX学校毕业
学习前端半年
应聘前端开发岗位

# 技能介绍
XXXXXX
XXXXXX

# 项目介绍

1、简历
2、轮播

# 联系方式
XXXXX
`

writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md)
        })
    })
})



function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

