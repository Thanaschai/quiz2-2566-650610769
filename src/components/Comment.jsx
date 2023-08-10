import Image from "next/image";
import { Reply } from "@/components/Reply";
export const Comment = ({
  userImagePath,
  username,
  likeNum,
  commentText,
  replies,
}) => {
  return (
    <div>
      <div>
        <Reply
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
        {replies !== undefined
          ? replies.map((data) => {
              return (
                <Reply
                  key={data.username}
                  username={data.username}
                  userImagePath={data.userImagePath}
                  replyText={data.replyText}
                  likeNum={data.likeNum}
                />
              );
            })
          : {}}
      </div>
    </div>
  );
};
