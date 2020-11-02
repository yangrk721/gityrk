form_my_box1()
function form_my_box1(){
    content1=document.getElementById('form_my_box1')
    var clientheight1=content1.clientHeight
    var offsetheight1=content1.scrollHeight
    h1=offsetheight1-clientheight1
    var position=0
    function startscroll(){
        if(content1.scrollTop<h){position++;content1.scrollTop=position}
        if(content1.scrollTop>=h){content1.scrollTop=0;position=0}
    }
    setInterval(startscroll,200)

}
form_my_box()
function form_my_box(){
    content=document.getElementById('form_my_box')
    console.log(content,'content')
    var clientheight=content.clientHeight
    var offsetheight=content.scrollHeight
    h=offsetheight-clientheight
    var position=0
    function startscroll(){
    if(content.scrollTop<h){position++;content.scrollTop=position}
    if(content.scrollTop>=h){content.scrollTop=0;position=0}
    }
    setInterval(startscroll,200)

}