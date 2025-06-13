import { takeScreenshot } from "../utils/screenshot";

export default function ScreenshotButton() {
  return (
    <button
      onClick={() => takeScreenshot("manual")}
      className="fixed bottom-5 right-5 bg-orange-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-orange-600 transition z-50"
    >
      📸 Take Screenshot
    </button>
  );
}
