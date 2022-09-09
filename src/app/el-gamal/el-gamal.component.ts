import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-el-gamal',
  templateUrl: './el-gamal.component.html',
  styleUrls: ['./el-gamal.component.css']
})
export class ElGamalComponent implements OnInit {
   a:number=0;
   primeNumber:number=0;
   isPrimeNumber:boolean=true;
   alpha:number=0;
   randomNumber:number=0;
   alpahpowofA:number=0;
   findX:number=0;
    message:number=0;
    keysize:any;
    randomKeyA:number=0;
    randomKeyB:number=0;
    h:number=0;
    isKeyGenerated:boolean=false;
    gama:number=0;
    delta:number=0;
    messageBob:boolean=false;
  constructor() { }

  ngOnInit(){
    this.isKeyGenerated=false;
    
  }
  gcd_two_numbers(x:number,y:number) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  isPrime(num:number) {
    this.isKeyGenerated=false;
    var sqrtnum=Math.floor(Math.sqrt(num));
      // var prime = num != 1;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {

             return   this.isPrimeNumber=false;
              break;
          }
      }
      this.primeNumber=num
      return  this.isPrimeNumber=true ;
  }
 countPrimitiveRoots(p:number)
{

    var o = 1;
	  var k;
	 var roots:any = [];
	 var z = 0;

    for (var r = 2; r < p; r++) {
      k = Math.pow(r, o);
      k %= p;
      while (k > 1) {
        o++;
        k *= r;
        k %= p;
      }
      if (o == (p - 1)) {
        roots[z] = r;
        z++;
      }
      o = 1;
    }
    console.log(this.alpha=roots[0])
    // primitive root generator roots[0]
   return this.alpha=roots[0];
}

// this code generate the private key for Alice  Bob
getRandomIntAlice(generator:number, p:number) {
 var min = Math.ceil(generator);
 var max = Math.floor(p);
  return this.randomKeyA=this.randomNumber=Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
// this code generate the private key for  Bob
getRandomIntBob(generator:number, p:number) {
  var min = Math.ceil(generator);
  var max = Math.floor(p);

   return this.randomKeyB=this.randomNumber=Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 }

  // using square& multiply algorithm
  expmod(base:number, exp:number, mod:number):any{
    if (exp == 0) return 1;
    if (exp % 2 == 0){
      this.isKeyGenerated=true;
        return this.h= Math.pow((this.expmod(base, (exp / 2), mod)), 2) % mod;
    }
    else {
      this.isKeyGenerated=true;
      return this.h=(base * (this.expmod(base, (exp - 1), mod))) % mod;
        // return this.alpahpowofA=(base * (this.expmod(base, (exp - 1), mod))) % mod;
    }
   }
   encryptSend(){
 this.gama= this.expmod(this.alpha,this.randomKeyB, this.primeNumber);
 this.delta=((this.expmod(this.h, this.randomKeyB,this.primeNumber)*this.message)%this.primeNumber);
 console.log(this.gama)
 if(this.gama >1 && this.delta >1){
  this.messageBob=true;
 }

   }

  }


