import Image from "next/image";

export const PostOwner = ({ imgSrc, username, postText, likeNum }) => {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <Image
          src={imgSrc}
          width={48}
          height={48}
          className="rounded-circle"
          style={{ objectFit: "cover" }}
          alt="Post Owner Profile Picture"
        />
        <span className="fw-semibold fs-5">{username}</span>
      </div>

      <span>{postText}</span>

      <div className="d-flex align-items-center gap-1">
        <Image src="/like.svg" width={20} height={20} alt="Like" />
        <span className="text-muted">{likeNum} คน</span>
      </div>
      <hr className="m-0 border" />
    </div>
  );
};
