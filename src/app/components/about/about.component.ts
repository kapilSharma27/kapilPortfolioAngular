import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  DownloadFile(fileName: string) {
    // let url = './assets/files/' + fileName;
    // //Create XMLHTTP Request.
    // let req = new XMLHttpRequest();
    // req.open('GET', url, true);
    // req.responseType = 'blob';
    // req.onload = function () {
    //   //Convert the Byte Data to BLOB object.
    //   let blob = new Blob([req.response], {
    //     type: 'application/octetstream',
    //   });
    //   //Check the Browser type and download the File.
    //   let isIE = false || !!document.documentMode;
    //   if (isIE) {
    //     window.navigator.msSaveBlob(blob, fileName);
    //   } else {
    //     let url = window.URL || window.webkitURL;
    //     let link = url.createObjectURL(blob);
    //     let a = document.createElement('a');
    //     a.setAttribute('download', fileName);
    //     a.setAttribute('href', link);
    //     document.body.appendChild(a);
    //     a.click();
    //     document.body.removeChild(a);
    //   }
    // };
    // req.send();
  }
}
