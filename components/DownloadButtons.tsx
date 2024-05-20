const DownloadButtons: React.FC = () => {
    return (
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 p-4">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <div className="bg-black text-white rounded-md flex items-center justify-center w-48 h-12">
            <img src="/google-play-badge.png" alt="Google Play" className="h-full" />
          </div>
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
          <div className="bg-black text-white rounded-md flex items-center justify-center w-48 h-12">
            <img src="/app-store-badge.png" alt="App Store" className="h-full" />
          </div>
        </a>
      </div>
    );
  };
  
  export default DownloadButtons;