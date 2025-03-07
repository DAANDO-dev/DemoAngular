import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { HomeComponent } from '../../pages/home/home.component';
import { TimeFormatPipe } from '../../time-format.pipe';
import { ConfirmBoxComponent } from "../confirm-box/confirm-box.component";

@Component({
  selector: 'app-chrono',
  imports: [ConfirmBoxComponent],
  templateUrl: './chrono.component.html',
  styleUrl: './chrono.component.scss'
})


export class ChronoComponent {
    seconds: number = 0;
    intervalId: number | null = null;
    memo: number = 0;
    private _memo = 0;

    showConfirmBox: boolean = false;
    
    confirmReset(ok: boolean) {
      this.showConfirmBox = false;
      if(ok) {
        this.seconds = 0;
        this.stop();
      }
    }

    start(){

      if(this.intervalId){
        return;
      }
      let start = Date.now() - this.memo;
      this.intervalId = window.setInterval(() => {

        this.seconds = Date.now() - start;
      });
    }
    stop(): void {
      if(this.intervalId == null) {
        return;
      }
        window.clearInterval(this.intervalId);
        this.intervalId = null;
        this.memo = this.seconds;
      }
      
    


    reset() {
     if(this.seconds == 0){
      return;
     }
     this.showConfirmBox = true;
    }

}
