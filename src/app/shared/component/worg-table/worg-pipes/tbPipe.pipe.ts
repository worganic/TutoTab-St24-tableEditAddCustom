import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tbPipe',
  standalone: true,
})
export class TbPipe implements PipeTransform {
  /**
   * 
   * @param value // Valeur de la colonne.
   * @param columnName // Nom de ma colonne.
   * @param pipe // True si le pipe est utilisé.
   * @param element // Ensemble des données de la ligne.
   * @returns 
   */
  async transform(value: string, columnName?: string, pipe?: boolean, element?: any) {
    
    const section = "user";
    if (pipe == true) {// Si la colonne à un pipe dédié
      if (!columnName) return value;
      // Récupération de la liste des pipes.
      let pipeListe = await import('src/app/component/pipeListe');
      const resA = pipeListe.PipeListe.prototype['liste']();
      const resB: any = (await resA).valueOf();
      const methode: any =  resB[section];
      var ret = false;
      if(value != undefined)ret = methode['fct'](columnName, value, element);
      return ret;
    } else {// Sinon on renvois la donnée pure.
      return value;
    }
  }

/*
  // data :
  async data(columnName: string, value: any): Promise<string> {

   // const bbbbb = "src/app/component/users/pipe/pipe";
   // const bbbbb2 = "d:/lara/www/Angular/3 Tests/project/v17 - Tableau options pipe/worganic-tab/src/app/component/users/pipe/pipe";
   // let recup = await import(bbbbb2);
                              //  src/app/component/users/pipe/pipe
                              
    console.log("TbPipe / data / this.importPipe : ",this.importPipe);
    const res = this.importPipe.date('dsffqs');
    console.log("TbPipe / data / res : ", res);
    const test = 'src/app/component/users/pipe/pipe';
  //  let recup = await import(test);

   console.log("TbPipe / data / this.urlParent : ",this.urlParent);
  //  const url = this.urlParent + '/pipe/pipe' as keyof typeof module;
  //  let recup = await import(url);
 //   var data = recup.Pipe.prototype['fct'](columnName, value, );
  var data = "dd";
    console.log("TbPipe / data / data : ", data);
    return data;
  }
*/

}
