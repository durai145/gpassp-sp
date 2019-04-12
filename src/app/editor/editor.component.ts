
import {Component, ViewChild, OnInit} from '@angular/core';
import {MonacoFile, MonacoEditorDirective} from 'ngx-monaco';
import {Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  heme = 'vs-dark';
  files: MonacoFile[] = [
    {
      uri: 'index.js',
      content: `'use strict';
console.log('Hello World');`
    },
    {
      uri: 'package.json',
      content: `{
	"name": "hello-world",
	"version": "0.0.0"
}`
    }
  ];

  file = this.files[0];

  fileChange = new Subject<MonacoFile>();

  @ViewChild(MonacoEditorDirective) editor: MonacoEditorDirective;

  open(file: any) {
    this.file = file;
  }

  onReady(editor: monaco.editor.IEditor) {
    console.log(editor);
    // Bootstrap(editor);
  }

  ngOnInit() {
    this.fileChange.pipe(
      debounceTime(1000),
      distinctUntilChanged((a, b) => a.content === b.content)
    ).subscribe(file => {
      console.log(file);
    });
  }
}
