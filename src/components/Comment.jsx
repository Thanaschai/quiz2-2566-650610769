import Image from "next/image";
import { Reply } from "@/components/Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  console.log(replies);

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom">
      <div className="d-flex gap-2 my-2">
        <Image
          src={userImagePath}
          width={48}
          height={48}
          className="rounded-circle"
          style={{ objectFit: "cover" }}
          alt="Commentor Profile Picture"
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          <div
            className={likeNum ? "d-flex align-items-center gap-1" : "d-none"}
          >
            <Image src="/like.svg" width={20} height={20} alt="Like" />
            <span className="text-muted">{likeNum} คน</span>
          </div>
        </div>
      </div>
      <div>
        {replies &&
          replies.map((reply) => (
            <Reply
              key={reply.replyText}
              userImagePath={reply.userImagePath}
              username={reply.username}
              replyText={reply.replyText}
              likeNum={reply.likeNum}
            />
          ))}
      </div>
    </div>
  );
};
