/**
 * Created by Administrator on 2018-10-29.
 */
export function addClass(el,className) {
  if(hasClass(el,className)){
    return
  }
  let newClass = el.className.split(" ")
  newClass.push(className)
  el.className = newClass.join(" ")

}
export function hasClass(el,className) {
  let reg = new RegExp('(^|\\s)'+className+'(\\ss|$)')
  return reg.test(el.className)
}
