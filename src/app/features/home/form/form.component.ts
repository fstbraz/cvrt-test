import { Component, forwardRef, OnDestroy } from "@angular/core";
import {
  NG_VALUE_ACCESSOR,
  FormGroup,
  FormBuilder,
  ControlValueAccessor,
  Validators,
  NG_VALIDATORS,
  FormControl
} from "@angular/forms";
import { Subscription } from "rxjs";

export interface FormValues {
  name: string;
  url: string;
  telephone: string;
  address: string;
  postcode: string;
}

@Component({
  selector: "convertr-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormComponent),
      multi: true
    }
  ]
})
export class FormComponent implements ControlValueAccessor, OnDestroy {
  form: FormGroup;
  subscriptions: Subscription[] = [];

  get value(): FormValues {
    return this.form.value;
  }

  get name() {
    return this.form.get("name");
  }

  get url() {
    return this.form.get("url");
  }

  get telephone() {
    return this.form.get("telephone");
  }

  get address() {
    return this.form.get("address");
  }

  get postcode() {
    return this.form.get("postcode");
  }

  set value(value: FormValues) {
    this.form.setValue(value);
    this.onChange(value);
    this.onTouched();
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      url: ["", Validators.required],
      telephone: ["", Validators.required],
      address: ["", Validators.required],
      postcode: ["", Validators.required]
    });

    this.subscriptions.push(
      this.form.valueChanges.subscribe(value => {
        this.onChange(value);
        this.onTouched();
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn) {
    this.onChange = fn;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  validate(_: FormControl) {
    return this.form.valid ? null : { profile: { valid: false } };
  }
}
