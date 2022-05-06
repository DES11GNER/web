/**
*
* @authors Wang Ziyang (you@example.org)
* @date    2022-03-09 09:15:50
* @version $1.0.0$
*/
var pl = document./*querySelector*/getElementById("part-list");
window.onload = function(){
    pl.addEventListener('click', ((e) => {
        if(e.target && e.target.nodeName == "LI") {
            // 点击li对象, 弹出 alert 对话框显示当前点击 li 的序号;
            alert(e.target.id);
            // console.log(e.target.id.replace("post-")," ",e.target);

            switch (e.target.id){
                // 点击p1对象,其字体颜色变成红色;
                case "p1":
                    e.target.style.color = "#FF0000";
                    break;

                // 点击p2对象,将h1的内容变成当前的日期,其格式为 yyyy-mm-dd ;
                case "p2":
                    var year = new Date().getFullYear();
                    var month = new Date().getMonth() + 1;
                    var day = new Date().getDate();
                    if (month < 10)
                    {
                        month = "0" + month;
                    }
                    if (day < 10)
                    {
                        day = "0" + day;
                    }
                    document.getElementById("h1").textContent = `${year}-${month}-${day}`;
                    break;

                // 点击p3对象,将其父对象的li元素增加 fn-active 类;
                case "p3":
                    document.getElementById("p3").classList.add("fn-active");
                    break;

                // 点击p4对象,删除表格的p8元素;
                case "p4":
                    pl.removeChild(p8);
                    break;

                // 点击p5对象,打开一个新窗口,里面显示淘宝主页;
                case "p5":
                    window.open("http://www.taobao.com");
                    break;

                // 点击p6对象,在 ul 的最后添加一个 li 元素，其内容是 p9;
                case "p6":
                    var p9=document.createElement("li");
                    var node=document.createTextNode("p9");
                    p9.appendChild(node);
                    p9.id = "p9";
                    pl.appendChild(p9);
                    break;

                // 点击p7对象,将 m-box 的宽度设置到屏幕宽度;
                case "p7":
                    // console.log(document.body.clientWidth);
                    // console.log(document.getElementsByClassName("m-box"));
                    document.getElementById("m-box").style.width = parseInt(window.screen.width) + "px";
                    break;
                
            }
        }
    }));
}