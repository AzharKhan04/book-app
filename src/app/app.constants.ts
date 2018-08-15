import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
 public baseUrl: string = '​http://skunkworks.ignitesol.com:8000';

 public countries:any[]=[];

 public getBaseUrl(): string {



   return this.baseUrl;

 }
}


