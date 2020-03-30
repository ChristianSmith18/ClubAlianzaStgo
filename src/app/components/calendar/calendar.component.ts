import { Component, AfterContentChecked } from '@angular/core';
import { CalendarDataService } from 'src/app/services/calendar-data.service';
import { CalendarRootData, Day } from 'src/app/models/calendar-data.interfaces';

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

  eventosDelMes: any[];

  constructor(
    private calendar: CalendarDataService
  ) {
    this.calendar.getAllData().subscribe(
      (data: CalendarRootData) => {
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < data.years.length; i++) {
          if (data.years[i].year === new Date().getFullYear()) {

            // tslint:disable-next-line: prefer-for-of
            for (let j = 0; j < data.years[i].months.length; j++) {
              if (data.years[i].months[i].month === new Date().getMonth()) {
                this.createJsonEventos(data.years[i].months[i].days);
                break;
              }
            }
            break;
          }
        }
      }
    );
  }

  validate(dia: number) {
    if (dia < new Date().getDate()) {
      return true;
    }
    return false;
  }

  formatDay(numero: number, index: number): string {
    const span = `
    <i class="fas fa-circle" aria-hidden="true" style="position: absolute;top: 0px;font-size: .5rem;
    color: ${this.listadoColores[index]};"></i>
    `;
    document.getElementById(`day${numero}`).innerHTML = (numero + span);
    return ((numero + '').length === 1) ? ('0' + numero) : ('' + numero);
  }

  createJsonEventos(days: Day[]) {
    const eventos = [];
    let jsonObject;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 1; i <= this.diasMeses[new Date().getMonth()]; i++) {
      // tslint:disable-next-line: prefer-for-of
      for (let j = 0; j < days.length; j++) {
        if (days[j].day === i) {
          // tslint:disable-next-line: prefer-for-of
          for (let k = 0; k < days[j].eventos.length; k++) {
            jsonObject = {
              day: days[j].day,
              event: days[j].eventos[k]
            };
            eventos.push(jsonObject);
          }
        }
      }
    }

    this.eventosDelMes = eventos;
  }

  ngAfterContentChecked() {
    if (this.keyAfterContentChecked) {
      this.generateCalendar();
      this.keyAfterContentChecked = false;
    }
  }

  generateCalendar() {
    const posicionDia =
      // tslint:disable-next-line: max-line-length
      (new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay() === 0) ? 7 : (new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay());
    const diasSobrantes = posicionDia - 2;
    const diaInicial = (this.diasMeses[new Date().getMonth() - 1]) - diasSobrantes;
    let mesbase = 42;

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
          <td id="day${i}" class="current-day" style="position: relative;">
            <i class="fas fa-circle-notch"></i>
            ${i}
          </td>
        </tr>
        <tr>
        `);
        } else {
          tableInnerHTML += ('<td id="day' + i + '">' + i + '</td></tr><tr>');
        }
      } else {
        if (i === new Date().getDate()) {
          // actualDay = i;
          tableInnerHTML += (`
        <td id="day${i}" class="current-day" style="position: relative;">
          <i class="fas fa-circle-notch"></i>
          ${i}
        </td>
        `);
        } else {
          tableInnerHTML += ('<td id="day' + i + '">' + i + '</td>');
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
  }
}
