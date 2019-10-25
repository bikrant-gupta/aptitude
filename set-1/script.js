$(document).ready(function(){
	var m=19;
	var i=59;
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
			
			var col = Math.floor(510-tt/2.35294117647058823);
			// var color="rgb("+col.toString()+",255,0)"
			if(col<255){
				var color="rgb("+col.toString()+",255,0)"
				// console.log(color);
				var sh = "0px 20px 20px 20px "+color;
				$('.set').css("background",color)
				$('.set').css("box-shadow",sh)
			}
			else{
				col=510-col;
				var color="rgb(255,"+col.toString()+",0)"
				// console.log(color);
				var sh = "0px 20px 20px 20px "+color;
				$('.set').css("background",color)
				$('.set').css("box-shadow",sh)
			}


			// console.log(col,color);

			if(i>=0 && m>=0){
				timer_second();
			}
			else if(m>0){
				i=59;
				m--;
				timer_second();
			}
			if((m===0 && i==0) ){
			// $('.main-container').hide();
			// time_s=60-i;
			// time_m=19-m;
			// for(var t1=0;t1<10;t1++){
			// 	if(main_answer[t1] === user_answer[t1]){
			// 		score+=10;
			// 	}
			// }
			// text="<div>Your Total Score is:<b> "+score.toString()+"</b></div>";
			// time=text+"<div>Finished After "+time_m.toString()+" minutes "+time_s+" seconds</div>";
			// $('.score').html(time);
			// $('.score-container').slideDown({duration:300,queue:false});
			// // console.log(user_answer,main_answer);
			// i=0;
			// m=0;

			finish();
			}
		},1000)

	}
	$('.start').click(function(){
		timer_second();
		$('.instruction-container').hide();
		$('.main-container').slideDown({duration:300,queue:false})
	})
	var questions = {
		1:{
			1:"A person crosses a 600 m long street in 5 minutes. What is his speed in km per hour?",
			2:{
				1:"3.6",
				2:"7.2",
				3:"10",
				4:"8.4"
				},
			3:"o2"
			},
		
		2:{
			1:"An aeroplane covers a certain distance at a speed of 240 kmph in 5 hours. To cover the same distance in 1 hours, it must travel at a speed of:",
			2:{
				1:"720 kmph",
				2:"360 kmph",
				3:"600 kmph",
				4:"300 kmph"
				},
			3:"o1"
			},
		
		3:{
			1:"Excluding stoppages, the speed of a bus is 54 kmph and including stoppages, it is 45 kmph. For how many minutes does the bus stop per hour?",
			2:{
				1:"9",
				2:"14",
				3:"12",
				4:"10"
				},
			3:"o4"
			},
		
		4:{
			1:"Robert is travelling on his cycle and has calculated to reach point A at 2 P.M. if he travels at 10 kmph, he will reach there at 12 noon if he travels at 15 kmph. At what speed must he travel to reach A at 1 P.M.?",
			2:{
				1:"8 kmph",
				2:"12 kmph ",
				3:"1 kmph",
				4:"9 kmph"
				},
			3:"o2"
			},
		
		5:{
			1:"It takes eight hours for a 600 km journey, if 120 km is done by train and the rest by car. It takes 20 minutes more, if 200 km is done by train and the rest by car. The ratio of the speed of the train to that of the cars is:",
			2:{
				1:"2:3",
				2:"3:2",
				3:"3:4",
				4:"4:3"
				},
			3:"o3"
			},
		
		6:{
			1:"A man covered a certain distance at some speed. Had he moved 3 kmph faster, he would have taken 40 minutes less. If he had moved 2 kmph slower, he would have taken 40 minutes more. The distance (in km) is:",
			2:{
				1:"40",
				2:"40.66",
				3:"37.5",
				4:"35"
				},
			3:"o1"
			},
		7:{
			1:"A man on tour travels first 160 km at 64 km/hr and the next 160 km at 80 km/hr. The average speed for the first 320 km of the tour is:",
			2:{
				1:"35.55 km/hr",
				2:"71.11 km/hr",
				3:"71 km/hr",
				4:"36 km/hr"
				},
			3:"o2"
			},
		8:{
			1:"Walking 6/7th of his usual speed, a man is 12 minutes too late. What is the usual time taken by him to cover that distance?",
			2:{
				1:"1 hr 12 min",
				2:"1 hr 13 min",
				3:"1 hr 42 min",
				4:"1 hr 24 min"
				},
			3:"o1"
			},
		9:{
			1:"A man rides his bicycle 10 km at an average speed of 12 km/hr and again travels 12 km at an average speed of 10 km/hr. What is his average speed for the entire trip approximately?",
			2:{
				1:"11.2 kmph",
				2:"10 kmph",
				3:"10.2 kmph",
				4:"10.8 kmph"
				},
			3:"o4"
			},
		10:{
			1:"A can do a work in 15 days and B in 20 days. If they work on it together for 4 days, then the fraction of the work that is left is :",
			2:{
				1:"1/10",
				2:"1/4",
				3:"7/15",
				4:"8/15"
				},
			3:"o4"
			},
		11:{
			1:"A is thrice as good as workman as B and therefore is able to finish a job in 60 days less than B. Working together, they can do it in:",
			2:{
				1:"20 days",
				2:"22.5 days",
				3:"25 days",
				4:"30 days"
				},
			3:"o2"
			},
		12:{
			1:"A alone can do a piece of work in 6 days and B alone in 8 days. A and B undertook to do it for Rs. 3200. With the help of C, they completed the work in 3 days. How much is to be paid to C?",
			2:{
				1:"Rs.375",
				2:"Rs.800",
				3:"Rs.400",
				4:"Rs.600"
				},
			3:"o3"
			},
		13:{
			1:"A is 30% more efficient than B. How much time will they, working together, take to complete a job which A alone could have done in 23 days?",
			2:{
				1:"13 days",
				2:"11 days",
				3:"20.5 days",
				4:"None of these"
				},
			3:"o1"
			},

		14:{
			1:"Ravi and Kumar are working on an assignment. Ravi takes 6 hours to type 32 pages on a computer, while Kumar takes 5 hours to type 40 pages. How much time will they take, working together on two different computers to type an assignment of 110 pages?",
			2:{
				1:"7 hours 30 minutes",
				2:"8 hours",
				3:"8 hours 15 minutes",
				4:"8 hours 25 minutes"
				},
			3:"o3"
			},
		
		15:{
			1:"A, B and C can complete a piece of work in 24, 6 and 12 days respectively. Working together, they will complete the same work in(days):",
			2:{
				1:"1/24",
				2:"7/24",
				3:"26/7",
				4:"4"
				},
			3:"o3"
			},
		
		16:{
			1:"	A and B can complete a work in 15 days and 10 days respectively. They started doing the work together but after 2 days B had to leave and A alone completed the remaining work. The whole work was completed in :(days)",
			2:{
				1:"8",
				2:"10",
				3:"12",
				4:"15"
				},
			3:"o3"
			},
		
		17:{
			1:"A and B can do a piece of work in 30 days, while B and C can do the same work in 24 days and C and A in 20 days. They all work together for 10 days when B and C leave. How many days more will A take to finish the work?",
			2:{
				1:"24",
				2:"18",
				3:"19",
				4:"36"
				},
			3:"o2"
			},
		
		18:{
			1:"A and B together can do a piece of work in 30 days. A having worked for 16 days, B finishes the remaining work alone in 44 days. In how many days shall B finish the whole work alone?",
			2:{
				1:"30 days",
				2:"40 days",
				3:"60 days",
				4:"70 days"
				},
			3:"o3"
			},
		
		19:{
			1:"Two numbers are respectively 20% and 50% more than a third number. The ratio of the two numbers is:",
			2:{
				1:"2:5",
				2:"3:5",
				3:"4:5",
				4:"6:7"
				},
			3:"o3"
			},
		
		20:{
			1:"A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
			2:{
				1:"Rs.500",
				2:"Rs.1500",
				3:"Rs.2100",
				4:"None of these"
				},
			3:"o4"
			},
		
		21:{
			1:"	Seats for Mathematics, Physics and Biology in a school are in the ratio 5 : 7 : 8. There is a proposal to increase these seats by 40%, 50% and 75% respectively. What will be the ratio of increased seats?",
			2:{
				1:"2:3:4",
				2:"6:7:8",
				3:"6:8:9",
				4:"None of these"
				},
			3:"o1"
			},
		
		22:{
			1:"The salaries A, B, C are in the ratio 2 : 3 : 5. If the increments of 15%, 10% and 20% are allowed respectively in their salaries, then what will be new ratio of their salaries?",
			2:{
				1:"3:3:10",
				2:"10:11:20",
				3:"10:11:21",
				4:"23:33:60"
				},
			3:"o4"
			},
		
		23:{
			1:"The fourth proportional to 5, 8, 15 is:",
			2:{
				1:"18",
				2:"24",
				3:"19",
				4:"20"
				},
			3:"o2"
			},
		
		24:{
			1:"	In a bag, there are coins of 25 p, 10 p and 5 p in the ratio of 1 : 2 : 3. If there is Rs. 30 in all, how many 5 p coins are there?",
			2:{
				1:"50",
				2:"100",
				3:"150",
				4:"200"
				},
			3:"o3"
			},
		
		25:{
			1:"A bag contains 50 P, 25 P and 10 P coins in the ratio 5: 9: 4, amounting to Rs. 206. Find the number of coins of each type respectively.",
			2:{
				1:"360, 160, 200",
				2:"160, 360, 200",
				3:"200, 360, 160",
				4:"200, 160, 300"
				},
			3:"o3"
			},
		
		26:{
			1:"Salaries of Ravi and Sumit are in the ratio 2:3. If the salary of each is increased by Rs. 4000, the new ratio becomes 40:57. What is Sumit's salary?",
			2:{
				1:"38500",
				2:"36700",
				3:"50000",
				4:"38000"
				},
			3:"o4"
			},
		
		27:{
			1:"There is certain numbers of toys in the box. They are divided into such a way that the person who gets 1/4 of the whole gets thrice of what the others get on an average. Find the number of people amongst whom the toys are distributed?",
			2:{
				1:"8",
				2:"12",
				3:"11",
				4:"10"
				},
			3:"o4"
			},
			
		
	}

	var qno = 1;
	var score = 0;
	var li= [];
	var user_answer = [];
	var main_answer = [];
	var ran = (Math.floor(27*Math.random()))+1;
	for(var t=0;t<10;t++){
		var ran = (Math.floor(27*Math.random()))+1;
		var temp=0;
		for(var v=0;v<t;v++){
			if(li[v]==ran){
				temp=1;
				break;
			}
		}
		if(temp == 0){
			li.push(ran);
			main_answer.push(questions[ran][3]);
		}
		else{
			t--;
		}
	}
	// console.log(li);
	var t = 0;
	$('.question').html(questions[li[t]][1]);
	$('.o1').html(questions[li[t]][2][1]);
	$('.o2').html(questions[li[t]][2][2]);
	$('.o3').html(questions[li[t]][2][3]);
	$('.o4').html(questions[li[t]][2][4]);
	$('.q-number').html(qno);
	$('.o').click(function(){
		qno++;
		
		if(qno<=10){
			// console.log(qno);
			t++;
			$('.question').html(questions[li[t]][1]);
			$('.o1').html(questions[li[t]][2][1]);
			$('.o2').html(questions[li[t]][2][2]);
			$('.o3').html(questions[li[t]][2][3]);
			$('.o4').html(questions[li[t]][2][4]);
		}
		if(qno==11 ){
			
			
		}
		else{
			$('.main-container').hide().slideDown({duration:300,queue:false});	
		}
		$('.q-number').html(qno);

	})



	$('.o1').click(function(){
		user_answer.push("o1");
	})
	$('.o2').click(function(){
		user_answer.push("o2");
		
	})
	$('.o3').click(function(){
		user_answer.push("o3");
	})
	$('.o4').click(function(){
		user_answer.push("o4");
	})

	function finish(){
		console.log("Hiii");
		setTimeout(function(){
				$('.main-container').hide();
				time_s=60-i;
				time_m=19-m;
				for(var t1=0;t1<10;t1++){
					if(main_answer[t1] === user_answer[t1]){
						score+=10;
					}
				}
				text="<div>Your Total Score is:<b> "+score.toString()+"</b></div>";
				time=text+"<div>Finished After "+time_m.toString()+" minutes "+time_s+" seconds</div>";
				$('.score').html(time);
				$('.score-container').slideDown({duration:300,queue:false});
				var sol = "<hr>";
				// console.log(user_answer); 
				for(var t1=0;t1<10;t1++){
					console.log(t1,li);
					var ans = parseInt(questions[li[t1]][3].charAt(1));
					sol+="<div><b>"+questions[li[t1]][1]+"</b></div>"+"<div>Correct Answer:"+questions[li[t1]][2][ans]+"</div><div>Your Answer:";
					var user_ans;
					if(user_answer[t1]){
						user_ans = parseInt(user_answer[t1].charAt(1));
						sol+=questions[li[t1]][2][user_ans]+"</div><hr><br>";
					}
					else{
						sol+="<b>NOT ANSWERED</b></div><hr><br>";
					}
					console.log(user_ans);
					
					// console.log(user_answer[t1]);
					// console.log(questions[li[t1]][2]);
					
				}
				$('.solution').html(sol);


				// console.log(user_answer,main_answer);
				i=0;
				m=0;
			},500)
	}

})
