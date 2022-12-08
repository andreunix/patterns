// sem principio 

interface Stream {
  read(): void;
  write(): void;
}

class Read implements Stream {
  read(): void {}
  write(): void {}
}

class Write implements Stream {
  read(): void {}
  write(): void {}
}

//com principio 

interface ReadableStrea {
  read(): void;
}

interface WritableStrea {
  write(): void;
}

class Reader implements ReadableStrea {
  read(): void {}
}

class Writer implements WritableStrea {
  write(): void {}
}

class DuplexStream implements ReadableStrea, WritableStrea {
  read(): void {}
  write(): void {}
}


// Uma class deve depender de uma interface que tenga apenas o essencial