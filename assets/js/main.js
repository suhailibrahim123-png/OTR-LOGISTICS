(function(){
 var b=document.querySelector('.menu-btn'),n=document.getElementById('nav');
 if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
 var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
 var f=document.getElementById('quote-form');
 if(f){
  var p=new URLSearchParams(location.search).get('service');
  if(p){var s=f.elements['service'];for(var i=0;i<s.options.length;i++){if(s.options[i].value===p)s.selectedIndex=i}}
  f.addEventListener('submit',function(e){
   e.preventDefault();
   var d=new FormData(f),g=function(k){return (d.get(k)||'').toString().trim()};
   var body=['Name: '+g('name'),'Company: '+g('company'),'Phone: '+g('phone'),'Email: '+g('email'),'Service: '+g('service'),'From: '+g('from'),'To: '+g('to'),'','Cargo details:',g('details')].join('\n');
   location.href='mailto:pramod@otruae.com?subject='+encodeURIComponent('Quote request - '+g('service'))+'&body='+encodeURIComponent(body);
  });
 }
})();
