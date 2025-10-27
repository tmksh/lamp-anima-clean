import React from "react";
import { Frame68 } from "../../../../components/Frame68";

export const Frame6 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[70px] pt-20 pb-[120px] px-[90px] relative self-stretch w-full flex-[0_0_auto]">
      <Frame68
        className="!left-[unset] !top-[unset]"
        divClassName="!text-[#111111]"
        divClassNameOverride="!h-[unset] !text-[#111111] !text-[17px] !leading-[28.9px]"
        rectangle="/img/rectangle-64-1.png"
        text="事前面談"
        text1="受講前に個別面談を実施し、あなたの目標や希望に合わせた学習プランを作成します。学びのスタートをサポートする重要なステップです。"
      />
      <Frame68
        className="!left-[unset] !top-[unset]"
        divClassName="!text-[#111111]"
        divClassNameOverride="!h-[unset] !text-[#111111] !text-[17px] !leading-[28.9px]"
        rectangle="/img/rectangle-64-2.png"
        text="講義受講"
        text1="マシンピラティスの基礎から応用まで、実践的な講義を受けられます。少人数制での指導により、スキルをしっかりと習得できます。"
        text2="02"
      />
      <Frame68
        className="!left-[unset] !top-[unset]"
        divClassName="!text-[#111111]"
        divClassNameOverride="!h-[unset] !text-[#111111] !text-[17px] !leading-[28.9px]"
        rectangle="/img/rectangle-64-3.png"
        text="自主練習後、テスト受講"
        text1="自主練習を重ねて実力を高め、実技テストに臨みます。インストラクターとしての技術と知識を確認します。"
        text2="03"
      />
      <Frame68
        className="!left-[unset] !top-[unset]"
        divClassName="!text-[#111111]"
        divClassNameOverride="!h-[unset] !text-[#111111] !text-[17px] !leading-[28.9px]"
        rectangle="/img/rectangle-64-4.png"
        text="卒業認定後、インストラクターとして活躍"
        text1="テスト合格後、正式にインストラクターとしての資格が認定されます。卒業後は、就職支援を活用して、現場での活躍を目指します。"
        text2="04"
      />
    </div>
  );
};
