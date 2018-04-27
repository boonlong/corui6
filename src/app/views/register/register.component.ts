import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  private regisdata:regisinterface={username:'',email:'',password:''};
  private shError:boolean=false;
  private shSuccess:boolean=false;
  private pb1:number=0;
  private pb1txt:string="";

  constructor() { }

  clearSh(){
    this.shError=false;this.shSuccess=false;
  }
  checkpass(pass1:string,pass2:string){
    this.clearSh();
    if(pass1==pass2) {
      this.shSuccess=true;
    } else {
      this.shError=true;
    }
  }
  getpb(){return this.pb1;}
  scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;
    // award every unique letter until 5 repetitions
    var letters = new Object();
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }
    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass),
    }
    var variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] == true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;
    return score;
  }
  checkPassStrength(pass) {
    var score = this.scorePassword(pass);
    this.pb1=score;
    if (score > 80) {
      this.pb1txt= "strong";
    }else if (score > 60) {
      this.pb1txt= "good";
    }else if (score >= 30) {
      this.pb1txt= "weak";
    }else { this.pb1txt= "";}
  }

}

interface regisinterface{
  username:string;
  email:string;
  password:string;
}