import { Component } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  urlInput: string = '';
  shortenedUrl: string = '';

  short() {
    fetch(`https://is.gd/create.php?url=${this.urlInput}&format=json`)
      .then(response => response.json())
      .then(data => {
        this.shortenedUrl = data.shorturl;
        console.log('SUA URL ENCURTADA AQUI:', this.shortenedUrl);
      })
      .catch(error => {
        console.error('Erro ao fazer a solicitação:', error);
      });
  }

  copyUrl() {
    const el = document.createElement('textarea');
    el.value = this.shortenedUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }
}
