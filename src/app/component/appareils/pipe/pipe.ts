
export class Pipe {

  // Function de base (A ne pas modifer) :
  fct(columnName: string, value: any) {
    var res = this[columnName as keyof typeof this](value);
    return res;
  }

  /** 
   * reference :
   *  
   */
  reference(value: any): string {
    var tt = "";
    // console.log("Pipe / firstName / value : ", value);
    return "reference : " + value + '';
  }

  /** 
   * url :
   *  
   * 
   */
  url(value: any): string {
    var val = value[0];
    // console.log("Pipe / date / val : ", val);
    return '<a href='+value+'>' + value + '<a>';
  }

}