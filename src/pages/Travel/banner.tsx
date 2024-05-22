export default function Banner() {
  return (
    <div className="flex justify-center items-center p-4 w-full">
      <div className="p-4 font-bold">
        <div className="flex flex-row">
          <div className="p-1">
            <img src="/assets/images/wallpaper_banner.png" />
          </div>
          <div className="p-1">
            <img src="/assets/images/guidebook_banner.png" />
          </div>

          <div className="p-1">
            <img src="/assets/images/info_call_banner.png" />
          </div>
        </div>
      </div>
    </div>
  )
}
