import html2canvas from "html2canvas";

export const takeScreenshot = async (prefix = "screenshot") => {
  const canvas = await html2canvas(document.body);
  const dataUrl = canvas.toDataURL("image/png");

  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `${prefix}-${Date.now()}.png`;
  link.click();
};


