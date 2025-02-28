import ChatHeader from "@/app/chat/components/chat-header";
import ChatBody from "@/app/chat/components/chat-body";
// import HeaderContent from "@/app/chat/components/header-title/header-content";
import HeaderTitle from "@/app/chat/components/header-title/header-title";
import { Suspense } from "react";
import InnerContents from "@/app/chat/components/inner-contents";
import SideFloating from "@/app/chat/components/side-floating";

type Props = {
  params: {
    id: string;
  };
};

export default function Page({ params }: Props) {
  const { id } = params;

  // const response = await getChatInfo(id);

  /*
  * 투표 -> VoteContent
  * 내부컨텐츠 -> InnerContents
  * 일반 -> headerContents
  * */

  const response = {
    title: "타이틀 채팅방 1",
    description: "채팅방입니다 채팅방입니다.",
    // imageUrl: "/images.jpeg",
    content:
      {
        // top: <VoteHeader />,
        // detail: <VoteContent />,
        top: <HeaderTitle />,
        detail: <InnerContents id={id} />,
      },
  };


  return (
    <div className={"flex flex-col h-full min-w-[320px] max-w-[470px]"}>
      <Suspense>
        <ChatHeader
          title={response.title}
          description={response.description}
          // imageUrl={response.imageUrl}
          content={response.content}
        />

        <ChatBody />
        {/*<ChatInput search={false} isReply={false}/>/*/}
      </Suspense>
    </div>
  );
}
