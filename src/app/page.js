"use client";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3
         shadow-sm bg-white"
      >
        {/* Post Owner Example*/}

        <PostOwner
          imgSrc="/profileImages/001.jpg"
          username="thanaschai Chanabua 650610769"
          postText="Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม 
        #261207"
          likeNum={100}
        />

        {/* Comment Example */}

        {/* <Comment userImagePath="/profileImages/lisa.jpg" username="Lisa" commentText="จริงค่า" likeNum={999} /> */}

        {/* Reply Example */}

        {/* <Reply userImagePath="/profileImages/puppy.jpg" username="หมาน้อย" replyText="จริงค้าบบบบบบบบ" likeNum={2} /> */}

        {/* map-loop render Comment component here */}
        {comments.map((comment) => (
          <Comment
            key={comment.commentText}
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        ))}
      </div>
    </div>
  );
}
