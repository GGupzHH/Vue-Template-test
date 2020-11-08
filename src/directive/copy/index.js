import { Message } from 'element-ui'

function copy () {
  /**
   * copy 函数 功能实现
   * 利用input可以选择的功能
   * 使用document.execCommand("copy") 将 input 选中部分复制到剪切板
   */
  let input = document.createElement('input')
  input.value = this.value
  document.body.appendChild(input)
  // 获取焦点
  input.focus()
  // 选中指定内容
  input.setSelectionRange(0, this.value.length)
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    Message.success({
      message: '复制成功!',
      showClose: true
    })
  }
  document.body.removeChild(input)
}

// 改变 copy 函数内部 this 的指向
const directive = (el, binging) => el.addEventListener('click', copy.bind(binging))

export default directive
