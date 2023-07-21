import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface IPatients {
  "_id": string;
  "index": number;
  "age": number;
  "name": string;
  "gender": string;
  "email": string;
  "registered": string;
}

export const patients = [
    {
      "_id": "64ba56a9ab1e23ef104b3c1b",
      "index": 0,
      "age": 23,
      "name": "Christian Schwartz",
      "gender": "female",
      "email": "christianschwartz@teraprene.com",
      "registered": "2019-09-19T01:34:45 -05:00"
    },
    {
      "_id": "64ba56a9110e4084ca82925f",
      "index": 1,
      "age": 28,
      "name": "Flossie Walters",
      "gender": "female",
      "email": "flossiewalters@teraprene.com",
      "registered": "2019-04-13T11:51:03 -05:00"
    },
    {
      "_id": "64ba56a9c94812dec8ad5817",
      "index": 2,
      "age": 46,
      "name": "Tabatha Stewart",
      "gender": "female",
      "email": "tabathastewart@teraprene.com",
      "registered": "2021-09-04T05:03:35 -05:00"
    },
    {
      "_id": "64ba56a95b7e5e509ee4db37",
      "index": 3,
      "age": 19,
      "name": "Shaw Rosa",
      "gender": "male",
      "email": "shawrosa@teraprene.com",
      "registered": "2020-05-25T05:07:22 -05:00"
    },
    {
      "_id": "64ba56a9f871f35b208ec611",
      "index": 4,
      "age": 18,
      "name": "Giles Juarez",
      "gender": "male",
      "email": "gilesjuarez@teraprene.com",
      "registered": "2023-02-15T04:58:09 -05:00"
    },
    {
      "_id": "64ba56a9f2f7f3271e2c1cb6",
      "index": 5,
      "age": 26,
      "name": "Alfreda Perez",
      "gender": "female",
      "email": "alfredaperez@teraprene.com",
      "registered": "2022-08-19T05:28:20 -05:00"
    },
    {
      "_id": "64ba56a9d5077b0cd359b5d5",
      "index": 6,
      "age": 52,
      "name": "Clark Cooke",
      "gender": "male",
      "email": "clarkcooke@teraprene.com",
      "registered": "2022-06-23T01:18:53 -05:00"
    },
    {
      "_id": "64ba56a99c6fab8dfe42933c",
      "index": 7,
      "age": 21,
      "name": "Haley Pollard",
      "gender": "male",
      "email": "haleypollard@teraprene.com",
      "registered": "2022-10-23T02:37:05 -05:00"
    },
    {
      "_id": "64ba56a9d53022a81b54cc02",
      "index": 8,
      "age": 55,
      "name": "Thomas Rogers",
      "gender": "male",
      "email": "thomasrogers@teraprene.com",
      "registered": "2019-06-05T02:03:00 -05:00"
    },
    {
      "_id": "64ba56a9b6de86cea74bb4e2",
      "index": 9,
      "age": 39,
      "name": "Christine Gamble",
      "gender": "female",
      "email": "christinegamble@teraprene.com",
      "registered": "2022-12-24T09:41:32 -05:00"
    }
  ]

  export const patients$: Observable<IPatients[]> = of(patients)
  .pipe(delay(1000));
