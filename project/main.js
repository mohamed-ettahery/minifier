$(document).ready(function(){

    var lang ="HTML";
    $(".list-choice-lang li").on('click',function(){
        "use strict";
        $(this).addClass("lang-selected").siblings().removeClass("lang-selected");
        lang=$(this).text();
    });

    //Start Allow Comment
    var allowComents = false;
    $("#allow-comment").on('click',function(){
		
		$(this).toggleClass("allow-active");
		
		if($(this).hasClass("allow-active"))
			{
                allowComents = true;
				$(this).css("background","#0bc186");
				$(this).css("border","none");
			}
		else{
                allowComents = false;
			    $(this).css("background","#333");
		    }
		
	});
    //ENd Allow Comment

    $('#btn-minify').on('click',function(){
        "use strict";
        $('.box-input .minify-notice').fadeIn(500).delay(1000).fadeOut(1500);
        switch(lang)
        {
            case "HTML":
                $("#output").val($("#input").val());
                var resultat = "",
                    items = $("#output").val().split('');
                
                //Start Spaces Scapped
                var scapped = [];
                for(var i = 0;i<items.length;i++)
                {
                    // if(items[i]!=" "&& items[i]!="")
                    if(items[i]!="")
                    {
                    resultat+=items[i];
                    }
                }
                //End Spaces Scapped
        
                items = resultat.trim().split('');
                //Start Comments Scapped
                // var scapped = [];
                if(allowComents)
                {
                    for(var i = 0;i<items.length;i++)
                    {
                        var find = 0;
                        if(items[i]=="<")
                        {
                            if(items[i+1]=="!")
                            {
                                if(items[i+2]=="-")
                                {
                                    if(items[i+3]=="-")
                                    {
                                        for(var j=i+3;j<items.length;j++)
                                        {
                                            if(items[j]=="-")
                                            {
                                                if(items[j+1]=="-")
                                                {
                                                    if(items[j+2]==">")
                                                    {
                                                        find++;
                                                    }
                                                }
                                            }
                                            if(find==0)
                                            {
                                                // scapped.push(j);
                                                scapped.push(i,i+1,i+2,i+3,j,j+1,j+2,j+3);
                                            }
                                            else
                                            {
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                //End Comments Scapped
        
                resultat = "";
                var finaleArray = [];
                for(var i = 0;i<items.length;i++)
                {
                    var check=0;
                    for(var j = 0;j<scapped.length;j++)
                    {
                        if(scapped[j]==i)
                        {
                            check++;
                        }
                    }
                    if(check==0)
                    {
                        finaleArray.push(items[i]);
                    }
                }
                for(var i=0;i<finaleArray.length;i++)
                {
                    resultat+=finaleArray[i];
                }
        
                finaleArray = [];
                scapped = [];
                items = resultat.trim().split('');
                //start skip Espaces
                for(var i = 0;i<items.length;i++)
                {
                    var checkEspc = 0,
                        endBracket;
                    if(items[i]==">")
                    {
                        for(var j = i+1;j<items.length;j++)
                        {
                            if(items[j]=="<")
                            {
                                endBracket = j;
                                // alert(endBracket);
                                break;
                            }
                        }
                        for(var j=i+1;j<endBracket;j++)
                        {
                            if(items[j]!=" ")
                            {
                                checkEspc++;
                            }
                        }
                        if(checkEspc==0)
                        {
                            for(var j=i+1;j<endBracket;j++)
                            {
                                scapped.push(j);
                            }
                        }
                    }
                }
        
        
                for(var i = 0;i<items.length;i++)
                {
                    var check=0;
                    for(var j = 0;j<scapped.length;j++)
                    {
                        if(scapped[j]==i)
                        {
                            check++;
                        }
                    }
                    if(check==0)
                    {
                        finaleArray.push(items[i]);
                    }
                }
                resultat = "";
                for(var i=0;i<finaleArray.length;i++)
                {
                    resultat+=finaleArray[i];
                }
                //End skip Espaces
        
                $("#output").val(resultat.trim());
                break;
            case "CSS":
                $("#output").val($("#input").val());
                var resultat = "",
                    items = $("#output").val().split('');
                
                //Start Spaces Scapped
                var scapped = [];
                for(var i = 0;i<items.length;i++)
                {
                    // if(items[i]!=" "&& items[i]!="")
                    if(items[i]!="")
                    {
                      resultat+=items[i];
                    }
                }
                //End Spaces Scapped
        
                items = resultat.trim().split('');
                //Start Comments Scapped
                // var scapped = [];
                if(allowComents)
                {
                    for(var i = 0;i<items.length;i++)
                    {
                        var find = 0;
                        if(items[i]=="/")
                        {
                            if(items[i+1]=="*")
                            {
                                for(var j=i+1;j<items.length;j++)
                                {
                                    if(items[j]=="*")
                                    {
                                        if(items[j+1]=="/")
                                        {
                                            find++;
                                        }
                                    }
                                    if(find==0)
                                    {
                                        // scapped.push(j);
                                        scapped.push(i,i+1,j,j+1,j+2);
                                    }
                                    else
                                    {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                //End Comments Scapped
        
                resultat = "";
                var finaleArray = [];
                for(var i = 0;i<items.length;i++)
                {
                    var check=0;
                    for(var j = 0;j<scapped.length;j++)
                    {
                        if(scapped[j]==i)
                        {
                            check++;
                        }
                    }
                    if(check==0)
                    {
                        finaleArray.push(items[i]);
                    }
                }
                for(var i=0;i<finaleArray.length;i++)
                {
                    resultat+=finaleArray[i];
                }
        
                finaleArray = [];
                scapped = [];
                items = resultat.trim().split('');
                //start skip Espaces
                // for(var i = 0;i<items.length;i++)
                // {
                //     var checkEspc = 0,
                //         endBracket;
                //     if(items[i]=="}")
                //     {
                //         for(var j = i+1;j<items.length;j++)
                //         {
                //             if(items[j]=="{")
                //             {
                //                 endBracket = j;
                //                 // alert(endBracket);
                //                 break;
                //             }
                //         }
                //         for(var j=i+1;j<endBracket;j++)
                //         {
                //             if(items[j]!=" ")
                //             {
                //                 checkEspc++;
                //             }
                //         }
                //         if(checkEspc==0)
                //         {
                //             for(var j=i+1;j<endBracket;j++)
                //             {
                //                 scapped.push(j);
                //             }
                //         }
                //     }
                // }
                for(var i = 0;i<items.length;i++)
                {
                    var checkEspc = 0,
                        endBracket;
                    if(items[i]=="{" ||items[i]=="}" || items[i]==";")
                    {
                        for(var j = i+1;j<items.length;j++)
                        {
                            if(items[j]!=" ")
                            {
                                endBracket = j;
                                break;
                            }
                        }
                        for(var j=i+1;j<endBracket;j++)
                        {
                            scapped.push(j);
                        }
                    }
                }
        
                for(var i = 0;i<items.length;i++)
                {
                    var check=0;
                    for(var j = 0;j<scapped.length;j++)
                    {
                        if(scapped[j]==i)
                        {
                            check++;
                        }
                    }
                    if(check==0)
                    {
                        finaleArray.push(items[i]);
                    }
                }
                resultat = "";
                for(var i=0;i<finaleArray.length;i++)
                {
                    resultat+=finaleArray[i];
                }
                //End skip Espaces
        
                $("#output").val(resultat.trim());
                break;
            case "JavaScript":
                $("#output").val($("#input").val());
                var resultat = "",
                    items = $("#output").val().split('');
                
                //Start Spaces Scapped
                var scapped = [];
                for(var i = 0;i<items.length;i++)
                {
                    // if(items[i]!=" "&& items[i]!="")
                    if(items[i]!="")
                    {
                      resultat+=items[i];
                    }
                }
                //End Spaces Scapped
        
                items = resultat.trim().split('');
                //Start Comments Scapped
                // var scapped = [];
                if(allowComents)
                {
                    for(var i = 0;i<items.length;i++)
                    {
                        var find = 0;
                        if(items[i]=="/")
                        {
                            if(items[i+1]=="*")
                            {
                                for(var j=i+1;j<items.length;j++)
                                {
                                    if(items[j]=="*")
                                    {
                                        if(items[j+1]=="/")
                                        {
                                            find++;
                                        }
                                    }
                                    if(find==0)
                                    {
                                        // scapped.push(j);
                                        scapped.push(i,i+1,j,j+1,j+2);
                                    }
                                    else
                                    {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
                //End Comments Scapped
        
                resultat = "";
                var finaleArray = [];
                for(var i = 0;i<items.length;i++)
                {
                    var check=0;
                    for(var j = 0;j<scapped.length;j++)
                    {
                        if(scapped[j]==i)
                        {
                            check++;
                        }
                    }
                    if(check==0)
                    {
                        finaleArray.push(items[i]);
                    }
                }
                for(var i=0;i<finaleArray.length;i++)
                {
                    resultat+=finaleArray[i];
                }
        
                finaleArray = [];
                scapped = [];
                items = resultat.trim().split('');
                //start skip Espaces
                for(var i = 0;i<items.length;i++)
                {
                    var checkEspc = 0,
                        endBracket;
                    if(items[i]=="{" ||items[i]=="}" || items[i]=="(" || items[i]==")"|| items[i]==";"|| items[i]=="," )
                    {
                        for(var j = i+1;j<items.length;j++)
                        {
                            if(items[j]!=" ")
                            {
                                endBracket = j;
                                break;
                            }
                        }
                        for(var j=i+1;j<endBracket;j++)
                        {
                            scapped.push(j);
                        }
                    }
                }
        
        
                for(var i = 0;i<items.length;i++)
                {
                    var check=0;
                    for(var j = 0;j<scapped.length;j++)
                    {
                        if(scapped[j]==i)
                        {
                            check++;
                        }
                    }
                    if(check==0)
                    {
                        finaleArray.push(items[i]);
                    }
                }
                resultat = "";
                for(var i=0;i<finaleArray.length;i++)
                {
                    resultat+=finaleArray[i];
                }
                //End skip Espaces
        
                $("#output").val(resultat.trim());
                break;
        }
    });
    $('#btn-select').on('click',function(){
        "use strict";
        $('#output').select();
        $('.box-output .selected-notice').fadeIn(500).delay(1000).fadeOut(1500);
    });
    $('.close-notice-minify-box').on('click',function(){
        "use strict";
        $(this).parent().fadeOut(300);
    })
    $('.notice-minify-box').fadeIn(1000).delay(4000).fadeOut(1000);
    $('#input').on('focus',function(){
        "use strict";
        $('.notice-minify-box').hide();
    });
    $('#copy-year').text(new Date().getFullYear());
  });