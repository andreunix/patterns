//without solid
class CloudNotificationServic {
  sendMessage(): void {
      //
  }
}

class Transactio {
  private notificationService: CloudNotificationServic;

  constructor(notificationService: CloudNotificationServic) {
      this.notificationService = notificationService;
  }

  save(): void {
  //...
      this.notificationService.sendMessage();
  }
}

//with solid
interface NotificationService {
  sendMessage(): void;
}

class CloudNotificationService implements NotificationService {
  sendMessage(): void {
      //
  }
}

class Transaction {
  private notificationService: NotificationService;

  constructor(notificationService: NotificationService) {
      this.notificationService = notificationService;
  }

  save(): void {
      //...
      this.notificationService.sendMessage();
  }
}