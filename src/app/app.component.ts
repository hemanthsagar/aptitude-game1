import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webapp2';

  button1 = 0;
  button2 = 0;
  button3 = 0;
  button4 = 0;
  button5 = 0;
  button6 = 0;
  button7 = 0;
  button8 = 0;
  button9 = 0;
  button10 = 0;
  button11 = 0;
  button12 = 0;
  button13 = 0;
  button14 = 0;
  button15 = 0;
  button16 = 0;
  button17 = 0;
  button18 = 0;
  button19 = 0;
  button20 = 0;
  button21 = 0;
  button22 = 0;
  button23 = 0;
  button24 = 0;
  button25 = 0;


  isShow1 = true;
  isShow2 = true;
  isShow3 = true;
  isShow4 = true;
  isShow5 = true;
  isShow6 = true;
  isShow7 = true;
  isShow8 = true;
  isShow9 = true;
  isShow10 = true;
  isShow11 = true;
  isShow12 = true;
  isShow13 = true;
  isShow14 = true;
  isShow15 = true;
  isShow16 = true;
  isShow17 = true;
  isShow18 = true;
  isShow19 = true;
  isShow20 = true;
  isShow21 = true;
  isShow22 = true;
  isShow23 = true;
  isShow24 = true;
  isShow25 = true;

  newColor1 = false;
  newColor2 = false;
  newColor3 = false;
  newColor4 = false;
  newColor5 = false;
  newColor6 = false;
  newColor7 = false;
  newColor8 = false;
  newColor9 = false;
  newColor10 = false;
  newColor11 = false;
  newColor12 = false;
  newColor13 = false;
  newColor14 = false;
  newColor15 = false;
  newColor16 = false;
  newColor17 = false;
  newColor18 = false;
  newColor19 = false;
  newColor20 = false;
  newColor21 = false;
  newColor22 = false;
  newColor23 = false;
  newColor24 = false;
  newColor25 = false;


  score1=0;
  score=0;
  userscore=0;
  highscore = 0;
  thisintervel = 0;
  val=2;
  tval=0;
  pval = 0;
  pos = 0;
  count = 0;
  newColor = false;

  buttonstate = "start";
  wrong_count = 0;


  startorstop()
  {
    
    if(this.buttonstate.localeCompare( "start")===0)
    {
      this.setallbuttonsvisible();
      this.setallbuttonsto0();
      this.startorstop1();
      this.wrong_count = 0;
      this.thisintervel = setInterval(()=> { this.startorstop1() }, 5000);
      this.val=2;
      this.buttonstate="stop";
    }
    else
    {
      if(this.userscore>this.highscore)
      {
        this.highscore = this.userscore;
      }
      this.setallbuttonsinvisible();
      clearInterval(this.thisintervel);
      this.userscore=0;
      this.buttonstate="start";
    }
   
  }

  startorstop1()
  {

    this.setallbuttonsto0();
    
  this.setallbuttonsvisible();
  
  this.setcolorsback();

    if(this.tval === 3)
      {
        this.tval = 0;
        this.val = this.val + 1;
      }
      else
      {
        this.tval = this.tval + 1;
      }

      this.checkwrongcount();

    this.button1 = Math.floor(Math.random() * 100);
    this.button2 = Math.floor(Math.random() * 100);
    this.button3 = Math.floor(Math.random() * 100);
    this.button4 = Math.floor(Math.random() * 100);
    this.button5 = Math.floor(Math.random() * 100);
    this.button6 = Math.floor(Math.random() * 100);
    this.button7 = Math.floor(Math.random() * 100);
    this.button8 = Math.floor(Math.random() * 100);
    this.button9 = Math.floor(Math.random() * 100);
    this.button10 = Math.floor(Math.random() * 100);
    this.button11 = Math.floor(Math.random() * 100);
    this.button12 = Math.floor(Math.random() * 100);
    this.button13 = Math.floor(Math.random() * 100);
    this.button14 = Math.floor(Math.random() * 100);
    this.button15 = Math.floor(Math.random() * 100);
    this.button16 = Math.floor(Math.random() * 100);
    this.button17 = Math.floor(Math.random() * 100);
    this.button18 = Math.floor(Math.random() * 100);
    this.button19 = Math.floor(Math.random() * 100);
    this.button20 = Math.floor(Math.random() * 100);
    this.button21 = Math.floor(Math.random() * 100);
    this.button22 = Math.floor(Math.random() * 100);
    this.button23 = Math.floor(Math.random() * 100);
    this.button24 = Math.floor(Math.random() * 100);
    this.button25 = Math.floor(Math.random() * 100);
  }
  
  click1() {

      if(Number(this.button1)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor1 = !this.newColor1;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow1 = !this.isShow1;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click2() {
      if(Number(this.button2)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor2 = !this.newColor2;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow2 = !this.isShow2;
          this.wrong_count = this.wrong_count +1;
      }
  }
  
  click3() {
      if(Number(this.button3)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor3 = !this.newColor3;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow3 = !this.isShow3;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click4() {
      if(Number(this.button4)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor4 = !this.newColor4;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow4 = !this.isShow4;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click5() {
      if(Number(this.button5)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor5 = !this.newColor5;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow5 = !this.isShow5;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click6() {
      if(Number(this.button6)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor6 = !this.newColor6;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow6 = !this.isShow6;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click7() {
      if(Number(this.button7)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor7 = !this.newColor7;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow7 = !this.isShow7;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click8() {
      if(Number(this.button8)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor8 = !this.newColor8;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow8 = !this.isShow8;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click9() {
      if(Number(this.button9)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor9 = !this.newColor9;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow9 = !this.isShow9;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click10() {
      if(Number(this.button10)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor10 = !this.newColor10;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow10 = !this.isShow10;
          this.wrong_count = this.wrong_count +1;
      }
  }
  
  click11() {

      if(Number(this.button11)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor11 = !this.newColor11;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow11 = !this.isShow11;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click12() {
      if(Number(this.button12)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor12 = !this.newColor12;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow12 = !this.isShow12;
          this.wrong_count = this.wrong_count +1;
      }
  }
  
  click13() {
      if(Number(this.button13)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor13 = !this.newColor13;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow13 = !this.isShow13;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click14() {
      if(Number(this.button14)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor14 = !this.newColor14;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow14 = !this.isShow14;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click15() {
      if(Number(this.button15)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor15 = !this.newColor15;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow15 = !this.isShow15;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click16() {
      if(Number(this.button16)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor16 = !this.newColor16;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow16 = !this.isShow16;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click17() {
      if(Number(this.button17)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor17 = !this.newColor17;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow17 = !this.isShow17;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click18() {
      if(Number(this.button18)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor18 = !this.newColor18;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow18 = !this.isShow18;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click19() {
      if(Number(this.button19)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor19 = !this.newColor19;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow19 = !this.isShow19;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click20() {
      if(Number(this.button20)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor20 = !this.newColor20;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow20 = !this.isShow20;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click21() {

      if(Number(this.button21)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor21 = !this.newColor21;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow21 = !this.isShow21;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click22() {
      if(Number(this.button22)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor22 = !this.newColor22;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow22 = !this.isShow22;
          this.wrong_count = this.wrong_count +1;
      }
  }
  
  click23() {
      if(Number(this.button23)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor23 = !this.newColor23;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow23 = !this.isShow23;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click24() {
      if(Number(this.button24)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor24 = !this.newColor24;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow24 = !this.isShow24;
          this.wrong_count = this.wrong_count +1;
      }
  }
  click25() {
      if(Number(this.button25)%this.val == 0)
      {
          this.userscore=this.userscore+5;
          this.newColor25 = !this.newColor25;
      }
      else
      {
          this.userscore=this.userscore-5;
          this.isShow25 = !this.isShow25;
          this.wrong_count = this.wrong_count +1;
      }
  }


  /*isShow = false;
  isShow1 = true;
  newColor = false;
  toggleColor() {
    this.newColor = !this.newColor;
    this.isShow = !this.isShow;
    this.isShow1 = !this.isShow1;
  }*/

  setallbuttonsto0()
  {
    this.button1 = 0;
    this.button2 = 0;
    this.button3 = 0;
    this.button4 = 0;
    this.button5 = 0;
    this.button6 = 0;
    this.button7 = 0;
    this.button8 = 0;
    this.button9 = 0;
    this.button10 = 0;
    this.button11 = 0;
    this.button12 = 0;
    this.button13 = 0;
    this.button14 = 0;
    this.button15 = 0;
    this.button16 = 0;
    this.button17 = 0;
    this.button18 = 0;
    this.button19 = 0;
    this.button20 = 0;
    this.button21 = 0;
    this.button22 = 0;
    this.button23 = 0;
    this.button24 = 0;
    this.button25 = 0;
  }

  setcolorsback()
  {
    this.newColor1 = false;
  this.newColor2 = false;
  this.newColor3 = false;
  this.newColor4 = false;
  this.newColor5 = false;
  this.newColor6 = false;
  this.newColor7 = false;
  this.newColor8 = false;
  this.newColor9 = false;
  this.newColor10 = false;
    this.newColor11 = false;
  this.newColor12 = false;
  this.newColor13 = false;
  this.newColor14 = false;
  this.newColor15 = false;
  this.newColor16 = false;
  this.newColor17 = false;
  this.newColor18 = false;
  this.newColor19 = false;
  this.newColor20 = false;
    this.newColor21 = false;
  this.newColor22 = false;
  this.newColor23 = false;
  this.newColor24 = false;
  this.newColor25 = false;

  }

  setallbuttonsvisible()
  {
      this.isShow1 = true;
  this.isShow2 = true;
  this.isShow3 = true;
  this.isShow4 = true;
  this.isShow5 = true;
  this.isShow6 = true;
  this.isShow7 = true;
  this.isShow8 = true;
  this.isShow9 = true;
  this.isShow10 = true;
  this.isShow11 = true;
  this.isShow12 = true;
  this.isShow13 = true;
  this.isShow14 = true;
  this.isShow15 = true;
  this.isShow16 = true;
  this.isShow17 = true;
  this.isShow18 = true;
  this.isShow19 = true;
  this.isShow20 = true;
  this.isShow21 = true;
  this.isShow22 = true;
  this.isShow23 = true;
  this.isShow24 = true;
  this.isShow25 = true;
  }

  setallbuttonsinvisible()
  {
    this.isShow1 = false;
  this.isShow2 = false;
  this.isShow3 = false;
  this.isShow4 = false;
  this.isShow5 = false;
  this.isShow6 = false;
  this.isShow7 = false;
  this.isShow8 = false;
  this.isShow9 = false;
  this.isShow10 = false;
  this.isShow11 = false;
  this.isShow12 = false;
  this.isShow13 = false;
  this.isShow14 = false;
  this.isShow15 = false;
  this.isShow16 = false;
  this.isShow17 = false;
  this.isShow18 = false;
  this.isShow19 = false;
  this.isShow20 = false;
  this.isShow21 = false;
  this.isShow22 = false;
  this.isShow23 = false;
  this.isShow24 = false;
  this.isShow25 = false;
  }

  checkwrongcount(){
    if(this.wrong_count >= 10 || this.val > 10)
  {
    this.setallbuttonsinvisible();
    if(this.userscore>this.highscore)
    {
      this.highscore = this.userscore;
    }
    clearInterval(this.thisintervel);
    this.buttonstate="start";
    this.setallbuttonsinvisible();
      this.userscore=0;
  }
  }

  
}
