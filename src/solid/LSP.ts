// sem principio 

class BirdNot {
  walk(): void {}

  fly(): void {}
}

class DuckNot extends BirdNot {}

class OwlNot extends BirdNot {}

//com pricipio

class Bird {
  walk(): void {}
}

class Flying extends Bird {
  fly(): void {}
}

class AquaticBird extends Bird {
  swim(): void {}
}

class Duck extends AquaticBird {}

class Awl extends Flying {}

// Significa que classes derivadas de uma mesma classe devem poder ser substituídas entre si