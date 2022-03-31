class Logger {
  private messageTimestampMap: Map<string, number>;

  constructor() {
      this.messageTimestampMap = new Map();        
  }

  shouldPrintMessage(timestamp: number, message: string): boolean {
      if(!this.messageTimestampMap.has(message)) {
          this.messageTimestampMap.set(message, timestamp);
          return true;
      }
      
      const lastSeen = this.messageTimestampMap.get(message);

      if ((timestamp - lastSeen) < 10) {
          return false;
      }
      
      this.messageTimestampMap.set(message, timestamp);
      return true;
  }
}

/**
* Your Logger object will be instantiated and called as such:
* var obj = new Logger()
* var param_1 = obj.shouldPrintMessage(timestamp,message)
*/