import { Component, OnInit } from '@angular/core';
import{HttpClient} from'@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  resData;
newsdata;
constructor( private http:HttpClient) { }
ngOnInit() {
const url="https://newsapi.org/v2/everything?domains=wsj.com&apiKey=c4db212d8fbe4cf4ac896f02ae668d58";
this.http.get(url).subscribe(res=>{
this.resData=res;
this.newsdata=this.resData.articles;
console.log(this.newsdata);
})
}

}
