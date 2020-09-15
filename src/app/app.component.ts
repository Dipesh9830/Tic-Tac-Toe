import { Component } from '@angular/core';
import {ToastrService} from 'ngx-toastr'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  // here we have imported toastr service because if there is already circle then you cannot mark triangle and hence 
    //we want to display that messages and hence we need toastr to do that
  constructor(private toastr:ToastrService){}

    winMsg:string = "";                                                                     // whenever user wins this is for that 
    isCross = false;                                                                                //boolean variable to check if cross is there or not ...false because bydefault cross nhi hoga
    itemArray:string[] = new Array(9).fill("empty")                                                     // this array is for the nine boxes in game....fill karwayenge empty sting se 

  
                                                                                    // this is for clicking because without clicking no function will work    
   handleClick(itemNumber:number){
      if(this.winMsg){
        return this.toastr.success(this.winMsg)
      }                                                                                   // if position empty hai then kya dalega ismei woh malum padega
      if(this.itemArray[itemNumber]=='empty'){
        this.itemArray[itemNumber] = this.isCross ? 'cross': 'circle'; // this is a shortcut for 
        this.isCross = !this.isCross; // upar se false hoke ayega tho true hojayega yahan aake
                                      // if bydefault false hai tho sabse phla no. circle ka ayega tho circle item no. ke wahan jaake  iscross true hojayega
                                      //because not hai n false tha tho next time ayega tho  true hojayega
                                      //n if true hoga tho cross print hoga ...phle circle fir cross fir cirle aise print ho rha.
      }
    
      else {
        return this.toastr.info("Already Filled")
      }
      this.checkWinner(); // this is here because kabhi bhi click krne ke baad you can win

    }

    //After game ends we need to reload it so we take this function 
    reloadGame = ()=> {
      this.winMsg = ""
      this.isCross = false;
      this.itemArray = new Array(9).fill("empty");

    }

    //This function will be use to check the winner 
    checkWinner = ()=>{
      if(
        this.itemArray[0] == this.itemArray[1] &&
        this.itemArray[0] == this.itemArray[2] &&
        this.itemArray[0] != 'empty' 
      ){
        this.winMsg = `${this.itemArray[0]} won`;
      }else if (
        this.itemArray[3] != 'empty' &&
        this.itemArray[3] == this.itemArray[4] &&
        this.itemArray[4] == this.itemArray[5]
      ){
        this.winMsg = `${this.itemArray[3]} won`;
      }else if (
        this.itemArray[6] != 'empty' &&
        this.itemArray[6] == this.itemArray[7] &&
        this.itemArray[7] == this.itemArray[8]
      ){
        this.winMsg = `${this.itemArray[6]} won`;
      }else if (
        this.itemArray[0] != 'empty' &&
        this.itemArray[0] == this.itemArray[3] &&
        this.itemArray[3] == this.itemArray[6]
      ){
        this.winMsg = `${this.itemArray[0]} won`;
      }else if(
        this.itemArray[1] != 'empty' &&
        this.itemArray[1] == this.itemArray[4] &&
        this.itemArray[4] == this.itemArray[7]
      ){
        this.winMsg = `${this.itemArray[1]} won`;
      }
      else if(
        this.itemArray[2] != 'empty' &&
        this.itemArray[2] == this.itemArray[5] &&
        this.itemArray[5] == this.itemArray[7]
      ){
        this.winMsg = `${this.itemArray[2]} won`
      }
      else if(
        this.itemArray[0] != 'empty' &&
        this.itemArray[0] == this.itemArray[4] &&
        this.itemArray[4] == this.itemArray[8]
      ){
        this.winMsg = `${this.itemArray[0]} won`
      }else if(
        this.itemArray[2] != 'empty' &&
        this.itemArray[2] == this.itemArray[4] &&
        this.itemArray[4] == this.itemArray[6]
      ){
        this.winMsg = `${this.itemArray[2]} won`
      }


    } 

  
}
