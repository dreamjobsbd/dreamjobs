

import { Link, useNavigate } from "react-router-dom";
import JSZip from 'jszip';

import { useAppSelector } from "../../app/hook";

import { cssContent, htmlContent, picture } from "./FileContent";

const FreePortfolio = () => {
  const handleDownload = async () => {
    try {
      // Create a new ZIP file
      const zip = new JSZip();
      
      // Add files to the zip
      zip.file("free-portfolio/index.html", htmlContent);
      zip.file("free-portfolio/index.css", cssContent);
      zip.file("free-portfolio/formal.webp", await (await fetch(picture)).blob());

      // Generate the zip file
      const content = await zip.generateAsync({ type: "blob" });
      
      // Create download link
      const url = window.URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = "free-portfolio.zip";
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error creating zip file:", error);

      // Fallback to individual file downloads
      const downloadFile = (content: any, fileName : any) => {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      };

      downloadFile(htmlContent, "index.html");
      downloadFile(cssContent, "index.css");
      downloadFile(await (await fetch(picture)).blob(), picture);
    }
  };

  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();

  const loginFirst = () => {
    alert("please login first");
    navigate("/login")
  }

  return (
    <div className="w-full">
  <div className="m-3 sm:m-5">
    <div className="w-full max-w-[50rem] mx-auto">
      <img 
        src="free-portfolio.JPG" 
        alt="" 
        className="w-full h-auto"
      />
      <div className="flex flex-col sm:flex-row gap-2 mt-3">
        <Link
          to="https://dreamjobs-free-portfolio.netlify.app/"
          target="_blank"
          className="bg-green-600 text-center p-3 rounded hover:bg-green-700 transition-colors"
        >
          See Live
        </Link>
        <button
          onClick={user ? handleDownload : loginFirst}
          className="bg-yellow-500 p-3 rounded hover:bg-yellow-600 transition-colors"
        >
          Download Free
        </button>
      </div>
    </div>
  </div>
</div>
  );
};

export default FreePortfolio;