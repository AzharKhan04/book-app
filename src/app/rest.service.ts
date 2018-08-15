import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Configuration } from './app.constants';
import { RequestOptionsArgs} from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

   private headers: Headers;

    constructor(private http: Http,private httpClient : HttpClient, private config: Configuration) {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }
    
    private getActionUrl(tempUrl: string) {
    console.log("temp",this.config.getBaseUrl() + tempUrl)

      return this.config.getBaseUrl() + tempUrl;
    }

    // REST functions
    get(url: string,pageNo:Number) {
      return this.httpClient.get('http://skunkworks.ignitesol.com:8000/books/?page='+pageNo);
    }

    post(url: string, body?: any, options?: RequestOptionsArgs) {
      return this.http.post(this.getActionUrl(url),body,options);
    }
 
    put(url: string, body?: any, options?: RequestOptionsArgs) {
      return this.http.put(this.getActionUrl(url),body);
    }
  
    delete(url: string, options?: RequestOptionsArgs) {
       return this.http.delete(this.getActionUrl(url));
    }
  
    patch(url: string, body: any, options?: RequestOptionsArgs) {
      return this.http.delete(this.getActionUrl(url));
    }
}





