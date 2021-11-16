//手机号验证 value是手机号
export function checkPhone(value) {
    let regPhong = /^1[3456789]\d{9}$/;
    return regPhong.test(value)
}
//密码验证 6-20数字+英文
export function checkPassword(value) {
    let regPassword = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;
    return regPassword.test(value)
}
//验证码
export function checkCode(value) {
    let regCode = /[a-zA-Z0-9]{6}/;
    return regCode.test(value)
}