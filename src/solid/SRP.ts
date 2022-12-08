// Sem principio 
class EmailServiceNot {
  validateEmailAndSend(email: string): boolean { return true }
}
//com principio
class EmailService {
  sendEmail(email: string): boolean { return true }
}

class Validator {
  validateEmail(email: string): boolean { return true }
}

//Sempre separar responsabilidades para evitar acoplamento