/*
* @params: dom（input）
* 作用：选中并复制input框的内容
* */
export function copy_input(dom) {
  return new Promise((resolve, reject) => {
    dom.select()
    document.execCommand('Copy')
    resolve()
  })
}
