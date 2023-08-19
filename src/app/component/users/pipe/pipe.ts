
export class Pipe {

    // Function de base (A ne pas modifer) :
    fct(columnName: string, value: any, element: any) {


    var res = this[columnName as keyof typeof this](columnName, value, element);
    return res;
  }

  /** 
   * firstName :
   *  
   */
  firstName(columnName: string, value: any, element: any): string {
    var tt = "";
    // console.log("Pipe / firstName / value : ", value);
    return "<a href='http://www.google.fr' target='_blank'>" + value + '/ </a> ('+element['id']+')';
  }

  /** 
   * date :
   *  
   * 
   */
  date(columnName: string, value: any): string {
    var val = value[0];
    // console.log("Pipe / date / val : ", val);
    return '<div>' + val['dateDeb'] + '</div><div>' + val['dateFin'] + '<div>';
  }

}