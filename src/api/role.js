import service from "@/utils/request";

//获取当前用户的权限
export function GetRole(data) {

    return service.request({
        method: "post",
        url: "/userRole/",
        data
    })
}





