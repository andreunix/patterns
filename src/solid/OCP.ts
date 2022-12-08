//sem principio

class Provider {
  calculateCust(T: string): number | string  {
    if (T == 'email') { return 1 }
    else if ( T == 'internet') { return 2 }
    else { throw new Error("NOT PROVADER") }
  }
}

//com principio 
interface IProvider {
  calculateCust(): number;
}

class EmailProvader implements IProvider {
  calculateCust(): number { return 1 }
}

class InternetProvader implements IProvider {
  calculateCust(): number { return 2 }
}

class PhoneProvader implements IProvider {
  calculateCust(): number { return 3 }
}

// Você deve ter sempre a possibilidade de expandir seu codigo sem a nececidade de modificar os ja existentes