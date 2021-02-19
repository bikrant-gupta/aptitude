$(document).ready(function(){
	var m=total_time()-1;
	var i=59;
	var change_col = total_time()*60/510;

	$('.ol-instruct').html(
			`<ol>
				<li>Quiz based on <b>${get_topics()}</b>.</li>
				<li>Time limit is <b>${total_time()} minutes</b> can be seen at top left corner.</li>
				<li>Every question contains equal <b>${max_mark()} points</b>.</li>
				<li>Total ${total_question()} Questions are there (All with 4 options)</li>
				<li>For every correct answer +${max_mark()} point will be awarded</li>
				<li>-${neg_mark()} for negative marking</li>
				<li><div class='all-button col-2 col-sm-4 col-md-3 col-lg-2 ' ><button class='red btn ' id='q'>20</button></div> Button with red colour defines not yet answered</li>
				<li><div class='all-button col-2 col-sm-4 col-md-3 col-lg-2 ' ><button class='green btn ' id='q'>20</button></div> Button with green colour defines answered</li>
				<li><div class='all-button col-2 col-sm-4 col-md-3 col-lg-2 ' ><button class='yellow btn ' id='q'>20</button></div> Button with yellow colour defines marked for future review</li>
				<li><div class='all-button col-2 col-sm-4 col-md-3 col-lg-2 ' ><button class='black btn ' id='q'>20</button></div> Button with deep-blue colour defines you are currently at that question</li>
				<li><b>Remember "end exam" button will end exam with one click only.</b></li>
			</ol>`
		)
	$('.minutes').html(
		`${total_time()}`
		)
	if($(window).width()>575){
		var h = get_disp_height()-$('.set').height()-$('.navbar').height()-200;
		// console.log(h);
		$('.number-container').css('min-height',`${h}px`);
	}
	

	function timer_second(){
		setTimeout(function(){
			var time = i.toString();
			if(time.length ==1){
				time = '0'+time;
			}
			$('.seconds').html(time);
			time = m.toString();
			if(time.length ==1){
				time = '0'+time;
			}

			$('.minutes').html(time);
			i--;
			var tt = m*60 + i;
			
			var col = Math.floor(510-tt/change_col);
			if(col<255){
				var color=`rgb(${col},255,0)`
				var sh = "0px 20px 20px 20px "+color;
				$('.time').css("background",color)
				// $('.set').css("box-shadow",sh)
			}
			else{
				col=510-col;
				var color=`rgb(255,${col},0)`
				var sh = "0px 20px 20px 20px "+color;
				$('.time').css("background",color)
				// $('.set').css("box-shadow",sh)
			}

			if(i>=0 && m>=0){
				timer_second();
			}
			else if(m>0){
				i=59;
				m--;
				timer_second();
			}
			if((m===0 && i==0) ){
				finish();
			}
		},get_speed())

	}
	$('.start').click(function(){
		timer_second();
		$('.instruction-container').hide();
		$('.instruction-container').hide();
		$('.o-end').slideDown({duration:300 , queue:true})
		$('.main-container').slideDown({duration:300,queue:true})
		$('.number-container').slideDown({duration:300,queue:true})
		$('.o').hide().slideDown({duration:300,queue:true})
		show_question(0);
	})

	var questions = {
		1:{
			1:`
				int main()<br>
				{<br>
				 int var; <br>
				 void *ptr = &var;<br>
				 *ptr = 5;<br>
				 printf("var=%d and *ptr=%d",var,*ptr);<br>
				 return 0;<br>
				}`,
			2:{
				1:"It will print “var=5 and *ptr=2000”",
				2:"It will print “var=5 and *ptr=5”",
				3:"It will print “var=5 and *ptr=XYZ” where XYZ is some random address",
				4:"Compile error"
				},
			3:"o4"
			},
		
		2:{
			1:`
			void fun(int n)<br>
{<br>
   int idx;<br>
   int arr1[n] = {0};<br>
   int arr2[n];<br>
  
   for (idx=0; idx<n; idx++)<br>
       arr2[idx] = 0;  <br>  
}<br>
  
int main()<br>
{<br>
   fun(4);<br>
   return 0;<br>
}`,

			2:{
				1:`Definition of both arr1 and arr2 is incorrect because variable is used to specify the size of array. That’s why compile error.`,
				2:"Apart from definition of arr1 arr2, initialization of arr1 is also incorrect. arr1 can’t be initialized due to its size being specified as variable. That’s why compile error.",
				3:"Initialization of arr1 is incorrect. arr1 can’t be initialized due to its size being specified as variable. That’s why compile error.",
				4:"No compile error. The program would define and initializes both arrays to ZERO."
				},
			3:"o3"
			},
		3:{
			1:`int main()<br>
{<br>
    char arr[100];<br>
    printf("%d", scanf("%s", arr));<br>
    /* Suppose that input value given<br>
        for above scanf is "a" */<br>
    return 1;<br>
}`,
			2:{
				1:`0`,
				2:"1",
				3:"65",
				4:"97"
				},
			3:"o2"
			},
		4:{
			1:`int main() <br>
{ <br>
  printf(" "GEEKS %% FOR %% GEEKS""); <br>
  getchar(); <br>
  return 0; <br>
}`,


			2:{
				1:`“GEEKS % FOR % GEEKS”`,
				2:"GEEKS % FOR % GEEKS",
				3:"\"GEEKS %% FOR %% GEEKS\"",
				4:"GEEKS %% FOR %% GEEKS"
				},
			3:"o1"
			},
		5:{
			1:`How many times will Quiz be printed in the below program?<br>
			int main()<br><br>
{<br>
    int i = 1024;<br>
    for (; i; i >>= 1)<br>
        printf("Quiz");<br>
    return 0;<br>
}`,
			2:{
				1:`10`,
				2:"11",
				3:"Infinite",
				4:"The program will show compile-time error"
				},
			3:"o2"
			},
		6:{
			1:`int main()<br>
				{<br>
				    int i = 0;<br>
				    switch (i)<br>
				    {<br>
				        case '0': printf("A");<br>
				                break;<br>
				        case '1': printf("B");<br>
				                break;<br><br>
				        default: printf("C");<br>
				    }<br>
				    return 0;<br>
				} `,
			2:{
				1:`A`,
				2:"B",
				3:"C",
				4:"Error"
				},
			3:"o3"
			},
		7:{
			1:`
			int main()<br>
				{<br>
				    int i = 3;<br>
				    switch (i)<br>
				    {<br>
				        case 0+1: printf("A");<br>
				                break;<br>
				        case 1+2: printf("B");<br>
				                break;<br>
				        default: printf("C");<br>
				    }<br>
				    return 0;<br>
				}`,
			2:{
				1:`A`,
				2:"B",
				3:"C",
				4:"Error"
				},
			3:"o2"
			},
		8:{
			1:`int main()<br><br>
{<br>
   char str1[] = "GeeksQuiz";<br>
   char str2[] = {'G', 'e', 'e', 'k', 's', 'Q', 'u', 'i', 'z'};<br>
   int n1 = sizeof(str1)/sizeof(str1[0]);<br>
   int n2 = sizeof(str2)/sizeof(str2[0]);<br>
   printf("n1 = %d, n2 = %d", n1, n2);<br>
   return 0;<br>
}`,
			2:{
				1:`n1 = 10, n2 = 9`,
				2:"n1 = 10, n2 = 10",
				3:"n1 = 9, n2 = 10",
				4:"n1 = 9, n2 = 9"
				},
			3:"o1"
			},
		9:{
			1:`
			void swap(char *str1, char *str2)<br>
{<br>
  char *temp = str1;<br>
  str1 = str2;<br>
  str2 = temp;<br>
}  <br>
   <br>
int main()<br>
{<br>
  char *str1 = "Geeks";<br>
  char *str2 = "Quiz";<br>
  swap(str1, str2);<br>
  printf("str1 is %s, str2 is %s", str1, str2);<br>
  return 0;<br>
}`,
			2:{
				1:`str1 is Quiz, str2 is Geeks`,
				2:"str1 is Geeks, str2 is Quiz",
				3:"str1 is Geeks, str2 is Geeks",
				4:"str1 is Quiz, str2 is Quiz"
				},
			3:"o2"
			},
		10:{
			1:`In below program, what would you put in place of “?” to print “Quiz”?<br>
<br>
int main() <br>
{ <br>
  char arr[] = "GeeksQuiz"; <br>
  printf("%s", ?); <br>
  return 0; <br>
}`,
			2:{
				1:`arr`,
				2:"(arr+5)",
				3:"(arr+4)",
				4:"Not possible"
				},
			3:"o2"
			}
		
	
	}

	var t_q = total_question();
	var s = '';
	for(var t = 0; t<t_q;t++){
		if(t<9) s+=`<div class='all-button col-2 col-sm-4 col-md-3 col-lg-2 ' ><button class='a-btn btn' id='q${t+1}'>0${t+1}</button></div>`;
		else s+=`<div class='all-button col-2 col-sm-4 col-md-3 col-lg-2'><button class='a-btn btn'  id='q${t+1}'>${t+1}</button></div>`;
	}
	$('.number-container .row').html(s);

	var qno = 1;
	var score = 0;
	var li= [];
	var user_answer = {};
	var main_answer = {};
	var ran = (Math.floor(10*Math.random()))+1;
	for(var t=0;t<t_q;t++){
		var ran = (Math.floor(10*Math.random()))+1;
		var temp=0;
		for(var v=0;v<t;v++){
			if(li[v]==ran){
				temp=1;
				break;
			}
		}
		if(temp == 0){
			main_answer[ran]=questions[ran][3];
			li.push(ran);
			// console.log(li);
		}
		else{
			t--;
		}
	}
	console.log(main_answer);

	$('.a-btn').click(function(){
		// $(this).css("background-color","rgb(0,0,255)");
		var num = parseInt($(this).attr('id').substr(1));
		// console.log(num);
		qno = num;
		show_question(num-1);
	});
	$('.o-end').click(function(){
		finish();
	})




















	
	console.log(li);
	var t = 0;
	var li_answer = [];
	var li_review = [];
	// --------------------------------------------------------------------------------------------
	$('.o').click(function(){
		setTimeout(function(){
			li_answer.push(qno);
			qno++;
			if(qno<=t_q){show_question(qno)}
			if(qno==t_q+1 ){finish();}
			else{$('.main-container').hide().slideDown({duration:300,queue:false});	}
			// console.log(user_answer)
		},100);
	})

	$('.o-review').click(function(){
		li_review.push(qno);
		get_btn_color();
	})

	$('.o-skip').click(function(){
		setTimeout(function(){
			qno++;
			if(qno<=t_q){show_question(qno)}
			if(qno==t_q+1 ){finish();}
			else{$('.main-container').hide().slideDown({duration:300,queue:false});	}
			// console.log(user_answer)
		},100);
	})
	// --------------------------------------------------------------------------------------------



	$('.o1').click(function(){

		var qqnn = li[qno-1];
		// console.log(qqnn,qno);
		user_answer[qqnn]="o1";
	})
	$('.o2').click(function(){
		var qqnn = li[qno-1];
		user_answer[qqnn]="o2";
		
	})
	$('.o3').click(function(){
		var qqnn = li[qno-1];
		user_answer[qqnn]="o3";
	})
	$('.o4').click(function(){
		var qqnn = li[qno-1];
		user_answer[qqnn]="o4";
	})
	// --------------------------------------------------------------------------------------------


	function show_question(t){
		t=qno-1;
		var btn = `q${qno}`;
		get_btn_color()
		$('.question').html(questions[li[t]][1]);
		$('.o1').html(questions[li[t]][2][1]);
		$('.o2').html(questions[li[t]][2][2]);
		$('.o3').html(questions[li[t]][2][3]);
		$('.o4').html(questions[li[t]][2][4]);
		$('.q-number').html(qno);
	}

	// --------------------------------------------------------------------------------------------

	function get_btn_color(){
		$('.a-btn').css("background-color","rgb(255,0,0)");
		$(`.a-btn`).css("color","#0af")

		for( var key=0; key<li_answer.length;key++){
			$('#q'+`${li_answer[key]}`).css("background-color","rgb(0,150,0)")
			$('#q'+`${li_answer[key]}`).css("color","#fff")
			// console.log(li_answer[key])
		}
		for( var key=0; key<li_review.length;key++){
			$('#q'+`${li_review[key]}`).css("background-color","rgb(255,255,0)")
			$('#q'+`${li_review[key]}`).css("color","#0af")
			// console.log(li_answer[key])
		}

		// console.log('--',user_answer);
		$('#q'+`${qno}`).css("background-color","#002")
		$('#q'+`${qno}`).css("color","#fff")

	}
	//--------------------------------------------------------------------------------------------

	function finish(){
		// console.log("Hiii");
		setTimeout(function(){
				$('.main-container').hide();
				$('.number-container').hide();	
				time_s=60-i;
				time_m=total_time() -m-1;
				for(var t1=0;t1<t_q;t1++){
					if(main_answer[li[t1]] === user_answer[li[t1]]){
						score+=10;
					}
				}
				text="<div>Your Total Score is:<b> "+score.toString()+"</b></div>";
				time=text+"<div>Finished After "+time_m.toString()+" minutes "+time_s+" seconds</div>";
				$('.score').html(time);
				$('.score-container').slideDown({duration:300,queue:false});
				var sol = "<hr>";
				// console.log(user_answer); 
				for(var t1=0;t1<t_q;t1++){
					// console.log(t1,li);
					var ans = parseInt(questions[li[t1]][3].charAt(1));
					sol+="<div><b>"+questions[li[t1]][1]+"</b></div>"+"<div>Correct Answer:"+questions[li[t1]][2][ans]+"</div><div>Your Answer:";
					var user_ans;
					if(user_answer[li[t1]]){
						user_ans = parseInt(user_answer[li[t1]].charAt(1));
						sol+=questions[li[t1]][2][user_ans]+"</div><hr><br>";
					}
					else{
						sol+="<b>NOT ANSWERED</b></div><hr><br>";
					}
					// console.log(user_ans);
					
					// console.log(user_answer[t1]);
					// console.log(questions[li[t1]][2]);
					
				}
				$('.solution').html(sol);


				// console.log(user_answer,main_answer);
				i=0;
				m=0;
			},100)
	}


	// --------------------------------------------------------------------------------------------

	function total_question(){
		return 10;
	}
	function max_mark(){
		return 10;
	}
	function neg_mark(){
		return 0;
	}
	function total_mark(){
		return total_question()*max_mark();
	}
	function total_time(){
		return 8;
	}
	function get_speed(){
		return 1000;
	}
	function get_disp_height(){
		return $(document).height();
	}
	function get_topics(){
		return 'C/C++'
	}
	// --------------------------------------------------------------------------------------------

})