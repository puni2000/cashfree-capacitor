import { Component } from '@angular/core';
import { CFCallback, CFEnvironment, CFPaymentGateway, CFSession, CFWebCheckoutPayment } from "@awesome-cordova-plugins/cashfree-pg";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  initiateWebPayment() {
    const callbacks: CFCallback = {
      onVerify: function (result: any) {
        console.log("This is in the Application Verify: " + JSON.stringify(result));

      },
      onError: function (error: any) {
        console.log("This is in the Application Error: " + JSON.stringify(error));
      }
    };
    CFPaymentGateway.setCallback(callbacks);
    CFPaymentGateway.doWebCheckoutPayment(
      new CFWebCheckoutPayment(
        new CFSession("session_4XVrK_y25_lqUKIcln8TLzBYID1wBpcZqFXH9IywnEtVzPRheOW6D8OfGnCIIdTPmuYa-Rg77aDqE3rGB_XzHRZgtCLlhNDIfzWUsapmks_D",
          "order_70512k0SWYgH11qWZGfiA9RNXiPWPmk",
          CFEnvironment.SANDBOX
        ),
        null)
    );


  }
}
