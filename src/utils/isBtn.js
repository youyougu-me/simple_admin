import store from "@/store/index"


//传入是哪种按钮我就可以判断此用户有没有这个权限
export function buttonPermission(permission) {
    // console.log(permission);
    //获取当前角色
    const currentRole = store.getters["login/roles"]
    if (currentRole.indexOf("admin") != -1) {
        // console.log('555');
        return true
    }
    const button = store.getters["login/btns"]
    //再看此用户的所有权限中,有没有包含那个按钮的权限(那个按钮是在按钮的那里传进来的撒)
    //用户的路由权限以及按钮权限是什么时候获取的呢？
    //就是登陆以后拿到token,再跳转之前去获取的
    return button.indexOf(permission) != -1;
}

//我要把这个注册为全局方法
