window.onload = function(){
    document.onscroll=function(){
        //获取滚动条位置
        let s1 = document.documentElement.scrollTop;
        let s2 = document.body.scrollTop;
        let scroll = s1 == 0?s2:s1;

        //获取视口的宽度
        let width = document.documentElement.clientWidth;
        //获取顶部固定块
        let search = document.getElementById('fixedBox');
        //判断滚动条超过视口宽度的12%时，搜索快边固定定位
        if(scroll>width*0.12){
            search.style.position = 'fixed';
            search.style.top = '0';
            search.style.left = '0';
        }else{
            search.style.position = 'static';
        }
    }
}