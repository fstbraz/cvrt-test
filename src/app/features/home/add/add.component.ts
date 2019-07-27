import { Component, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "convertr-add",
  templateUrl: "./add.component.html",
  styleUrls: ["./add.component.scss"]
})
export class AddComponent {
  advertiseForm: FormGroup;
  opened: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.advertiseForm = this.formBuilder.group({
      profile: []
    });
  }

  submit() {
    console.log(this.advertiseForm.value);
  }
}
