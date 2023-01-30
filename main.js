//call back
//call back hell
//promise
//promise chaining
//async/await
//promise.all
//advance array methods-map,filter,every,some,resuce
//'this' keyword


//call back

// function greeting(name) {
//     console.log('Hello, ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
//   }
  
//   processUserInput(greeting);


four=(a,b)=>a+b;

		five=(c)=>c+10;

		six=(d)=>console.log(d);

		six(five(four(10,20)))



		function main(){
			return new Promise(function(resolve,reject){
				setTimeout(function(){
					console.log("1")
					resolve("1");
				},5000)
			})
		}

		function main1(){
			return new Promise(function(resolve,reject){
				setTimeout(function(){
					console.log("2")
					resolve("2");
				},)
			})
		}

		function main2(){
			return new Promise(function(resolve,reject){
				setTimeout(function(){
					console.log("3")
					resolve(3);
				},4000)
			})
		}

		function main3(){
			return new Promise(function(resolve,reject){
				setTimeout(function(){
					console.log("4")
					resolve('4');
				},1000)
			})
		}

		main().then(function(){
			main1().then(function(){
				main2().then(function(){
					main3()
				}).catch(function(){
					console("main2 is failed")
				})
			}).catch(function(){
			console("main1 is failed")
			})
		}).catch(function(){
			console("main is failed")
		})

		async function result(){
			try{
				let res1=await main()
				let res2=await main1()
				let res3=await main2()
				let res4=await main3()
				console.log(res1,res2,res3,res4)
			}
			catch(err){
				console.log("error is",err)
			}
		}

		result()
		 
		

		let array=[1,2,3,4];
		 
		let map=array.map(function(e){
			return e*2;
		})

		console.log(map)

		let filter=array.filter(function(e){
			return e>2;
		})

		console.log(filter)

		let every=array.every(function(e){
			return e>0;
		})

		console.log(every)

		let some=array.some(function(e){
			return e>0;
		})

		console.log(some)

		let reduce=array.reduce(function(total,e){
			return total+=e;
		},10)

		console.log(reduce)

		let find=array.find(function(e){
			return e>2
		})

		console.log(find)

		array.forEach(function(e){
			console.log(e)
		})

		var obj={
			a:4,
			b:6,
		}

		function main4(a,b,c){
			console.log(this,b,a,c,)
		}

		let bind=main4.bind(obj,1,2,3);

		bind();

		

		let a=1;

		let time=setInterval(() => {
			console.log("hello everyone")
			a++;
			if(a>10){
				clearInterval(time)
			}
		},2000);


		let object={
			a:4,
			b:9,
			c:2
		}

		let newObj=object;
		newObj.a=5;

		console.log(object,newObj)
		
		

		function main5(...a){
			var c=0;
			a.forEach(function(e){
				c+=e;
			})
			console.log(c)
		}
		 
		main5(1,2,3,4);

		

		class main6{
			constructor(){
				this.name="kavitha"
				this.arr=[1,2,3,4]
			
			}
			myFunction(){
				console.log(this)
			}
		}

		class newMain extends main{
			constructor(){
				super()
				this.age="20";
				this.profile="developer";
			}
			myFunction2(){
				super.myFunction();
			}
		}

		var obj=new newMain();

		console.log(obj.age)

  