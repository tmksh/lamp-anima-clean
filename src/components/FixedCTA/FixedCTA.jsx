import React from "react";

export const FixedCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white shadow-[0_-2px_10px_rgba(0,0,0,0.1)] border-t border-gray-200">
      <div className="flex items-center justify-center gap-3 px-4 py-3">
        {/* LINE登録ボタン */}
        <a
          href="https://lin.ee/Txaoupt"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 bg-[#06c755] hover:bg-[#05b54a] transition-colors rounded-lg"
        >
          <img
            className="w-6 h-6"
            alt="LINE"
            src="/img/iconfinder-social-media-applications-5line-4102577-113787-1-2-3.svg"
          />
          <span className="font-semibold text-white text-sm [font-family:'Shippori_Mincho',Helvetica]">
            LINE登録
          </span>
        </a>

        {/* HPはこちらボタン */}
        <a
          href="https://lamp-pilates.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 h-12 bg-[#d2a3cb] hover:bg-[#c293bb] transition-colors rounded-lg"
        >
          <span className="font-semibold text-white text-sm [font-family:'Shippori_Mincho',Helvetica]">
            HPはこちら
          </span>
        </a>
      </div>
    </div>
  );
};

