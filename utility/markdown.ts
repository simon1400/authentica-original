export const markdown = (title: string) => {
  let str = title;
  let strArr = str.split("*")
  // @ts-ignore
  strArr.map(item => {
    str = str.replace(`*${item}*`, `<b>${item}</b>`)
  })
  return str
}