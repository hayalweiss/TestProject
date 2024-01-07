export class Rate {
  rates: Option[] = [];
  success: boolean = true;
  timestamp: number = 0;
  base: string = "";
  date: string = "";
}

//export class Currency {
//  name: string = "";
//  num: number = 0;
//}

export class RateHistory {
  num?: number;
  option1: Option = new Option;
  option2: Option = new Option;
}

export class Option {
  key: string = "";
  value: number = 0;
}
