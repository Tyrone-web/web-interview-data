// 自定义实现instanceOf方法

const myInstanceof = (a, b) => {
    let p = a;

    while (p) {
        if (p === b.prototype) {
            return true;
        }

        p = p.__proto__;
    }

    return false;
}