import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';

export class aboutNews {
  public source: {
    id: number;
    name: string;
  };
  public author: string;
  public title: string;
  public description: string;
  public url: any;
  public urlToImage: any;
  public publishedAt: string;
  public content: string;
}
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
  title: string;
  content: string;
  author: string;

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.getNews();
  }

  getNews() {
    this.httpClient
      .get<any>(
        'https://newsapi.org/v2/everything?q=tesla&from=2021-09-13&sortBy=publishedAt&apiKey=9d8ef6dd61414705a7e0a9fe3b74d51f'
      )
      .subscribe((response) => {
        let newsInfo: aboutNews[] = response.articles;
        let randomNumbers: number = Math.floor(Math.random() * 20);
        this.title = newsInfo[randomNumbers].title;
        this.content = newsInfo[randomNumbers].content;
        this.author = newsInfo[randomNumbers].author;
      });
  }
}
