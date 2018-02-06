import { Component, ViewChild } from '@angular/core';
import {Platform, Nav, ModalController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Keyboard} from "@ionic-native/keyboard";
import { Geolocation } from '@ionic-native/geolocation';
import { Diagnostic } from '@ionic-native/diagnostic';
import {HomePage} from "../pages/home/home";
import { LocalStorage } from './services/localstorage';

//declare var VkSdk;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = "PlacesPage";

  @ViewChild(Nav) nav: Nav;

    pages: any[] = [
        { title: 'Места', component: "PlacesPage" },
        { title: 'Подписка', component: "SubscriptionPage" },
        { title: 'Login', component: 'LoginPage' }
    ];

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    keyboard: Keyboard, 
    private localStorage: LocalStorage,
    public modalCtrl: ModalController,
    private geolocation: Geolocation,
    private diagnostic: Diagnostic) {
    platform.ready().then(() => {

    // this.localStorage.setUserLocation({
    //   latitude: '49.993500,', 
    //   longitude: '36.230383'
    // });

setTimeout(() => {




this.diagnostic.isLocationAuthorized().then((res) => {console.log(res)}, (err) => {console.log(err)})


  let successCallback = (isAvailable) => { 

    console.log(isAvailable,'isAvailable  not_determined')
 this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords, 'resprespresp');
     }).catch((error) => {
       console.log('Error getting location', error);
     });

   };
  let errorCallback = (e) => console.error(e);
  
  this.diagnostic.requestLocationAuthorization().then(successCallback).catch(errorCallback);





   
}, 4000);

      this.initializeRequestForGeolocation();

    

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
          //statusBar.styleDefault();
  
          // VkSdk.init('6356607', function(res) {
          //   console.log(res, 'RESSSSS');
          // }, function(error) {
          //   console.log(error, "ERRRRRR");
          // });



        splashScreen.hide();

        // if (platform.is('ios')) {
        //     keyboard.disableScroll(true);
        // }

    });
  }

    initializeRequestForGeolocation() {
      this.localStorage.getUserLocation().then((geolocation) => {
        if(geolocation === undefined || geolocation === null) {
          console.log(321);
        }
      });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    }

    openCitySelectorModal() {
        let cityModal = this.modalCtrl.create(HomePage);
        cityModal.present();
    }
}

