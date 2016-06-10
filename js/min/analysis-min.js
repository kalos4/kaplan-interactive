function applySubmitFunction(e){$("#theform").submit(function(a){a.preventDefault();var t="",r;switch(efficacyOrYearchoice=$("input[name=efficacyOrYearfig]").val()+"fig",efficacyOrYearchoice){case"efficacyfig":r=$("input[name=efficacyfig]:checked").length;break;default:r=$("input[name=yearfig]:checked").length}if(0==r||0==efficacyOrYearchoice&&0==$("input[name=practicefig]:checked").length)t="<p class=\"alert\">The <em>Generate figure</em> option is selected, but insufficient parameters were selected to produce a figure. To generate a figure, please return to the <a href=\"#\" onclick=\"$('body,html').stop(true,true).animate({scrollTop: $('#figureparameters').offset().top - $('header').height()}, '500', 'swing'); return false;\">figure parameters form</a> and select an efficacy level or a year of adoption, and for a net returns figure, at least one management practice.</p>";else{switch($("input[name=figuredisplay]:checked").val()){case"yield":for(var n=[],i=[],s=0;r>s;s++)n[s]=$("input[name="+efficacyOrYearchoice+"]:checked:eq("+s+")").val(),i[s]='<a href="img/figures/'+$("select[name=region]").val().toUpperCase()+"-Yield"+n[s]+'.png" class="swipebox"><img src="img/figures/'+$("select[name=region]").val().toUpperCase()+"-Yield"+n[s]+'.png" style="width: 910px;" alt="Graphical result" /></a>',t+=i[s];break;case"netreturns":for(var n=[],c=[],i=[],l=0;l<$("input[name=practicefig]:checked").length;l++){c[l]=$("input[name=practicefig]:checked:eq("+l+")").val();for(var s=0;r>s;s++)n[s]=$("input[name="+efficacyOrYearchoice+"]:checked:eq("+s+")").val(),i[l*$("input[name=practicefig]:checked").length+s]='<a href="img/figures/'+$("select[name=region]").val().toUpperCase()+"-"+c[l].toUpperCase()+n[s]+'.png" class="swipebox"><img src="img/figures/'+$("select[name=region]").val().toUpperCase()+"-"+c[l].toUpperCase()+n[s]+'.png" style="width: 910px;" alt="Graphical result" /></a>',t+=i[l*$("input[name=practicefig]:checked").length+s]}}t+="</p>"}d3.tsv("scenario-presets.tsv",function(a){var r=[],n=[],i=[],s=[];s=["dbp","hp","dp","25","50","75","3","5","10"];for(var c in s)n[s[c]]=!1;var l=[];l=["acdnb","aapo","lpy","ipt"];for(var o in l)i[l[o]]=!1;var p=[],u=0,f=Object.keys(a[0]).slice(1);$("input[name=practicetable]:checked").each(function(){var e=$(this).val().toUpperCase();$("input[name=efficacytable]:checked").each(function(){var t=$(this).val();$("input[name=adoptiontable]:checked").each(function(){var r="y"+$(this).val(),n=$("select[name=region]").val()+e+t+r,i;for(var s in a)a[s].index==n&&(i=s);p[u]=$.map(a[i],function(e,a){return e}).slice(1),u++})})});var d="";if(0!=p.length&&0!=$("input[name=outputtable]:checked").length){r.inputs=n,r.outputs=i,$("input[name$=table]:checked").each(function(){var e=$(this).attr("value");"outputtable"==$(this).attr("name")?r.outputs[e]=!0:r.inputs[e]=!0});for(var h="",g=[],m=Object.keys(r.inputs),v=Object.keys(r.outputs),b=0;b<p.length;b++)g[b]="<tr><td>"+p[b][0]+"</td><td>"+p[b][1]+"</td><td>"+p[b][2]+"</td><td>"+p[b][3]+"</td>";var y=0;for(var k in r.outputs){var w=v[y];if(1==r.outputs[w]){h+="<td>"+f[4+y]+"</td>";for(var b=0;b<p.length;b++)g[b]+="<td>"+p[b][4+y]+"</td>"}y++}for(var b=0;b<p.length;b++)g[b]+="</tr>";h="<tr><td>"+f[0]+"</td><td>"+f[1]+"</td><td>"+f[2]+"</td><td>"+f[3]+"</td>"+h+"</tr>",d='<section class="table-wrap"><h3>Output table</h3><table>'+h;for(var C=0;C<g.length;C++)d+=g[C];d+="</table>",d+="</section>"}else d="<p class=\"alert\">The <em>Generate table</em> option is selected, but insufficient parameters were selected to produce an output table. To generate a table, please return to the <a href=\"#\" onclick=\"$('body,html').stop(true,true).animate({scrollTop: $('#tableparameters').offset().top - $('header').height()}, '500', 'swing'); return false;\">table parameters form</a> and select at least one management practice, efficacy level, year of adoption, and output parameter.</p>";for(var Y=["Region","Price per ton ($)","Discount Rate","Cultivar","Additional Annual Cost per acre from Double Pruning","Additional Annual Cost per acre from Handpainting TopsinM","Annual Cultural Cost per acre &#8211; Year 0 &#8211; Establishing Vineyard","Annual Cultural Cost per acre &#8211; Year 1 &#8211; Establishing Vineyard","Annual Cultural Cost per acre &#8211; Year 2 &#8211; Establishing Vineyard","Annual Cultural Cost per acre &#8211; Year 3+ Established Vineyard","Annual yield per acre (Tons) &#8211; Year 0","Annual yield per acre (Tons) &#8211; Year 1","Annual yield per acre (Tons) &#8211; Year 2","Annual yield per acre (Tons) &#8211; Year 3","Annual yield per acre (Tons) &#8211; Year 4","Annual yield per acre (Tons) &#8211; Year 5+"],T=["Napa","$5,192","3%","Cabernet Sauvignon","$478","$71","$32,303","$5,264","$5,304","$7,784","0","0","1","4.5","4.5","4.5"],A=["Northern San Joaquin","$650","3%","Cabernet Sauvignon","$243","$90","$12,213","$3,370","$1,004","$3,505","0","0","5","10","10","10"],O=["Central Coast","$1,262","3%","Cabernet Sauvignon","$268","$117","$9,998","$2,554","$3,501","$4,625","0","0","2.5","5","7.5","7.5"],j=["Lake","$1,623","3%","Cabernet Sauvignon","$279","$90","$7,301","$6,942","$3,252","$3,404","0","0","0.75","1.5","3.5","5.75"],S=["Sonoma","$2,355","3%","Cabernet Sauvignon","$335","$74","$26,780","$4,204","$5,186","$6,280","0","0","1.5","3.5","5","5"],U=[{sonoma:S,nsj:A,cc:O,lake:j,napa:T}],x='<section class="assumptions-wrap"><h3>Parameter Values Used in Calculations</h3><table class="assumptionstable">',y=0;y<Y.length;y++)x+="<tr><td>"+Y[y]+"</td><td>"+U[0][$("select[name=region]").val()][y]+"</td></tr>";x+="</table></section>";var P='<hr /><h2>Results</h2><p class="landscape-alert" style="font-style: italic;">Tap or click figures to view full-screen. On mobile devices, we recommend viewing your results in landscape mode.</p><p class="print-link"><a href="javascript:window.print()"><i class="fa fa-print" aria-hidden="true"></i> Print these results.</a></p><p class="figure-wrap">';1==e.figurestate&&(P+=t),1==e.tablestate&&(P+=d),P+=x+'<p class="print-link"><a href="javascript:window.print()"><i class="fa fa-print" aria-hidden="true"></i> Print these results.</a></p><p class="adjust-link"><a href="#page" onclick="$(\'body,html\').stop(true,true).animate({scrollTop: $(\'#theform\').offset().top - $(\'header\').height()}, \'500\', \'swing\');">Adjust parameters</a></p>',$(".results").html(P);var V=1;$("input[name=efficacyfig]:checked").length>1?V=$("input[name=efficacyfig]:checked").length:$("input[name=practicefig]:checked").length>1&&"netreturns"==$("input[name=figuredisplay]").val()&&(V=$("input[name=practicefig]:checked").length),$(window).width()/V<910&&$(".results img").each(function(){$(this).css("width",100/V-1+"%")}),$("body,html").stop(!0,!0).animate({scrollTop:$("#results").offset().top-$("header").height()},"500","swing")})})}