/*
  自定义保留 precision 位小数，并使用 separator 分隔符进行数字格式化
  value：格式化目标数字
  precision：精度，保留小数点后几位，默认2位
  separator：千分位分隔符，默认为','
  decimal：小数点符号，默认'.'
  prefix：前缀字符，默认''
  suffix：后缀字符，默认''
  formatNumber(123456789.87654321, 2, ',') // 123,456,789.88
*/
export function formatNumber(
  value: number | string,
  precision = 2,
  separator = ",",
  decimal = ".",
  prefix = "",
  suffix = ""
): string {
  if (Number(value) === 0) {
    return Number(value).toFixed(precision)
  }
  if (!value) {
    return ""
  }
  value = Number(value).toFixed(precision)
  value += ""
  const nums = value.split(".")
  let integer = nums[0]
  const decimals = nums.length > 1 ? decimal + nums[1] : ""
  const reg = /(\d+)(\d{3})/
  function isNumber(value: any) {
    return Object.prototype.toString.call(value) === "[object Number]"
  }
  if (separator && !isNumber(separator)) {
    while (reg.test(integer)) {
      integer = integer.replace(reg, "$1" + separator + "$2")
    }
  }
  return prefix + integer + decimals + suffix
}