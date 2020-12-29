import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { TouchBlankComponent } from "./touch-blank/touch-blank.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { ForgotPasswordComponent } from "./components/forgot-password/forgot-password.component";
import { AuthGuard } from "./shared/guard/auth.guard";
import { SignInComponent } from "./components/sign-in/sign-in.component";

import { SecureInnerPagesGuard } from "./shared/guard/secure-inner-pages.guard";
import { ShowAnswersComponent } from "./show-answers/show-answers.component";

const routes: Routes = [
  { path: "", redirectTo: "/sign-in", pathMatch: "full" },
  // {path: '', component:  HomePageComponent},
  { path: "blank", component: TouchBlankComponent, canActivate: [AuthGuard] },
  {
    path: "answers",
    component: ShowAnswersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "sign-in",
    component: SignInComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  {
    path: "register-user",
    component: SignUpComponent,
    canActivate: [SecureInnerPagesGuard],
  },
  { path: "create", component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: "forgot-password",
    component: ForgotPasswordComponent,
    canActivate: [SecureInnerPagesGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
