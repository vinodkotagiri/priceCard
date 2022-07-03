
import './App.css';
import PriceCart from './components/PriceCart';

function App() {
  let data=[
    {
      plan:"FREE",
      price:"0",
      user:"Single User",
      isUser:true,
      storage:"5GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unimited Private Projects",
      isPrivateProject:false,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      subDomain:"Free Subdomain",
      isSubDomain:false,
      reports:"Monthly Status Reports",
      isReports:false,
    },
    {
      plan:"PLUS",
      price:"9",
      user:"5 Users",
      isUser:true,
      storage:"50GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unimited Private Projects",
      isPrivateProject:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subDomain:"Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:false,
    },
    {
      plan:"PRO",
      price:"49",
      user:"Unlimited Users",
      isUser:true,
      storage:"50GB",
      isStorage:true,
      publicProjects:"Unlimited Public Projects",
      isPublicProject:true,
      communityAccess:"Community Access",
      isCommunityAccess:true,
      privateProjects:"Unimited Private Projects",
      isPrivateProject:true,
      phoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      subDomain:"Unlimited Free Subdomain",
      isSubDomain:true,
      reports:"Monthly Status Reports",
      isReports:true,
    },
  ]
  return (
    <>
     {/* This snippet uses Font Awesome 5 Free as a dependency. You can download it at fontawesome.io!  */}

<section className="pricing py-5">
  <div className="container">
    <div className="row">
      {data.map((plan)=>{
        return <PriceCart data={plan}/>
      })}
    </div>
  </div>
</section>

    </>
  );
}

export default App;
