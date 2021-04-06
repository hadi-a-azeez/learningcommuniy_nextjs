import { useEffect } from "react";

const ChatRoom = () => {
  const servers = {
    iceServers: [
      {
        urls: [
          "stun:stun1.l.google.com:19302",
          "stun:stun2.l.google.com:19302",
        ],
      },
    ],
    iceCandidatePoolSize: 10,
  };
  // Global State
  const pc = new RTCPeerConnection(servers);
  let localStream = null;
  let remoteStream = null;

  useEffect(() => {
    localStream = navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    remoteStream = new MediaStream();

    // Push tracks from local stream to peer connection
    localStream.getTracks().forEach((track) => {
      pc.addTrack(track, localStream);
    });
    const webcamVideo = document.getElementById("webcamVideo");
    webcamVideo.srcObject = localStream;
  }, []);

  return (
    <>
      <div>
        <span>
          <h3>Local Stream</h3>
          <video
            id="webcamVideo"
            autoplay
            playsinline
            style={{ width: "100%", height: "auto" }}
          ></video>
        </span>
      </div>
    </>
  );
};

export default ChatRoom;
