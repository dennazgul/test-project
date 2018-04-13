import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(public dialogRef: NgbActiveModal) { }

  ngOnInit() {
  }
  onClose(confirm: boolean = false) {
    this.dialogRef.close(confirm);
  }
}
