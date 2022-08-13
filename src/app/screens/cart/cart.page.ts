import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
// import { Geolocation } from "@capacitor/core";
import { darkStyle } from './map-dark-style';
export interface Location {
  name?: string,
  lng?: number,
  lat?: number,
  center?: boolean
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @ViewChild('mapCanvas', { static: true, read: ElementRef }) mapElement: ElementRef;

  public googleMaps: any;
  public map: any;

  public currentUserLocation: Location = {};

  constructor(
    @Inject(DOCUMENT) private document: Document,
  ) { }

  public ngOnInit(): void { }

  public async ngAfterViewInit() {
    this.initializeMap();
  }

  public async initializeMap() {
    // Get application theme and set dark map style if dark theme is enable
    const appEl = this.document.querySelector('ion-app');
    let isDark = false;
    let style = [];
    if (appEl.classList.contains('dark-theme')) {
      style = darkStyle;
    }

    // Initialisation of google map
    const googleMaps = await getGoogleMaps(
      'AIzaSyDorlU725LIY-b34pFoFdXebGVxkXYzfdo'
    );
    this.googleMaps = googleMaps;

    // Get the HTML zone for map injection
    const mapEle = this.mapElement.nativeElement;
    this.map = new googleMaps.Map(mapEle, {
      center: { name: '', lng: 12, lat: 6, center: true },
      zoom: 17,
      styles: style
    });
    // If map is ready then show the map
    googleMaps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
    });

    // Observe if the user set or remove the dark-theme, then render map style
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const el = mutation.target as HTMLElement;
          isDark = el.classList.contains('dark-theme');
          if (this.map && isDark) {
            this.map.setOptions({ styles: darkStyle });
          } else if (this.map) {
            this.map.setOptions({ styles: [] });
          }
        }
      });
    });
    // Set the observer on all the app
    observer.observe(appEl, {
      attributes: true
    });
  }

  // This function will help you to add a marker on your map
  public setMapMarker(markerData: Location): void {
    const infoWindow: any = new this.googleMaps.InfoWindow({
      content: `<h5>Info</h5>`
    });

    const marker = new this.googleMaps.Marker({
      position: markerData,
      map: this.map,
      title: 'Info'
    });

    marker.addListener('click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  /* public getPosition(): void {
    Geolocation.getCurrentPosition().then(coordinates => {
      this.currentUserLocation.lat = coordinates.coords.latitude;
      this.currentUserLocation.lng = coordinates.coords.longitude;
      console.log("coordinates: ", coordinates);
    }).catch(err => {
      console.log("Error: ", err);
    })
  } */

}

// Dinamically get the google map module
function getGoogleMaps(apiKey: string): Promise<any> {
  // If The map if already loaded
  const win = window as any;
  const googleModule = win.google;
  if (googleModule && googleModule.maps) {
    return Promise.resolve(googleModule.maps);
  }
  // Get the map from API ref
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&v=3.31`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    script.onload = () => {
      const googleModule2 = win.google;
      if (googleModule2 && googleModule2.maps) {
        resolve(googleModule2.maps);
      } else {
        reject('google maps not available');
      }
    };
  });
}
