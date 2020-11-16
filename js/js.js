$('.seek_rivers_list').on('click',function(){
    $('.switch_box_one').hide()
    $('.switch_box_next').show()
})
$('.my_rivers').on('click',function(event){
    event.stopPropagation();
    $(this).addClass('select_type')
    $('.nearby_rivers').removeClass('select_type')
    $('.seek_rivers_box').slideDown()
})
$('.nearby_rivers').on('click',function(event){
    event.stopPropagation();
    $(this).addClass('select_type')
    $('.my_rivers').removeClass('select_type')
    $('.seek_rivers_box').slideDown()
})
//点击外层收缩
$('.tab3_box').on('click',function(event){
    event.stopPropagation();
    $('.seek_rivers_box').slideUp()
})
$('#state_box').on('click',function(){
    var _this = $(this)
    // _this.addClass('end_box')
    // _this.find('img').attr('src','images/end.svg')
    // _this.find('img').css('width','16px')
    // _this.find('img').css('margin-top','12px')
    // _this.find('span').text('结束')
    // _this.removeClass('state_box')
    // $('.end_box').on('click',function(){
    //     $('.end_box').addClass('state_box')
    //     $('.end_box').find('img').attr('src','images/state.svg')
    //     $('.end_box').find('img').css('width','25px')
    //     $('.end_box').find('img').css('margin-top','3px')
    //     $('.end_box').find('span').text('开始')
    //     $('.end_box').removeClass('end_box')
    // })
    if(_this.hasClass('state_box')){
        _this.addClass('end_box')
        _this.find('img').attr('src','images/end.svg')
        _this.find('img').css('width','16px')
        _this.find('img').css('margin-top','12px')
        _this.find('img').css('margin-left','1px')
        _this.find('span').text('结束')
        _this.removeClass('state_box')
    }else{
        _this.addClass('state_box')
        _this.find('img').attr('src','images/state.svg')
        _this.find('img').css('width','24px')
        _this.find('img').css('margin-top','5px')
        _this.find('img').css('margin-left','3px')
        _this.find('span').text('开始')
        _this.removeClass('end_box')
    }
   
})
//点击事件上报
$('.next_information_button_two').on('click',function(){
  $('#return_icon').show()
  $('#form_pop_up').popup()
  $('#return_icon').on('click',function(){
      $.closePopup()
     $('#return_icon').hide()
  })
})
$('.option_box div').on('click',function(){
    console.log($(this).is('select_item'),'222')
    if($(this).hasClass('select_item_not')){
        $(this).addClass('select_item')
        $(this).removeClass('select_item_not')
    }else{
        
        $(this).addClass('select_item_not')
        $(this).removeClass('select_item')
    }
})
$( ".my_textarea").bind( "change", function() {
   $('.count').val($(this).val().length) 
});

$('.my_textarea').on('input', function(){
   $('.count').text($(this).val().length+'/200') 
})
$('.photo_button').on('click',function(){
    $('.photo_button_input').trigger('click')
})
$('.reporting').on('click',function(){
    $('#return_icon').hide()
    $.closePopup()
})
$('.do_it_yourself').on('click',function(){
    $('#return_icon').hide()
    $.closePopup()
})
//点击历史巡河弹框
$('.next_information_button_one').on('click',function(){
    $('#return_icon').show()
    $('#histor_rivers_eject').popup()
    $('#return_icon').on('click',function(){
        $.closePopup()
       $('#return_icon').hide()
    })
})