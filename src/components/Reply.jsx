import Image from "next/image";
export const Reply = ({ userImagePath, username, replyText, likeNum }) => {
  return (
    <div>
      <div className="d-flex gap-2 my-2 ps-5">
        <Image
          src={userImagePath}
          width={48}
          height={48}
          className="rounded-circle"
          style={{ objectFit: "cover" }}
          alt="Reply Profile picture"
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{replyText}</span>
          <div
            className={likeNum ? "d-flex align-items-center gap-1" : "d-none"}
          >
            <Image src="/like.svg" width={20} height={20} alt="Like" />
            <span className="text-muted">{likeNum} คน </span>
          </div>
        </div>
      </div>
    </div>
  );
};
