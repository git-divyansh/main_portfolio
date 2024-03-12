import Doodle from "../Assests/ProjImage/Doodle.png"
import DrMedicine from "../Assests/ProjImage/DrMedicine.png"
import Mindscribe from "../Assests/ProjImage/Mindscribe.png"
import OutlayManager from "../Assests/ProjImage/OutlyaManager.png"
import URLock from "../Assests/ProjImage/UrlLock.png"
import Ecommerce from "../Assests/ProjImage/Ecommerce.png"
import NewApp from "../Assests/ProjImage/NewApp.png"
import image6 from "../Assests/ProjImage/Image6.png"

const ProjectCardData = [
    {
        imgsrc : Mindscribe,
        title : "MindScribe",
        description : "This is a full-stack MERN application that allows users to create, read, update and delete notes. The application has a user authentication system that allows users to sign up and log in. Once logged in, users can create notes with a title and body. They can also edit and delete their notes. The application has a search feature that allows users to search for notes by title or body.",
        view : "https://mindscribe12.netlify.app/",
        source : "https://github.com/git-divyansh/MindScribe"
    },
    {
        imgsrc : Doodle,
        title : "Doodle",
        description : "Doodle facilitates real-time collaborative drawing on a shared canvas, with seamless room creation and joining via unique URLs. Integrated chat functionality enhances communication among participants. Powered by Socket.IO, Doodle ensures smooth real-time interaction. Its responsive design ensures an optimal user experience across devices.",
        view : "https://doodle-sketch.netlify.app/",
        source : "https://github.com/git-divyansh/whiteboard"
    },
    {
        imgsrc : OutlayManager,
        title : "OutLay Manager",
        description : "I developed a web application dedicated to expense management, leveraging the Chart.js library for creating dynamic and interactive data visualizations. The primary objective was to optimize the user experience through a user-centric design approach.  By incorporating Chart.js into your application, you can present financial data in a more digestible and insightful manner. ",
        view : "https://outlaymanager.netlify.app/login",
        source : "https://github.com/git-divyansh/OutlayManager"
    },
    {
        imgsrc : Ecommerce,
        title : "Ecommerce Website",
        description : "Crafted a robust e-commerce platform in just 18 hours leveraging ReactJS and Redux for efficient state management. Features include user authentication for secure login, dynamic cart management allowing addition, deletion, and favoriting of items. Seamless integration with backend API ensures smooth product display and authentication flow. The frontend boasts a responsive design facilitating a user-friendly shopping experience.",
        view : "",
        source : "https://github.com/git-divyansh/Ecommmerce"
    },
    {
        imgsrc : DrMedicine,
        title : "Dr.Medicine",
        description : "Developed a web application using ReactJS, integrated with Tesseract OCR for optical character recognition, web scraping techniques, and a Flask API. This application's primary purpose is to extract medicine names from various sources and provide relevant information about them. Additionally, I optimized the medicine name identification process by implementing a fuzzy search algorithm, resulting in a significant reduction in identification time.",
        view : "",
        source : "https://github.com/git-divyansh/Epics-proj"
    },
    {
        imgsrc : NewApp,
        title : "NewApp",
        description : "Developed a dynamic news application utilizing ReactJS and a robust News API, offering diverse categories such as sports, business, commerce, and entertainment. Incorporates both dark and light mode themes to cater to user preferences, ensuring optimal readability. Seamlessly delivers real-time news updates with an intuitive interface for effortless navigation. Enhanced functionality allows users to customize their news experience based on their interests.",
        view : "",
        source : "https://github.com/git-divyansh/News-app"
    },
    {
        imgsrc : URLock,
        title : "URLock",
        description : "Circuit-level gateways offer a wider variety of possible rules than other firewalls along with its proxy service, so it is more versatile in this regard. For example, it can block specific URLs from being accessed, whereas a packet filter would need the IP address of the website, which may not be unique since many large companies such as Google use multiple servers. This code is made to run the file on Kali Linux but yes you can run it on any other os as well. Just you need to change the 'host_path'. ",
        view : "",
        source : "https://github.com/git-divyansh/Circuit-Level-Firewall"
    },
    {
        imgsrc : image6,
        title : "Port Scanner",
        description : "A port scanner is an essential utility in the domain of network security and administration. It plays a pivotal role in systematically probing and assessing the status of open ports on a computer or network to discern potential security vulnerabilities or services actively running on those ports. This tool operates by sending a series of network requests to specific port numbers associated with a target system or network device. It aids in the proactive identification of potential vulnerabilities.",
        view : "",
        source : "https://github.com/git-divyansh/Port-Scanner"
    }
];

export default ProjectCardData;