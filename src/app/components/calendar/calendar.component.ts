import { Component, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements AfterContentChecked {

  keyAfterContentChecked = true;
  myday = new Date().getDate();
  today = ((this.myday + '').length > 1) ? ('' + this.myday) : ('0' + this.myday);

  meses = [
    'enero',
    'febrero',
    'marzo',
    'abril',
    'mayo',
    'junio',
    'julio',
    'agosto',
    'septiembre',
    'octubre',
    'noviembre',
    'diciembre'
  ];

  diasMeses = [
    31,
    (new Date().getFullYear() % 4 === 0) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
  ];

  listadoColores = [
    '#1400c6',
    '#beef00',
    'fuchsia',
    'orange',
    '#c89666',
    '#12343b',
    '#ff5e6c',
    '#478559',
    '#ffde22',
    '#ff8928',
    '#555555',
    'black'
  ];

  month = this.meses[new Date().getMonth()];

  constructor() { }

  ngAfterContentChecked() {
    if (this.keyAfterContentChecked) {
      const posicionDia =
        // tslint:disable-next-line: max-line-length
        (new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() === 0) ? 7 : (new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay());
      const diasSobrantes = posicionDia - 2;
      const diaInicial = (this.diasMeses[new Date().getMonth() - 1]) - diasSobrantes;
      let mesbase = 42;

      console.log(diasSobrantes);

      let tableInnerHTML = `
      <tr>
      `;

      for (let i = diaInicial; i <= this.diasMeses[new Date().getMonth() - 1]; i++) {
        if (mesbase % 7 === 1 && mesbase !== 35) {
          tableInnerHTML += ('<td class="other-month">' + i + '</td></tr><tr>');
        } else {
          tableInnerHTML += ('<td class="other-month">' + i + '</td>');
        }

        mesbase--;
      }


      for (let i = 1; i <= this.diasMeses[new Date().getMonth()]; i++) {
        if (mesbase % 7 === 1 && mesbase !== 35) {
          if (i === new Date().getDate()) {
            // actualDay = i;
            tableInnerHTML += (`
              <td class="current-day" style="position: relative;">
                <i class="fas fa-circle-notch"></i>
                ${i}
              </td>
            </tr>
            <tr>
            `);
          } else {
            tableInnerHTML += ('<td>' + i + '</td></tr><tr>');
          }
        } else {
          if (i === new Date().getDate()) {
            // actualDay = i;
            tableInnerHTML += (`
            <td class="current-day" style="position: relative;">
              <i class="fas fa-circle-notch"></i>
              ${i}
            </td>
            `);
          } else {
            tableInnerHTML += ('<td>' + i + '</td>');
          }
        }

        mesbase--;
      }


      for (let i = 1; i <= mesbase; i++) {
        if (mesbase % 7 === 1 && mesbase !== 35) {
          if (mesbase !== i) {
            tableInnerHTML += ('<td class="other-month">' + i + '</td></tr><tr>');
          } else {
            tableInnerHTML += ('<td class="other-month">' + i + '</td></tr>');
          }
        } else {
          tableInnerHTML += ('<td class="other-month">' + i + '</td>');
        }
      }

      document.getElementById('body-table').innerHTML = tableInnerHTML;
      this.keyAfterContentChecked = false;
    }
  }

}
