const bgSwirlVideo = () => {
  return (
    <video
      autoPlay
      loop
      muted
      className="absolute z-0 w-full min-h-full max-w-none"
    >
      <source src="/images/bgTitles.mp4" type="video/mp4" />
    </video>
  );
};
export default bgSwirlVideo;
