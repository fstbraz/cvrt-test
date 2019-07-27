import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ClarityModule } from "@clr/angular";
import { EffectsModule } from "@ngrx/effects";

import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { AdvertiserService } from "./../../shared/services/advertiser.service";
import { AdvertiserEffects } from "./../../shared/state/effects/advertiser.effects";

@NgModule({
  declarations: [ListComponent, AddComponent, FormComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: "", component: ListComponent }]),
    EffectsModule.forRoot([AdvertiserEffects])
  ],
  exports: [],
  providers: [AdvertiserService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
