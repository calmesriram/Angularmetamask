// var myjson = require('./interview.json');
var sybexcon = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "ivid",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "Regonce",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "map",
		"outputs": [
			{
				"name": "ivid",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			},
			{
				"name": "time",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
web3.eth.defaultAccount=web3.eth.accounts[0];

var sybex = sybexcon.at('0xbe4913fbd409bb9bbf458a2d38eb7b42d4fac995');
if(web3.isConnected())
{
   console.log("ok");
}
else
{
  console.log("no");
}

web3.version.getNetwork((err, netId) => {
switch (netId) {
  case "1":
    console.log('This is mainnet')
    break
  case "2":
    console.log('This is the deprecated Morden test network.')
    break
  case "3":
    console.log('This is the ropsten test network.')
    break
  case "4":
    console.log('This is the Rinkeby test network.')
    break
  case "42":
    console.log('This is the Kovan test network.')
    break
  default:
    console.log('This is an unknown network.')
}
})

load();

var store = [];
var store1=[];
var map=[];
function register1(){

    var ivid = document.getElementById('ivid').value;
    var name = document.getElementById('name').value;
    console.log(ivid+""+name);
    store.push(ivid);
    store1.push(name);
    console.log("pushed");
   
}
var tdload;
var data=[];
var i=1;
function load()
{
  $('#tdload').children().remove();
  // document.getElementById('tdload').rows.length = 0;
   for(var i=1;i<=200;i++)
   {
  console.log(i);

   // forEach(i,function(err,i){
      
       sybex.map(i,function(err,result){
         if(result[0] != 0)
        $("#tdload").append('<tr><td>'+result[0]+'</td><td>'+result[1]+'</td></tr>');

      // data.push(result);
      }); 
    
    // });
  
   }
   load();

  //  data.forEach(value,function(data,result){
  //    $('#tdload').append('<tr><td>'+result[0]+'</td><td>'+result[1]+'</td></tr>');
  //  })
  // forEach(result,function(err,result){
  //   return sybex.map(result,function(err,result){
  //     $("#tdload").append('<tr><td>'+result[0]+'</td><td>'+result[1]+'</td></tr>');
  //   });
  
  // })
  

  
  // return sybex.map()
  //  for(i=0;i<store.length;i++)
  //  {

  //   $("#tdload").append('<tr><td>'+store[i]+'</td><td>'+store1[i]+'</td></tr>');
  //  }
  
}

// var t = setInterval(table,100);
// function table(){
//   //  $("#tdload").detach();
//     load();
// }

var regres="";
function reg(){
  document.getElementById('ld').style.display = 'block';
console.log("Invoed function reg");
var ivid = document.getElementById('ivid').value;
var name = document.getElementById('name').value;
    return sybex.Regonce(ivid,name,function(error,result)
{
if(!error)
    {
        console.log(result);
        hash(result);
    }
     else
    {
    console.log(error);
    document.getElementById('ld').style.display = 'none';
    }
        });
    }

    function hash(result){
    // loader
    // var a = regres;
    console.log(result);
   var setint =  setInterval(check,100);

    function check(){
    
      this.web3.eth.getTransactionReceipt(result,function(err,result){
        if(result !== null)
        if(result.status== 0x1 || result.status=="success")
        {
          document.getElementById('ld').style.display = 'none';
          load();
          clearInterval(setint);
          
        }
        else{
          document.getElementById('ld').style.display = 'none';
          clearInterval(setint);
          
        }
      })
    }
  }
// 0x0ce4b15693be2472fecdb1b9bbf7b2a0de227d1f747272c7ab53d870358bbb38