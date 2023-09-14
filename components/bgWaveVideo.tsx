const bgWaveVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="z-0 absolute w-full min-h-full max-w-none"
    >
      <source src="/images/swirl2.mp4" type="video/mp4" />
    </video>
  );
};
export default bgWaveVideo;
