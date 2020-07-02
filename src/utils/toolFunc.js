// 递归遍历的对象(数组)结构是二叉树
//复制新属性
//传入数组对象,需要复制的属性,新属性
export function findIdByName(initObj, attr, newAttr) {
    function find(obj) {
        if (obj != null) {
            for (let i = 0; i < obj.length; i++) {
                if (obj[i][attr]) {
                    obj[i][newAttr] = obj[i][attr]
                }
                find(obj[i].children);
            }
        }
    }
    find(initObj);
}

//格式化时间戳
export function timestampToTime(timestamp) {
    let now = new Date(timestamp * 1000);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    return year + "-" + month + "-" + date + "   " + hour + ":" + minute + ":" + second;
}