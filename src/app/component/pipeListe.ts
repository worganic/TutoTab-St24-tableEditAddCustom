interface Account {
  user : string,
  appareils : string,
}

export class PipeListe {
  tableOption!: {}[];

  test: [] | undefined;

  async liste(){
    const pipeUser = await import('src/app/component/users/pipe/pipe');
    const pipeAppareils = await import('src/app/component/appareils/pipe/pipe');

    const tableOption = {
      "user": pipeUser.Pipe.prototype,
      "appareils": pipeAppareils.Pipe.prototype
    };


    // return pipeUser.Pipe.prototype;
    return tableOption;
  }
  
}