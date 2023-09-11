import "./styles/minimalCat.css";
export default function MinimalCat() {
  return (
    <div className="relative h-[170px] w-[192.1px] lg:ml-52">
      <div className="ear ear--left"></div>
      <div className="ear ear--right"></div>
      <div className="face">
        <div className="eye eye--left">
          <div className="eye-pupil"></div>
        </div>
        <div className="eye eye--right">
          <div className="eye-pupil"></div>
        </div>
        <div className="muzzle"></div>
      </div>
    </div>
  );
}
