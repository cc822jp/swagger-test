document.addEventListener('DOMContentLoaded', () => {
  let button = document.querySelector('#change')
  let selecter = document.querySelector('#selecter')
  let base_path = document.querySelector('#base_path')
  let changed_path = document.querySelector('#changed_path')

  selecter.addEventListener('change', (event) => {
    event.preventDefault()
    if (selecter.value == 1) {
      base_path.placeholder = '\\\\parent\\child'
    } else if(selecter.value == 2) {
      base_path.placeholder = 'smb://parent/child'
    }
  }, false)

  button.addEventListener('click', (event) => {
    event.preventDefault()
    if (base_path.value == '') return
    let string = base_path.value.replace(/smb:/g, '')
    if (selecter.value == 1) {
      changed_path.value = `smb:${string.replace(/\\/g, '/')}`
    } else if(selecter.value == 2) {
      changed_path.value = string.replace(/\//g, '\\')
    }
    changed_path.select()
    document.execCommand('copy')
  }, false)
})