interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
      user: TelegramUser;
      [key: string]: any; // Include other properties as necessary
    };
    close: () => void;
    isExpanded: boolean;
    [key: string]: any; // Include other properties as necessary
  }
  
interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}