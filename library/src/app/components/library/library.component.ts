import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { IBook } from 'src/app/interfaces/book';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  constructor(private data: DataService) {
    this.data.getBooks();
  }
  books: IBook[] = [];
  displayedColumns: string[] = ['id', 'title', 'genre', 'author'];
  dataSource = this.books;
  ngOnInit(): void {}
  getbooks() {
    this.data.getBooks();
  }
}
