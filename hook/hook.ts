//路由跳转
export const uniNavigateTo = ( url:string )=> {
    // @ts-ignore
    uni.navigateTo({
        url:url
    })
}

//弹窗提示
export const uniShowToast = (icon:string,title:string,duration=2000)=> {
    // @ts-ignore
    uni.showToast({
        icon: icon,
        title: title,
        duration: duration
    });
}