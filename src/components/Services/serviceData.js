import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import BugReportIcon from '@mui/icons-material/BugReport';
import i18n from '../Trans/i18'
const  iconStyle = {
    height: '80px',
    width: '58px',
    cursor: 'pointer',
    color:'#1C7ED6',
    textAlign:`${i18n.language === 'en'? 'left':'right'}`
    }

const ServiceData = [
    {
          id:1,
          icon:<PhoneIphoneIcon sx={iconStyle} id="icon"/>,
          name:'MOBILE APPLICATION',
          text:"We develop simple modern Android & iOS Mobile Applications"
      },
    {
          id:2,
          icon:<LaptopMacIcon sx={iconStyle} id="icon"/>,
          name:'WEB APPLICATION',
          text:"We develop user-friendly Websites and Web Applications"
      },
    {
          id:3,
          icon:<BugReportIcon sx={iconStyle} id="icon"/>,
          name:'DEBUGING',
          text:"We fix & repair your Web and mobile Applications"
      },
    ]

  export default  ServiceData;