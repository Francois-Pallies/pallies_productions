$('.menu').not('.currentPage').mouseenter(function() {
    $(this).children('.menuItem').addClass('currentPage')
    $('#currentPage').removeClass('currentPage')
})
$('.menu').not('.currentPage').mouseleave(function() {
    $(this).children('.menuItem').removeClass('currentPage') 
    $('#currentPage').addClass('currentPage')
})
$('#burgerButton').on('click', function() {
    $('#burgerMenu').toggleClass('menuClosed menuOpened')
    $('#burgerNav').toggle()
})
$('#aPropos').on('click', function() {
    $(this).toggleClass('black white')
    $(this).toggleClass('arrowDown arrowUp')
    $('.aProposDropdown').toggle()
})
$('#portfolio').on('click', function() {
    $(this).toggleClass('black white')
    $(this).toggleClass('arrowDown arrowUp')
    $('.portfolioDropdown').toggle()   
})
//Fenêtre modale Visites Virtuelles
$('#maison66').click(function() {
    $('#modal').css({'display': 'flex'})
    $('#modalContent').html(
        `
        <div id="yvapw-EKU0WNxQlP" autoplay="true" style="width: 100%; height: 600px"></div>
        <script> (function(id,rd,v){var w=window,d=document,t='script',src='https://www.klapty.com/tour/tunnel/',v=v||'1.1.0',r='yvap'+v; w[r]=w[r]||{instance:null,l:[],s:null}; w[r].l.push(arguments); append=function(){ while(w[r].l.length) {w[r].instance.append(w[r].l.shift())}}; if(w[r].s===null){w[r].s=false; var a=d.createElement(t),m=d.getElementsByTagName(t)[0]; a.async=1; a.onload=function(f){ w[r].s=true;w[r].instance=new YVAppendPano(src);append()};a.src=src+'_app/append-v'+v+'.js?_'+(new Date().getTime()); m.parentNode.insertBefore(a,m); var l=d.createElement('link'); l.rel='stylesheet'; l.type='text/css'; l.href=src+'_app/append-v'+v+'.css?_'+(new Date().getTime()); d.getElementsByTagName('HEAD')[0].appendChild(l); } else if(w[r].s===true){append()};})('EKU0WNxQlP'); </script>
        `
    )
})
$('#maison122').click(function() {
    $('#modal').css({'display': 'flex'})
    $('#modalContent').html(
        `
        <div id="yvapw-zBf02IFKNz" autoplay="true" style="width: 100%; height: 100%"></div>
        <script> (function(id,rd,v){var w=window,d=document,t='script',src='https://www.klapty.com/tour/tunnel/',v=v||'1.1.0',r='yvap'+v; w[r]=w[r]||{instance:null,l:[],s:null}; w[r].l.push(arguments); append=function(){ while(w[r].l.length) {w[r].instance.append(w[r].l.shift())}}; if(w[r].s===null){w[r].s=false; var a=d.createElement(t),m=d.getElementsByTagName(t)[0]; a.async=1; a.onload=function(f){ w[r].s=true;w[r].instance=new YVAppendPano(src);append()};a.src=src+'_app/append-v'+v+'.js?_'+(new Date().getTime()); m.parentNode.insertBefore(a,m); var l=d.createElement('link'); l.rel='stylesheet'; l.type='text/css'; l.href=src+'_app/append-v'+v+'.css?_'+(new Date().getTime()); d.getElementsByTagName('HEAD')[0].appendChild(l); } else if(w[r].s===true){append()};})('zBf02IFKNz'); </script>
        `
    )
})
$('#maison200').click(function() {
    $('#modal').css({'display': 'flex'})
    $('#modalContent').html(
        `
        <div id="yvapw-EVV0v9USAH" autoplay="true" style="width: 100%; height: 100%"></div> <script> (function(id,rd,v){var w=window,d=document,t='script',src='https://www.klapty.com/tour/tunnel/',v=v||'1.1.0',r='yvap'+v; w[r]=w[r]||{instance:null,l:[],s:null}; w[r].l.push(arguments); append=function(){ while(w[r].l.length) {w[r].instance.append(w[r].l.shift())}}; if(w[r].s===null){w[r].s=false; var a=d.createElement(t),m=d.getElementsByTagName(t)[0]; a.async=1; a.onload=function(f){ w[r].s=true;w[r].instance=new YVAppendPano(src);append()};a.src=src+'_app/append-v'+v+'.js?_'+(new Date().getTime()); m.parentNode.insertBefore(a,m); var l=d.createElement('link'); l.rel='stylesheet'; l.type='text/css'; l.href=src+'_app/append-v'+v+'.css?_'+(new Date().getTime()); d.getElementsByTagName('HEAD')[0].appendChild(l); } else if(w[r].s===true){append()};})('EVV0v9USAH'); </script>
        `
    )
})
$('#modal').click(function() {
    $('#modal').hide()
})